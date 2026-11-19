/**
 * GUMSHOE One-2-One: Sistema Táctico de Cartas y Retos para Foundry VTT (v12 - v14)
 * Arquitectura basada en documentos nativos `Cards` y `Card` con `flags["gumshoe-one-to-one-cards"]`
 * Incluye las 75 cartas oficiales de "Never Say Dead" (Night's Black Agents: Solo Ops) traducidas y con sus recortes originales.
 */

import { NEVER_SAY_DEAD_CARDS } from "./never-say-dead-cards.js";

const MODULE_ID = "gumshoe-one-to-one-cards";
const SOCKET_NAME = `module.${MODULE_ID}`;

/** Categorías soportadas (NBA: Solo Ops + Cthulhu Confidential + Contactos) */
const CARD_CATEGORIES = {
  edge: {
    luck: { label: "Ventaja de Suerte (Luck)", icon: "fa-clover", color: "#10b981" },
    mastery: { label: "Ventaja de Maestría (Mastery)", icon: "fa-crosshairs", color: "#0ea5e9" },
    counter: { label: "Contramedida (Counter)", icon: "fa-shield-halved", color: "#f59e0b" },
    generic: { label: "Ventaja General (Edge)", icon: "fa-thumbs-up", color: "#22c55e" }
  },
  problem: {
    injury: { label: "Herida (Injury)", icon: "fa-heart-crack", color: "#ef4444" },
    heat: { label: "Presión / Alerta (Heat)", icon: "fa-siren-on", color: "#f97316" },
    shadow: { label: "Sombra / Vampiros (Shadow)", icon: "fa-eye", color: "#a855f7" },
    shock: { label: "Conmoción (Shock)", icon: "fa-bolt", color: "#eab308" },
    trouble: { label: "Complicación (Trouble)", icon: "fa-triangle-exclamation", color: "#ec4899" },
    mythos: { label: "Mitos (Mythos)", icon: "fa-skull", color: "#8b5cf6" }
  },
  contact: {
    contact: { label: "Contacto / Aliado (Contact)", icon: "fa-address-card", color: "#eab308" }
  }
};

/* ==========================================================================
   ESTADO GLOBAL DEL MÓDULO
   ========================================================================== */
const One2OneState = {
  dockMinimized: false,
  dockExpandedView: true,
  forceOriginalImageView: false, // Permite alternar al vuelo entre CSS en Español y Recorte Original del PDF
  gmActiveTab: "deck", // "deck" | "hand" | "discard" | "continuity"
  gmFilterType: "all", // "all" | "edge" | "problem" | "contact"
  gmFilterCategory: "all",
  gmSortMode: "alpha_es", // "alpha_es" | "alpha_en" | "code_num"
  gmSearchQuery: "",
  activeChallenge: null
};

/* ==========================================================================
   UTILIDADES DE MAZOS NATIVOS (`Cards` y `Card`)
   ========================================================================== */
async function ensureCardStacks() {
  const stacks = {
    deck: game.cards.find(c => c.getFlag(MODULE_ID, "stackRole") === "deck"),
    hand: game.cards.find(c => c.getFlag(MODULE_ID, "stackRole") === "hand"),
    discard: game.cards.find(c => c.getFlag(MODULE_ID, "stackRole") === "discard"),
    continuity: game.cards.find(c => c.getFlag(MODULE_ID, "stackRole") === "continuity")
  };

  if (!game.user.isGM) return stacks;

  const ownerPerm = { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER };
  const observerPerm = { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER };
  const nonePerm = { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.NONE };

  if (!stacks.deck) {
    stacks.deck = await Cards.create({
      name: "GUMSHOE 1-2-1: Reserva del GM",
      type: "deck",
      description: "Repositorio de cartas (Problemas, Ventajas y Contactos) preparadas por el Director de Juego.",
      ownership: nonePerm,
      flags: { [MODULE_ID]: { stackRole: "deck" } }
    });
  }

  if (!stacks.hand) {
    stacks.hand = await Cards.create({
      name: "GUMSHOE 1-2-1: Mesa del Agente",
      type: "hand",
      description: "Cartas activas sobre la mesa frente al investigador.",
      ownership: ownerPerm,
      flags: { [MODULE_ID]: { stackRole: "hand" } }
    });
  }

  if (!stacks.discard) {
    stacks.discard = await Cards.create({
      name: "GUMSHOE 1-2-1: Pila de Descartes",
      type: "pile",
      description: "Ventajas gastadas y Problemas resueltos durante la operación.",
      ownership: ownerPerm,
      flags: { [MODULE_ID]: { stackRole: "discard" } }
    });
  }

  if (!stacks.continuity) {
    stacks.continuity = await Cards.create({
      name: "GUMSHOE 1-2-1: Archivo de Continuidad",
      type: "pile",
      description: "Cartas con etiqueta Continuity que persisten para la siguiente operación.",
      ownership: observerPerm,
      flags: { [MODULE_ID]: { stackRole: "continuity" } }
    });
  }

  return stacks;
}

function getStacksSync() {
  return {
    deck: game.cards?.find(c => c.getFlag(MODULE_ID, "stackRole") === "deck") || null,
    hand: game.cards?.find(c => c.getFlag(MODULE_ID, "stackRole") === "hand") || null,
    discard: game.cards?.find(c => c.getFlag(MODULE_ID, "stackRole") === "discard") || null,
    continuity: game.cards?.find(c => c.getFlag(MODULE_ID, "stackRole") === "continuity") || null
  };
}

/** Extrae y normaliza los flags de una carta */
function getCardData(cardDoc) {
  const raw = cardDoc.flags?.[MODULE_ID] || {};
  const cardType = ["edge", "problem", "contact"].includes(raw.cardType) ? raw.cardType : "problem";
  const defaultCat = cardType === "edge" ? "luck" : (cardType === "contact" ? "contact" : "injury");
  const category = raw.category || defaultCat;
  const catInfo = CARD_CATEGORIES[cardType]?.[category] || {
    label: category,
    icon: cardType === "edge" ? "fa-thumbs-up" : (cardType === "contact" ? "fa-address-card" : "fa-thumbs-down"),
    color: cardType === "edge" ? "#10b981" : (cardType === "contact" ? "#eab308" : "#ef4444")
  };

  const img = cardDoc.faces?.[0]?.img || cardDoc.img || "icons/sundries/gaming/playing-cards-grey.webp";
  const ticks = {
    enabled: Boolean(raw.ticks?.enabled),
    current: Number(raw.ticks?.current ?? 0),
    max: Math.max(1, Number(raw.ticks?.max ?? 3)),
    penaltyPerTick: Boolean(raw.ticks?.penaltyPerTick)
  };

  const baseMod = Number(raw.modifier ?? 0);
  const effectiveModifier = (ticks.enabled && ticks.penaltyPerTick)
    ? (baseMod * ticks.current)
    : baseMod;

  return {
    id: cardDoc.id,
    parentId: cardDoc.parent?.id,
    code: raw.code || "",
    originalName: raw.originalName || "",
    name: cardDoc.name,
    img,
    description: cardDoc.description || "",
    renderMode: raw.renderMode || "parametric", // "parametric" | "fullImage"
    cardType,
    category,
    categoryLabel: catInfo.label,
    categoryIcon: catInfo.icon,
    duration: raw.duration || (cardType === "edge" ? "single" : "ongoing"),
    modifier: baseMod,
    effectiveModifier,
    dicePenalty: Number(raw.dicePenalty ?? 0),
    bonusDice: Number(raw.bonusDice ?? (cardType === "edge" ? 1 : 0)),
    investigativeAbilities: raw.investigativeAbilities || "",
    generalAbilities: raw.generalAbilities || "",
    mechanicalEffect: raw.mechanicalEffect || "",
    clearCondition: raw.clearCondition || "",
    ticks,
    tags: {
      continuity: Boolean(raw.tags?.continuity),
      doom: Boolean(raw.tags?.doom),
      seriousInjury: Boolean(raw.tags?.seriousInjury),
      clue: Boolean(raw.tags?.clue),
      vampire: Boolean(raw.tags?.vampire),
      blowback: Boolean(raw.tags?.blowback),
      counterTarget: raw.tags?.counterTarget || ""
    },
    sceneRef: raw.sceneRef || ""
  };
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildCardDocumentData(payload) {
  return {
    name: payload.name || "Nueva Carta",
    type: "base",
    description: payload.description || "",
    faces: [
      {
        name: payload.name || "Nueva Carta",
        img: payload.img || "icons/sundries/gaming/playing-cards-grey.webp",
        text: payload.description || ""
      }
    ],
    face: 0,
    flags: {
      [MODULE_ID]: {
        code: payload.flags.code || "",
        originalName: payload.flags.originalName || "",
        renderMode: payload.flags.renderMode || "parametric",
        cardType: payload.flags.cardType || "problem",
        category: payload.flags.category || "injury",
        duration: payload.flags.duration || "ongoing",
        modifier: Number(payload.flags.modifier ?? 0),
        dicePenalty: Number(payload.flags.dicePenalty ?? 0),
        bonusDice: Number(payload.flags.bonusDice ?? 0),
        investigativeAbilities: payload.flags.investigativeAbilities || "",
        generalAbilities: payload.flags.generalAbilities || "",
        mechanicalEffect: payload.flags.mechanicalEffect || "",
        clearCondition: payload.flags.clearCondition || "",
        ticks: {
          enabled: Boolean(payload.flags.ticks?.enabled),
          current: Number(payload.flags.ticks?.current ?? 0),
          max: Number(payload.flags.ticks?.max ?? 3),
          penaltyPerTick: Boolean(payload.flags.ticks?.penaltyPerTick)
        },
        tags: {
          continuity: Boolean(payload.flags.tags?.continuity),
          doom: Boolean(payload.flags.tags?.doom),
          seriousInjury: Boolean(payload.flags.tags?.seriousInjury),
          clue: Boolean(payload.flags.tags?.clue),
          vampire: Boolean(payload.flags.tags?.vampire),
          blowback: Boolean(payload.flags.tags?.blowback),
          counterTarget: payload.flags.tags?.counterTarget || ""
        },
        sceneRef: payload.flags.sceneRef || ""
      }
    }
  };
}

async function createOne2OneCard(targetStack, payload) {
  if (!targetStack) {
    ui.notifications.error("No se encontró el mazo destino. Asegúrate de que el GM haya iniciado el mundo.");
    return null;
  }
  const cardData = buildCardDocumentData(payload);
  const created = await targetStack.createEmbeddedDocuments("Card", [cardData]);
  return created?.[0] || null;
}

/** Importa en lote las 75 cartas de Never Say Dead (sin duplicar si ya existen por código) */
async function importNeverSayDeadPack() {
  const stacks = await ensureCardStacks();
  if (!stacks.deck) return;

  const existingCodes = new Set(
    Array.from(stacks.deck.cards.values())
      .map(c => c.getFlag(MODULE_ID, "code"))
      .filter(Boolean)
  );

  const toCreate = NEVER_SAY_DEAD_CARDS
    .filter(item => !existingCodes.has(item.flags.code))
    .map(item => buildCardDocumentData(item));

  if (toCreate.length === 0) {
    ui.notifications.info("Las 75 cartas de 'Never Say Dead' ya están todas en la Reserva del GM.");
    return;
  }

  await stacks.deck.createEmbeddedDocuments("Card", toCreate);
  ui.notifications.info(`¡Importadas ${toCreate.length} cartas oficiales de 'Never Say Dead' (48 Problemas, 21 Ventajas y 6 Contactos) en español con sus imágenes recortadas!`);
}

async function transferCardBetweenStacks(cardDoc, targetStack) {
  if (!cardDoc || !targetStack) return null;
  const sourceStack = cardDoc.parent;
  if (sourceStack?.id === targetStack.id) return cardDoc;

  const rawData = cardDoc.toObject();
  delete rawData._id;
  rawData.drawn = false;

  const created = await targetStack.createEmbeddedDocuments("Card", [rawData]);
  await sourceStack.deleteEmbeddedDocuments("Card", [cardDoc.id]);
  return created?.[0] || null;
}

/* ==========================================================================
   RENDERIZADO DE UNA CARTA (HTML REUTILIZABLE EN DOCK Y GM DRAWER)
   ========================================================================== */
function renderCardHTML(cardDoc, context = "hand") {
  const c = getCardData(cardDoc);
  const typeIcon = c.cardType === "edge" ? "fa-thumbs-up" : (c.cardType === "contact" ? "fa-address-card" : "fa-thumbs-down");
  const durationLabel = c.duration === "single" ? "1 Uso" : "Continua";

  // Casillas de Ticks si están activadas
  let ticksHTML = "";
  if (c.ticks.enabled) {
    let boxes = "";
    for (let i = 1; i <= c.ticks.max; i++) {
      const filled = i <= c.ticks.current ? "filled" : "";
      boxes += `<span class="o2o-tick-box ${filled}" data-action="set-tick" data-card-id="${c.id}" data-stack-id="${c.parentId}" data-tick="${i}" title="Marca ${i}/${c.ticks.max}">${i <= c.ticks.current ? "✕" : ""}</span>`;
    }
    ticksHTML = `
      <div class="o2o-ticks-bar">
        <div class="o2o-ticks-boxes">
          <span style="font-size:10px; font-weight:700; color:#cbd5e1; margin-right:3px;">MARCAS (${c.ticks.current}/${c.ticks.max}):</span>
          ${boxes}
        </div>
        <div class="o2o-ticks-controls">
          <button type="button" class="o2o-tick-btn" data-action="delta-tick" data-delta="-1" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Quitar marca">-</button>
          <button type="button" class="o2o-tick-btn" data-action="delta-tick" data-delta="1" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Añadir marca">+</button>
        </div>
      </div>
    `;
  }

  // Etiquetas especiales
  const tags = [];
  if (c.code) tags.push(`<span class="o2o-tag tag-scene" style="background:rgba(56,189,248,0.22); color:#7dd3fc;">${escapeHtml(c.code)}</span>`);
  tags.push(`<span class="o2o-tag tag-duration">${durationLabel}</span>`);
  if (c.tags.seriousInjury) tags.push(`<span class="o2o-tag tag-doom">HERIDA GRAVE</span>`);
  if (c.tags.vampire) tags.push(`<span class="o2o-tag tag-doom" style="background:rgba(168,85,247,0.3); border-color:#a855f7; color:#e9d5ff;">VAMPIRO</span>`);
  if (c.tags.blowback) tags.push(`<span class="o2o-tag tag-continuity">BLOWBACK</span>`);
  if (c.tags.clue) tags.push(`<span class="o2o-tag tag-counter"><i class="fas fa-magnifying-glass"></i> PISTA (CLUE)</span>`);
  if (c.tags.continuity) tags.push(`<span class="o2o-tag tag-continuity"><i class="fas fa-infinity"></i> Continuidad</span>`);
  if (c.tags.doom) tags.push(`<span class="o2o-tag tag-doom"><i class="fas fa-skull"></i> DOOM</span>`);
  if (c.tags.counterTarget) tags.push(`<span class="o2o-tag tag-counter"><i class="fas fa-shield-halved"></i> Anula: ${escapeHtml(c.tags.counterTarget)}</span>`);

  // Badge numérico si tiene modificador o dados extra/penalizados
  const modBadges = [];
  if (c.cardType === "problem") {
    if (c.effectiveModifier !== 0) {
      modBadges.push(`<span class="o2o-mod-badge" style="color:#fca5a5;">${c.effectiveModifier > 0 ? `+${c.effectiveModifier}` : c.effectiveModifier}</span>`);
    }
    if (c.dicePenalty !== 0) {
      modBadges.push(`<span class="o2o-mod-badge" style="color:#fca5a5;">${c.dicePenalty}d6</span>`);
    }
  } else if (c.bonusDice > 0) {
    modBadges.push(`<span class="o2o-mod-badge" style="color:#6ee7b7;">+${c.bonusDice}d6</span>`);
  }
  const modBadgeHTML = modBadges.join(" ");

  // Botones de pie según dónde esté la carta
  let footerBtns = "";
  if (context === "hand") {
    const spendLabel = c.cardType === "edge"
      ? (c.duration === "single" ? `<i class="fas fa-bolt"></i> Gastar` : `<i class="fas fa-check"></i> Descartar`)
      : (c.cardType === "contact" ? `<i class="fas fa-user-slash"></i> Retirar` : `<i class="fas fa-check-circle"></i> Resolver`);
    const btnClass = c.cardType === "edge" ? "o2o-btn-success" : "o2o-btn";

    footerBtns = `
      <div style="display:flex; gap:4px;">
        <button type="button" class="o2o-btn ${btnClass}" data-action="spend-resolve" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Gastar o resolver esta carta y enviarla al descarte">
          ${spendLabel}
        </button>
        ${c.tags.counterTarget ? `<button type="button" class="o2o-btn o2o-btn-gm" data-action="apply-counter" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Usar contramedida contra ${escapeHtml(c.tags.counterTarget)}"><i class="fas fa-shield-halved"></i> Anular</button>` : ""}
      </div>
      <div style="display:flex; gap:4px;">
        ${game.user.isGM ? `<button type="button" class="o2o-btn" data-action="return-to-deck" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Retirar de la mesa y devolver a la Reserva del GM"><i class="fas fa-box-archive"></i> Reserva</button>` : ""}
        <button type="button" class="o2o-btn" data-action="share-chat" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Mostrar carta en el Chat"><i class="fas fa-comment-dots"></i></button>
        <button type="button" class="o2o-btn" data-action="inspect-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Ver Imagen Original PDF + Traducción Completa"><i class="fas fa-magnifying-glass-plus"></i></button>
        ${game.user.isGM ? `<button type="button" class="o2o-btn" data-action="edit-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Editar carta"><i class="fas fa-pen"></i></button>` : ""}
      </div>
    `;
  } else if (context === "gm-deck") {
    footerBtns = `
      <button type="button" class="o2o-btn o2o-btn-gm" data-action="deal-to-hand" data-card-id="${c.id}" data-stack-id="${c.parentId}">
        <i class="fas fa-hand-holding-magic"></i> Entregar a Mesa
      </button>
      <div style="display:flex; gap:4px;">
        <button type="button" class="o2o-btn" data-action="inspect-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Ver Imagen Original + Traducción"><i class="fas fa-magnifying-glass-plus"></i></button>
        <button type="button" class="o2o-btn" data-action="duplicate-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Duplicar carta"><i class="fas fa-copy"></i></button>
        <button type="button" class="o2o-btn" data-action="edit-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Editar carta"><i class="fas fa-pen"></i></button>
        <button type="button" class="o2o-btn o2o-btn-danger" data-action="delete-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Eliminar carta"><i class="fas fa-trash"></i></button>
      </div>
    `;
  } else {
    footerBtns = `
      <button type="button" class="o2o-btn o2o-btn-success" data-action="deal-to-hand" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Devolver a la mesa del jugador">
        <i class="fas fa-rotate-left"></i> A Mesa
      </button>
      <div style="display:flex; gap:4px;">
        <button type="button" class="o2o-btn" data-action="return-to-deck" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Mover a la Reserva del GM"><i class="fas fa-box-archive"></i> Reserva</button>
        <button type="button" class="o2o-btn" data-action="inspect-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Ampliar"><i class="fas fa-magnifying-glass-plus"></i></button>
        <button type="button" class="o2o-btn" data-action="edit-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Editar"><i class="fas fa-pen"></i></button>
        <button type="button" class="o2o-btn o2o-btn-danger" data-action="delete-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" title="Eliminar"><i class="fas fa-trash"></i></button>
      </div>
    `;
  }

  const useFullImage = c.renderMode === "fullImage" || (One2OneState.forceOriginalImageView && !c.img.includes("playing-cards-grey.webp"));

  // --- MODO 1: CARTA DE IMAGEN COMPLETA / RECORTE ORIGINAL PDF ---
  if (useFullImage) {
    return `
      <div class="o2o-card mode-fullImage ${c.tags.doom ? "has-doom" : ""}" data-card-id="${c.id}" data-stack-id="${c.parentId}" data-card-type="${c.cardType}" data-category="${c.category}">
        <div class="o2o-card-banner">
          <span><i class="fas ${typeIcon}"></i> ${escapeHtml(c.categoryLabel)}</span>
          <div>${modBadgeHTML}</div>
        </div>
        <img class="o2o-card-fullimg-media" src="${escapeHtml(c.img)}" alt="${escapeHtml(c.name)}" data-action="inspect-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" />
        <div class="o2o-card-fullimg-overlay">
          <div class="o2o-card-title-row">
            <h4 class="o2o-card-title" data-action="inspect-card" data-card-id="${c.id}" data-stack-id="${c.parentId}">${escapeHtml(c.name)}</h4>
          </div>
          <div class="o2o-tags-row">${tags.join("")}</div>
          ${ticksHTML}
        </div>
        <div class="o2o-card-footer">
          ${footerBtns}
        </div>
      </div>
    `;
  }

  // --- MODO 2: DISEÑO CSS PARAMÉTRICO EN ESPAÑOL ---
  const isCroppedPdfCard = c.img.includes("never-say-dead/");
  const showArt = c.img && !c.img.includes("playing-cards-grey.webp") && !isCroppedPdfCard;

  return `
    <div class="o2o-card mode-parametric ${c.tags.doom ? "has-doom" : ""}" data-card-id="${c.id}" data-stack-id="${c.parentId}" data-card-type="${c.cardType}" data-category="${c.category}">
      <div class="o2o-card-banner">
        <span><i class="fas ${typeIcon}"></i> <i class="fas ${c.categoryIcon}"></i> ${escapeHtml(c.categoryLabel)}</span>
        <div>${modBadgeHTML}</div>
      </div>
      ${showArt ? `<img class="o2o-card-art" src="${escapeHtml(c.img)}" alt="${escapeHtml(c.name)}" data-action="inspect-card" data-card-id="${c.id}" data-stack-id="${c.parentId}" />` : ""}
      <div class="o2o-card-content">
        <div class="o2o-card-title-row">
          <h4 class="o2o-card-title" data-action="inspect-card" data-card-id="${c.id}" data-stack-id="${c.parentId}">${escapeHtml(c.name)}</h4>
        </div>
        ${c.description ? `<p class="o2o-card-desc">${escapeHtml(c.description)}</p>` : ""}
        ${c.cardType === "contact" ? `
          ${c.investigativeAbilities ? `<div class="o2o-card-effect" style="border-left-color:#eab308;"><strong>Habilidades Investigación:</strong> ${escapeHtml(c.investigativeAbilities)}</div>` : ""}
          ${c.generalAbilities ? `<div class="o2o-card-clear"><strong>Habilidades Generales:</strong> ${escapeHtml(c.generalAbilities)}</div>` : ""}
        ` : `
          ${c.mechanicalEffect ? `<div class="o2o-card-effect"><strong>Efecto:</strong> ${escapeHtml(c.mechanicalEffect)}</div>` : ""}
          ${c.clearCondition ? `<div class="o2o-card-clear"><strong>Descarte:</strong> ${escapeHtml(c.clearCondition)}</div>` : ""}
        `}
        <div class="o2o-tags-row">${tags.join("")}</div>
        ${ticksHTML}
      </div>
      <div class="o2o-card-footer">
        ${footerBtns}
      </div>
    </div>
  `;
}

/* ==========================================================================
   1. TABLETOP DOCK (HUD PERSISTENTE EN MESA)
   ========================================================================== */
function renderTabletopDock() {
  const stacks = getStacksSync();
  const hand = stacks.hand;

  let dockEl = document.getElementById("one2one-tabletop-dock");
  if (!dockEl) {
    dockEl = document.createElement("section");
    dockEl.id = "one2one-tabletop-dock";
    document.body.appendChild(dockEl);
    dockEl.addEventListener("click", onContainerActionClick);
  }

  dockEl.classList.toggle("is-minimized", One2OneState.dockMinimized);
  dockEl.classList.toggle("view-expanded", One2OneState.dockExpandedView);

  const cards = hand ? Array.from(hand.cards.values()) : [];
  const edgesAndContacts = cards.filter(c => ["edge", "contact"].includes(getCardData(c).cardType));
  const edgesCount = cards.filter(c => getCardData(c).cardType === "edge").length;
  const contactsCount = cards.filter(c => getCardData(c).cardType === "contact").length;
  const problems = cards.filter(c => getCardData(c).cardType === "problem");
  const doomCount = problems.filter(c => getCardData(c).tags.doom).length;

  dockEl.innerHTML = `
    <header class="o2o-dock-header">
      <div class="o2o-dock-brand">
        <i class="fas fa-layer-group"></i>
        <span>Mesa GUMSHOE One-2-One</span>
        <div class="o2o-dock-counters">
          <span class="o2o-pill-count edge" title="Ventajas activas en mesa">
            <i class="fas fa-thumbs-up"></i> ${edgesCount} Ventajas
          </span>
          ${contactsCount > 0 ? `
            <span class="o2o-pill-count contact" title="Contactos activos en mesa">
              <i class="fas fa-address-card"></i> ${contactsCount} Contactos
            </span>
          ` : ""}
          <span class="o2o-pill-count problem" title="Problemas activos en mesa">
            <i class="fas fa-thumbs-down"></i> ${problems.length} Problemas
          </span>
          ${doomCount > 0 ? `<span class="o2o-pill-count doom-alert" title="¡Hay cartas con riesgo fatal (DOOM) en la mesa!"><i class="fas fa-skull"></i> ${doomCount} DOOM</span>` : ""}
        </div>
      </div>

      <div class="o2o-dock-actions">
        <button type="button" class="o2o-btn o2o-btn-challenge" data-action="open-challenge-roller" title="Abrir lanzador táctico de Retos (Advance / Hold / Setback)">
          <i class="fas fa-dice-d6"></i> Lanzar Reto
        </button>
        ${game.user.isGM ? `
          <button type="button" class="o2o-btn o2o-btn-gm" data-action="open-gm-drawer" title="Abrir Cajón de Cartas del Director de Juego">
            <i class="fas fa-briefcase"></i> Cajón GM
          </button>
          <button type="button" class="o2o-btn" data-action="open-card-editor" title="Improvisar o crear nueva carta rápidamente">
            <i class="fas fa-plus"></i> Crear Carta
          </button>
        ` : ""}
        <button type="button" class="o2o-btn" data-action="toggle-image-mode" title="Alternar entre Tarjeta en Español (CSS) y Carta Recortada Original (PDF)">
          <i class="fas ${One2OneState.forceOriginalImageView ? "fa-language" : "fa-image"}"></i>
          ${One2OneState.forceOriginalImageView ? "Ver Español CSS" : "Ver Carta PDF"}
        </button>
        <button type="button" class="o2o-btn" data-action="toggle-dock-view" title="Alternar entre vista compacta y vista detallada de cartas">
          <i class="fas ${One2OneState.dockExpandedView ? "fa-compress-alt" : "fa-expand-alt"}"></i>
          ${One2OneState.dockExpandedView ? "Compactar" : "Detallar"}
        </button>
        <button type="button" class="o2o-btn" data-action="toggle-dock-minimize" title="Minimizar / Mostrar bandeja de cartas">
          <i class="fas ${One2OneState.dockMinimized ? "fa-chevron-up" : "fa-chevron-down"}"></i>
        </button>
      </div>
    </header>

    <div class="o2o-dock-body">
      <div class="o2o-dock-zone zone-edges">
        <div class="o2o-zone-title edges-title">
          <span><i class="fas fa-thumbs-up"></i> Ventajas (Edges) y Contactos Activos</span>
          <span>${edgesAndContacts.length}</span>
        </div>
        ${edgesAndContacts.length > 0
          ? `<div class="o2o-cards-row">${edgesAndContacts.map(c => renderCardHTML(c, "hand")).join("")}</div>`
          : `<div class="o2o-empty-table">Ninguna Ventaja ni Contacto en mesa. Consigue un <strong>Advance (6+)</strong> en un Reto para ganar una.</div>`
        }
      </div>

      <div class="o2o-dock-zone zone-problems">
        <div class="o2o-zone-title problems-title">
          <span><i class="fas fa-thumbs-down"></i> Problemas Activos (Problems)</span>
          <span>${problems.length}</span>
        </div>
        ${problems.length > 0
          ? `<div class="o2o-cards-row">${problems.map(c => renderCardHTML(c, "hand")).join("")}</div>`
          : `<div class="o2o-empty-table">Sin Problemas activos. El agente está limpio y sin heridas.</div>`
        }
      </div>
    </div>
  `;
}

/* ==========================================================================
   2. CAJÓN DEL DIRECTOR DE JUEGO (GM DRAWER MODAL)
   ========================================================================== */
function openGMDrawerModal() {
  if (!game.user.isGM) return;

  let modal = document.getElementById("one2one-gm-drawer-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "one2one-gm-drawer-modal";
    modal.className = "o2o-modal-backdrop";
    document.body.appendChild(modal);
    modal.addEventListener("click", (ev) => {
      if (ev.target === modal) modal.remove();
      else onContainerActionClick(ev);
    });
  }

  refreshGMDrawerModal();
}

function refreshGMDrawerModal() {
  const modal = document.getElementById("one2one-gm-drawer-modal");
  if (!modal) return;

  const stacks = getStacksSync();
  const activeStack = stacks[One2OneState.gmActiveTab] || stacks.deck;
  const allCards = activeStack ? Array.from(activeStack.cards.values()) : [];

  // Filtrado
  const filtered = allCards.filter(doc => {
    const c = getCardData(doc);
    if (One2OneState.gmFilterType !== "all" && c.cardType !== One2OneState.gmFilterType) return false;
    if (One2OneState.gmFilterCategory !== "all" && c.category !== One2OneState.gmFilterCategory) return false;
    if (One2OneState.gmSearchQuery.trim()) {
      const q = One2OneState.gmSearchQuery.toLowerCase();
      const hay = `${c.code} ${c.name} ${c.originalName} ${c.description} ${c.mechanicalEffect} ${c.investigativeAbilities} ${c.generalAbilities} ${c.sceneRef}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  // Ordenación automática (Alfabética por título en Español, Inglés o por Nº de Código oficial)
  const cleanSpanishTitle = (name) => String(name || "").replace(/^(PROBLEM|EDGE|CONTACT)\s+\d+\s*[—\-:]\s*/i, "").trim();
  filtered.sort((docA, docB) => {
    const a = getCardData(docA);
    const b = getCardData(docB);
    if (One2OneState.gmSortMode === "code_num") {
      // Orden natural: PROBLEM 1, PROBLEM 2... EDGE 1... CONTACT 1...
      const keyA = a.code || a.name;
      const keyB = b.code || b.name;
      return keyA.localeCompare(keyB, "es", { numeric: true, sensitivity: "base" });
    }
    if (One2OneState.gmSortMode === "alpha_en") {
      const enA = a.originalName || cleanSpanishTitle(a.name);
      const enB = b.originalName || cleanSpanishTitle(b.name);
      return enA.localeCompare(enB, "en", { numeric: true, sensitivity: "base" });
    }
    // Por defecto: "alpha_es" (Alfabético A-Z por nombre en español)
    const esA = cleanSpanishTitle(a.name);
    const esB = cleanSpanishTitle(b.name);
    return esA.localeCompare(esB, "es", { numeric: true, sensitivity: "base" });
  });

  const contextMode = One2OneState.gmActiveTab === "deck"
    ? "gm-deck"
    : (One2OneState.gmActiveTab === "hand" ? "hand" : "gm-pile");

  const deckCount = stacks.deck?.cards.size ?? 0;
  const handCount = stacks.hand?.cards.size ?? 0;
  const discardCount = stacks.discard?.cards.size ?? 0;
  const contCount = stacks.continuity?.cards.size ?? 0;

  modal.innerHTML = `
    <div class="o2o-modal-window" style="width: min(1220px, 96vw);">
      <div class="o2o-modal-header">
        <h3><i class="fas fa-briefcase" style="color:#f59e0b;"></i> Cajón del Director de Juego — GUMSHOE One-2-One (Never Say Dead)</h3>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button type="button" class="o2o-btn o2o-btn-gm" data-action="import-never-say-dead" title="Importar las 75 cartas oficiales de Never Say Dead (48 Problemas, 21 Ventajas y 6 Contactos) traducidas y con sus recortes originales">
            <i class="fas fa-file-import"></i> Importar 75 Cartas
          </button>
          <button type="button" class="o2o-btn" data-action="reset-all-to-deck" title="Devolver todas las cartas de la Mesa, Descartes y Continuidad a la Reserva del GM y reiniciar marcas">
            <i class="fas fa-rotate-left"></i> Reiniciar Todo a Reserva
          </button>
          <button type="button" class="o2o-btn o2o-btn-success" data-action="open-card-editor">
            <i class="fas fa-plus"></i> Crear Carta
          </button>
          <button type="button" class="o2o-btn" data-action="toggle-image-mode" title="Alternar entre Tarjeta en Español (CSS) y Carta Recortada Original (PDF)">
            <i class="fas ${One2OneState.forceOriginalImageView ? "fa-language" : "fa-image"}"></i>
            ${One2OneState.forceOriginalImageView ? "Modo: Carta PDF" : "Modo: Español CSS"}
          </button>
          <button type="button" class="o2o-btn o2o-btn-danger" data-action="end-operation-wizard" title="Evaluar Doom, mover Continuity y limpiar mesa al concluir el escenario">
            <i class="fas fa-flag-checkered"></i> Fin de Operación
          </button>
          <button type="button" class="o2o-btn" data-action="close-gm-drawer"><i class="fas fa-times"></i></button>
        </div>
      </div>

      <div class="o2o-modal-body">
        <div class="o2o-gm-toolbar">
          <div class="o2o-gm-tabs">
            <button type="button" class="o2o-tab-btn ${One2OneState.gmActiveTab === "deck" ? "active" : ""}" data-action="set-gm-tab" data-tab="deck">
              <i class="fas fa-layer-group"></i> Reserva del GM (${deckCount})
            </button>
            <button type="button" class="o2o-tab-btn ${One2OneState.gmActiveTab === "hand" ? "active" : ""}" data-action="set-gm-tab" data-tab="hand">
              <i class="fas fa-hand"></i> Mesa del Agente (${handCount})
            </button>
            <button type="button" class="o2o-tab-btn ${One2OneState.gmActiveTab === "discard" ? "active" : ""}" data-action="set-gm-tab" data-tab="discard">
              <i class="fas fa-recycle"></i> Descartes (${discardCount})
            </button>
            <button type="button" class="o2o-tab-btn ${One2OneState.gmActiveTab === "continuity" ? "active" : ""}" data-action="set-gm-tab" data-tab="continuity">
              <i class="fas fa-infinity"></i> Continuidad (${contCount})
            </button>
          </div>

          <div class="o2o-gm-filters">
            <select class="o2o-select" id="o2o-gm-filter-type">
              <option value="all" ${One2OneState.gmFilterType === "all" ? "selected" : ""}>Todos los Tipos (75)</option>
              <option value="problem" ${One2OneState.gmFilterType === "problem" ? "selected" : ""}>👎 Problemas (Problems)</option>
              <option value="edge" ${One2OneState.gmFilterType === "edge" ? "selected" : ""}>👍 Ventajas (Edges)</option>
              <option value="contact" ${One2OneState.gmFilterType === "contact" ? "selected" : ""}>📇 Contactos (Contacts)</option>
            </select>

            <select class="o2o-select" id="o2o-gm-filter-cat">
              <option value="all" ${One2OneState.gmFilterCategory === "all" ? "selected" : ""}>Todas las Categorías</option>
              <optgroup label="Ventajas (Edges)">
                <option value="luck" ${One2OneState.gmFilterCategory === "luck" ? "selected" : ""}>Luck (Suerte)</option>
                <option value="mastery" ${One2OneState.gmFilterCategory === "mastery" ? "selected" : ""}>Mastery (Maestría)</option>
                <option value="counter" ${One2OneState.gmFilterCategory === "counter" ? "selected" : ""}>Counter (Contramedida)</option>
              </optgroup>
              <optgroup label="Problemas (Problems)">
                <option value="injury" ${One2OneState.gmFilterCategory === "injury" ? "selected" : ""}>Injury (Herida)</option>
                <option value="heat" ${One2OneState.gmFilterCategory === "heat" ? "selected" : ""}>Heat (Presión / Alerta)</option>
                <option value="shadow" ${One2OneState.gmFilterCategory === "shadow" ? "selected" : ""}>Shadow (Sombra / Vampiros)</option>
                <option value="shock" ${One2OneState.gmFilterCategory === "shock" ? "selected" : ""}>Shock (Conmoción)</option>
                <option value="trouble" ${One2OneState.gmFilterCategory === "trouble" ? "selected" : ""}>Trouble (Complicación)</option>
              </optgroup>
              <optgroup label="Aliados">
                <option value="contact" ${One2OneState.gmFilterCategory === "contact" ? "selected" : ""}>Contact (Contacto)</option>
              </optgroup>
            </select>

            <select class="o2o-select" id="o2o-gm-sort" title="Criterio de ordenación de las cartas">
              <option value="alpha_es" ${One2OneState.gmSortMode === "alpha_es" ? "selected" : ""}>🔤 Orden: A–Z (Título Español)</option>
              <option value="code_num" ${One2OneState.gmSortMode === "code_num" ? "selected" : ""}>🔢 Orden: Nº Oficial (PROBLEM 1, 2...)</option>
              <option value="alpha_en" ${One2OneState.gmSortMode === "alpha_en" ? "selected" : ""}>🔤 Orden: A–Z (Título Inglés)</option>
            </select>

            <input type="text" class="o2o-input" id="o2o-gm-search" placeholder="Buscar ej. PROBLEM 12, EDGE 5, CONTACT 1, Sinclair..." value="${escapeHtml(One2OneState.gmSearchQuery)}" style="min-width:255px;" />
          </div>
        </div>

        ${filtered.length > 0
          ? `<div class="o2o-gm-grid">${filtered.map(doc => renderCardHTML(doc, contextMode)).join("")}</div>`
          : `<div class="o2o-empty-table" style="padding:40px;">
               No hay cartas en esta vista. Pulsa el botón naranja <strong>"Importar 75 Cartas: Never Say Dead"</strong> arriba a la derecha para cargar toda la aventura.
             </div>`
        }
      </div>
    </div>
  `;

  modal.querySelector("#o2o-gm-filter-type")?.addEventListener("change", (e) => {
    One2OneState.gmFilterType = e.target.value;
    refreshGMDrawerModal();
  });
  modal.querySelector("#o2o-gm-filter-cat")?.addEventListener("change", (e) => {
    One2OneState.gmFilterCategory = e.target.value;
    refreshGMDrawerModal();
  });
  modal.querySelector("#o2o-gm-sort")?.addEventListener("change", async (e) => {
    One2OneState.gmSortMode = e.target.value;
    await game.settings.set(MODULE_ID, "gmSortMode", One2OneState.gmSortMode);
    refreshGMDrawerModal();
  });
  modal.querySelector("#o2o-gm-search")?.addEventListener("input", (e) => {
    const pos = e.target.selectionStart;
    One2OneState.gmSearchQuery = e.target.value;
    refreshGMDrawerModal();
    const input = modal.querySelector("#o2o-gm-search");
    if (input) {
      input.focus();
      input.setSelectionRange(pos, pos);
    }
  });
}

/* ==========================================================================
   3. EDITOR Y CREADOR DE CARTAS (PARAMÉTRICO + IMAGEN COMPLETA + CONTACTOS)
   ========================================================================== */
function openCardEditorModal(existingCardDoc = null) {
  if (!game.user.isGM) return;

  const isEdit = Boolean(existingCardDoc);
  const c = isEdit ? getCardData(existingCardDoc) : {
    code: "",
    name: "",
    img: "icons/sundries/gaming/playing-cards-grey.webp",
    description: "",
    renderMode: "parametric",
    cardType: "problem",
    category: "injury",
    duration: "ongoing",
    modifier: 0,
    dicePenalty: 0,
    bonusDice: 0,
    investigativeAbilities: "",
    generalAbilities: "",
    mechanicalEffect: "",
    clearCondition: "",
    ticks: { enabled: false, current: 0, max: 3, penaltyPerTick: false },
    tags: { continuity: false, doom: false, seriousInjury: false, clue: false, vampire: false, blowback: false, counterTarget: "" },
    sceneRef: "Never Say Dead"
  };

  let modal = document.getElementById("one2one-card-editor-modal");
  if (modal) modal.remove();

  modal = document.createElement("div");
  modal.id = "one2one-card-editor-modal";
  modal.className = "o2o-modal-backdrop";
  document.body.appendChild(modal);

  modal.innerHTML = `
    <div class="o2o-modal-window" style="width: min(720px, 95vw);">
      <div class="o2o-modal-header">
        <h3><i class="fas ${isEdit ? "fa-pen-to-square" : "fa-circle-plus"}" style="color:#38bdf8;"></i> ${isEdit ? `Editar Carta: ${escapeHtml(c.name)}` : "Crear / Improvisar Carta One-2-One"}</h3>
        <button type="button" class="o2o-btn" id="o2o-editor-close"><i class="fas fa-times"></i></button>
      </div>

      <form id="o2o-card-editor-form" class="o2o-modal-body">
        <div class="o2o-form-grid">
          <div class="o2o-form-group">
            <label>Título de la Carta *</label>
            <input type="text" name="name" class="o2o-input" required placeholder="Ej. PROBLEM 1 — Apaleada (Beaten Up)" value="${escapeHtml(c.name)}" />
          </div>

          <div class="o2o-form-group">
            <label>Código (Ej. PROBLEM 1 / EDGE 5 / CONTACT 2)</label>
            <input type="text" name="code" class="o2o-input" placeholder="Ej. PROBLEM 1" value="${escapeHtml(c.code)}" />
          </div>

          <div class="o2o-form-group">
            <label>Modo Visual de Renderizado</label>
            <select name="renderMode" class="o2o-select">
              <option value="parametric" ${c.renderMode === "parametric" ? "selected" : ""}>🎨 Diseño CSS Paramétrico en Español</option>
              <option value="fullImage" ${c.renderMode === "fullImage" ? "selected" : ""}>🖼️ Carta Completa (Mostrar la imagen subida a tamaño completo)</option>
            </select>
          </div>

          <div class="o2o-form-group">
            <label>Imagen (Recorte PDF o Ilustración)</label>
            <div class="o2o-filepicker-row">
              <input type="text" name="img" id="o2o-editor-img-input" class="o2o-input" value="${escapeHtml(c.img)}" />
              <button type="button" class="o2o-btn" id="o2o-btn-filepicker" title="Subir o elegir imagen en Foundry"><i class="fas fa-folder-open"></i> Elegir</button>
            </div>
          </div>

          <div class="o2o-form-group">
            <label>Tipo de Carta</label>
            <select name="cardType" class="o2o-select">
              <option value="problem" ${c.cardType === "problem" ? "selected" : ""}>👎 Problema (Problem)</option>
              <option value="edge" ${c.cardType === "edge" ? "selected" : ""}>👍 Ventaja (Edge)</option>
              <option value="contact" ${c.cardType === "contact" ? "selected" : ""}>📇 Contacto (Contact)</option>
            </select>
          </div>

          <div class="o2o-form-group">
            <label>Categoría</label>
            <select name="category" class="o2o-select">
              <optgroup label="Problemas (Problems)">
                <option value="injury" ${c.category === "injury" ? "selected" : ""}>Injury (Herida)</option>
                <option value="heat" ${c.category === "heat" ? "selected" : ""}>Heat (Presión / Alerta)</option>
                <option value="shadow" ${c.category === "shadow" ? "selected" : ""}>Shadow (Sombra / Vampiros)</option>
                <option value="shock" ${c.category === "shock" ? "selected" : ""}>Shock (Conmoción)</option>
                <option value="trouble" ${c.category === "trouble" ? "selected" : ""}>Trouble (Complicación)</option>
                <option value="mythos" ${c.category === "mythos" ? "selected" : ""}>Mythos (Mitos)</option>
              </optgroup>
              <optgroup label="Ventajas (Edges)">
                <option value="luck" ${c.category === "luck" ? "selected" : ""}>Luck (Suerte)</option>
                <option value="mastery" ${c.category === "mastery" ? "selected" : ""}>Mastery (Maestría)</option>
                <option value="counter" ${c.category === "counter" ? "selected" : ""}>Counter (Contramedida)</option>
                <option value="generic" ${c.category === "generic" ? "selected" : ""}>Edge General</option>
              </optgroup>
              <optgroup label="Aliados">
                <option value="contact" ${c.category === "contact" ? "selected" : ""}>Contact (Contacto)</option>
              </optgroup>
            </select>
          </div>

          <div class="o2o-form-group">
            <label>Duración</label>
            <select name="duration" class="o2o-select">
              <option value="single" ${c.duration === "single" ? "selected" : ""}>Un solo uso (Descartable)</option>
              <option value="ongoing" ${c.duration === "ongoing" ? "selected" : ""}>Continua (Ongoing en mesa)</option>
            </select>
          </div>

          <div class="o2o-form-group" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:6px;">
            <div>
              <label>Mod. Tirada</label>
              <input type="number" name="modifier" class="o2o-input" value="${c.modifier}" title="Ej. -1 o -2 al resultado" />
            </div>
            <div>
              <label>Penal. Dados</label>
              <input type="number" name="dicePenalty" class="o2o-input" max="0" value="${c.dicePenalty}" title="Ej. -1 o -2 dados en Problemas" />
            </div>
            <div>
              <label>Dados Extra</label>
              <input type="number" name="bonusDice" class="o2o-input" min="0" value="${c.bonusDice}" title="Ej. +1 o +2 dados al gastar Ventaja" />
            </div>
          </div>

          <div class="o2o-form-group full-width">
            <label>Descripción Narrativa (Ficción)</label>
            <textarea name="description" class="o2o-textarea" rows="2">${escapeHtml(c.description)}</textarea>
          </div>

          <div class="o2o-form-group full-width">
            <label>Efecto Mecánico</label>
            <textarea name="mechanicalEffect" class="o2o-textarea" rows="2">${escapeHtml(c.mechanicalEffect)}</textarea>
          </div>

          <div class="o2o-form-group full-width">
            <label>Condición de Descarte / Resolución (Counter)</label>
            <textarea name="clearCondition" class="o2o-textarea" rows="2">${escapeHtml(c.clearCondition)}</textarea>
          </div>

          <div class="o2o-form-group">
            <label>Habilidades Investigación (Solo Contactos)</label>
            <input type="text" name="investigativeAbilities" class="o2o-input" placeholder="Ej. Química, Farmacia..." value="${escapeHtml(c.investigativeAbilities)}" />
          </div>

          <div class="o2o-form-group">
            <label>Habilidades Generales (Solo Contactos)</label>
            <input type="text" name="generalAbilities" class="o2o-input" placeholder="Ej. Conducir 1, Medicina 2..." value="${escapeHtml(c.generalAbilities)}" />
          </div>

          <div class="o2o-form-group full-width" style="background:rgba(0,0,0,0.28); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.07);">
            <label style="margin-bottom:6px;">Contadores / Marcas Interactivas (Ticks)</label>
            <div style="display:flex; flex-wrap:wrap; align-items:center; gap:14px;">
              <label style="display:flex; align-items:center; gap:6px; text-transform:none; cursor:pointer;">
                <input type="checkbox" name="ticksEnabled" ${c.ticks.enabled ? "checked" : ""} /> Activar casillas de marcas (Ticks)
              </label>
              <label style="display:flex; align-items:center; gap:6px; text-transform:none;">
                Iniciales: <input type="number" name="ticksCurrent" class="o2o-input" style="width:55px;" min="0" max="10" value="${c.ticks.current}" />
              </label>
              <label style="display:flex; align-items:center; gap:6px; text-transform:none;">
                Máximo: <input type="number" name="ticksMax" class="o2o-input" style="width:55px;" min="1" max="10" value="${c.ticks.max}" />
              </label>
              <label style="display:flex; align-items:center; gap:6px; text-transform:none; cursor:pointer;">
                <input type="checkbox" name="penaltyPerTick" ${c.ticks.penaltyPerTick ? "checked" : ""} /> Multiplicar penalizador por nº de marcas
              </label>
            </div>
          </div>

          <div class="o2o-form-group full-width" style="background:rgba(0,0,0,0.28); padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.07);">
            <label style="margin-bottom:6px;">Etiquetas Oficiales (NBA: Solo Ops)</label>
            <div style="display:flex; flex-wrap:wrap; align-items:center; gap:14px;">
              <label style="display:flex; align-items:center; gap:5px; text-transform:none; cursor:pointer; color:#fcd34d;">
                <input type="checkbox" name="tagContinuity" ${c.tags.continuity ? "checked" : ""} /> <strong>Continuity</strong>
              </label>
              <label style="display:flex; align-items:center; gap:5px; text-transform:none; cursor:pointer; color:#fca5a5;">
                <input type="checkbox" name="tagDoom" ${c.tags.doom ? "checked" : ""} /> <strong>DOOM / Fatal</strong>
              </label>
              <label style="display:flex; align-items:center; gap:5px; text-transform:none; cursor:pointer; color:#fca5a5;">
                <input type="checkbox" name="tagSeriousInjury" ${c.tags.seriousInjury ? "checked" : ""} /> <strong>Serious Injury</strong>
              </label>
              <label style="display:flex; align-items:center; gap:5px; text-transform:none; cursor:pointer; color:#7dd3fc;">
                <input type="checkbox" name="tagClue" ${c.tags.clue ? "checked" : ""} /> <strong>Clue (Pista)</strong>
              </label>
              <label style="display:flex; align-items:center; gap:5px; text-transform:none; cursor:pointer; color:#d8b4fe;">
                <input type="checkbox" name="tagVampire" ${c.tags.vampire ? "checked" : ""} /> <strong>Vampire</strong>
              </label>
              <label style="display:flex; align-items:center; gap:5px; text-transform:none; cursor:pointer; color:#fdba74;">
                <input type="checkbox" name="tagBlowback" ${c.tags.blowback ? "checked" : ""} /> <strong>Blowback</strong>
              </label>
            </div>
          </div>
        </div>
      </form>

      <div class="o2o-modal-footer">
        ${isEdit ? `
          <button type="button" class="o2o-btn o2o-btn-success" id="o2o-btn-save-edit">
            <i class="fas fa-floppy-disk"></i> Guardar Cambios
          </button>
        ` : `
          <button type="button" class="o2o-btn" id="o2o-btn-save-deck">
            <i class="fas fa-box-archive"></i> Guardar en Reserva del GM
          </button>
          <button type="button" class="o2o-btn o2o-btn-gm" id="o2o-btn-save-hand">
            <i class="fas fa-hand-holding-magic"></i> Crear y Entregar a la Mesa Ahora
          </button>
        `}
      </div>
    </div>
  `;

  modal.querySelector("#o2o-btn-filepicker")?.addEventListener("click", () => {
    const input = modal.querySelector("#o2o-editor-img-input");
    const FPClass = foundry?.applications?.apps?.FilePicker?.implementation || window.FilePicker;
    if (!FPClass) return;
    const fp = new FPClass({
      type: "image",
      current: input.value,
      callback: (path) => { input.value = path; }
    });
    fp.browse();
  });

  modal.querySelector("#o2o-editor-close")?.addEventListener("click", () => modal.remove());

  const extractPayload = () => {
    const form = modal.querySelector("#o2o-card-editor-form");
    const fd = new FormData(form);
    return {
      name: fd.get("name")?.toString().trim() || "Carta sin título",
      img: fd.get("img")?.toString().trim() || "icons/sundries/gaming/playing-cards-grey.webp",
      description: fd.get("description")?.toString().trim() || "",
      flags: {
        code: fd.get("code")?.toString().trim() || "",
        originalName: c.originalName || "",
        renderMode: fd.get("renderMode")?.toString() || "parametric",
        cardType: fd.get("cardType")?.toString() || "problem",
        category: fd.get("category")?.toString() || "injury",
        duration: fd.get("duration")?.toString() || "ongoing",
        modifier: Number(fd.get("modifier") ?? 0),
        dicePenalty: Number(fd.get("dicePenalty") ?? 0),
        bonusDice: Number(fd.get("bonusDice") ?? 0),
        investigativeAbilities: fd.get("investigativeAbilities")?.toString().trim() || "",
        generalAbilities: fd.get("generalAbilities")?.toString().trim() || "",
        mechanicalEffect: fd.get("mechanicalEffect")?.toString().trim() || "",
        clearCondition: fd.get("clearCondition")?.toString().trim() || "",
        ticks: {
          enabled: fd.get("ticksEnabled") === "on",
          current: Number(fd.get("ticksCurrent") ?? 0),
          max: Number(fd.get("ticksMax") ?? 3),
          penaltyPerTick: fd.get("penaltyPerTick") === "on"
        },
        tags: {
          continuity: fd.get("tagContinuity") === "on",
          doom: fd.get("tagDoom") === "on",
          seriousInjury: fd.get("tagSeriousInjury") === "on",
          clue: fd.get("tagClue") === "on",
          vampire: fd.get("tagVampire") === "on",
          blowback: fd.get("tagBlowback") === "on",
          counterTarget: c.tags?.counterTarget || ""
        },
        sceneRef: c.sceneRef || "Never Say Dead"
      }
    };
  };

  modal.querySelector("#o2o-btn-save-edit")?.addEventListener("click", async () => {
    const payload = extractPayload();
    await existingCardDoc.update({
      name: payload.name,
      description: payload.description,
      faces: [{ name: payload.name, img: payload.img, text: payload.description }],
      [`flags.${MODULE_ID}`]: payload.flags
    });
    ui.notifications.info(`Carta "${payload.name}" actualizada.`);
    modal.remove();
  });

  modal.querySelector("#o2o-btn-save-deck")?.addEventListener("click", async () => {
    const payload = extractPayload();
    const stacks = await ensureCardStacks();
    await createOne2OneCard(stacks.deck, payload);
    ui.notifications.info(`Carta "${payload.name}" guardada en la Reserva del GM.`);
    modal.remove();
  });

  modal.querySelector("#o2o-btn-save-hand")?.addEventListener("click", async () => {
    const payload = extractPayload();
    const stacks = await ensureCardStacks();
    const created = await createOne2OneCard(stacks.hand, payload);
    if (created) await notifyCardDealt(created);
    modal.remove();
  });
}

/* ==========================================================================
   4. INSPECTOR / ZOOM DE CARTA (MUESTRA IMAGEN ORIGINAL PDF + TRADUCCIÓN ES)
   ========================================================================== */
function openCardInspectorModal(cardDoc) {
  if (!cardDoc) return;
  const c = getCardData(cardDoc);

  let modal = document.getElementById("one2one-card-inspector-modal");
  if (modal) modal.remove();

  modal = document.createElement("div");
  modal.id = "one2one-card-inspector-modal";
  modal.className = "o2o-modal-backdrop";
  document.body.appendChild(modal);

  modal.innerHTML = `
    <div class="o2o-modal-window" style="width: min(540px, 92vw);">
      <div class="o2o-modal-header">
        <h3><i class="fas ${c.cardType === "edge" ? "fa-thumbs-up" : (c.cardType === "contact" ? "fa-address-card" : "fa-thumbs-down")}"></i> ${escapeHtml(c.name)}</h3>
        <button type="button" class="o2o-btn" id="o2o-inspector-close"><i class="fas fa-times"></i></button>
      </div>
      <div class="o2o-modal-body" style="display:flex; flex-direction:column; gap:12px;">
        <img src="${escapeHtml(c.img)}" alt="${escapeHtml(c.name)}" style="width:100%; max-height:360px; object-fit:contain; border-radius:8px; background:#f8fafc; padding:6px; border:1px solid rgba(255,255,255,0.2);" />
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="o2o-tag tag-duration" style="font-size:11px;">${escapeHtml(c.categoryLabel)} (${c.duration === "single" ? "Un solo uso" : "Continua"})</span>
          ${c.code ? `<span class="o2o-tag tag-scene" style="font-size:11px;">${escapeHtml(c.code)}</span>` : ""}
        </div>
        ${c.description ? `<p style="font-style:italic; color:#cbd5e1; margin:0; font-size:13px;">"${escapeHtml(c.description)}"</p>` : ""}
        ${c.cardType === "contact" ? `
          ${c.investigativeAbilities ? `<div class="o2o-card-effect" style="font-size:13px; border-left-color:#eab308;"><strong>Habilidades de Investigación:</strong> ${escapeHtml(c.investigativeAbilities)}</div>` : ""}
          ${c.generalAbilities ? `<div class="o2o-card-clear" style="font-size:12.5px;"><strong>Habilidades Generales:</strong> ${escapeHtml(c.generalAbilities)}</div>` : ""}
        ` : `
          ${c.mechanicalEffect ? `<div class="o2o-card-effect" style="font-size:13px;"><strong>Efecto Mecánico:</strong> ${escapeHtml(c.mechanicalEffect)}</div>` : ""}
          ${c.clearCondition ? `<div class="o2o-card-clear" style="font-size:12.5px;"><strong>Cómo descartarla / anularla:</strong> ${escapeHtml(c.clearCondition)}</div>` : ""}
        `}
      </div>
    </div>
  `;

  modal.addEventListener("click", (ev) => {
    if (ev.target === modal || ev.target.closest("#o2o-inspector-close")) modal.remove();
  });
}

/* ==========================================================================
   5. LANZADOR TÁCTICO DE RETOS (CHALLENGE ROLLER: ADVANCE / HOLD / SETBACK)
   ========================================================================== */
function openChallengeRollerModal() {
  const stacks = getStacksSync();
  const handCards = stacks.hand ? Array.from(stacks.hand.cards.values()).map(getCardData) : [];
  const activeProblems = handCards.filter(c => c.cardType === "problem");

  One2OneState.activeChallenge = {
    skillName: "Reto General",
    baseDice: 2,
    bonusDiceFromEdges: 0,
    extraProblemAccepted: false,
    spentEdgeNames: [],
    advanceThreshold: 6,
    holdThreshold: 4,
    selectedProblemIds: activeProblems.filter(p => p.effectiveModifier !== 0 || p.dicePenalty !== 0).map(p => p.id),
    customModifier: 0,
    rolledValues: []
  };

  let modal = document.getElementById("one2one-challenge-modal");
  if (modal) modal.remove();

  modal = document.createElement("div");
  modal.id = "one2one-challenge-modal";
  modal.className = "o2o-modal-backdrop";
  document.body.appendChild(modal);

  modal.addEventListener("click", (ev) => {
    if (ev.target === modal) modal.remove();
  });

  renderChallengeRollerContent();
}

function getChallengeTotals() {
  const st = One2OneState.activeChallenge;
  const stacks = getStacksSync();
  const handCards = stacks.hand ? Array.from(stacks.hand.cards.values()).map(getCardData) : [];

  let problemModifier = 0;
  let problemDicePenalty = 0;
  for (const pid of st.selectedProblemIds) {
    const p = handCards.find(c => c.id === pid);
    if (p) {
      problemModifier += p.effectiveModifier;
      problemDicePenalty += p.dicePenalty;
    }
  }

  const totalDicePool = Math.max(1, st.baseDice + st.bonusDiceFromEdges + problemDicePenalty + (st.extraProblemAccepted ? 1 : 0));
  const totalModifier = problemModifier + Number(st.customModifier || 0);
  const diceSum = st.rolledValues.reduce((a, b) => a + b, 0);
  const finalTotal = st.rolledValues.length > 0 ? (diceSum + totalModifier) : 0;
  const unrolledCount = Math.max(0, totalDicePool - st.rolledValues.length);

  let outcome = "pending";
  let outcomeLabel = "Pendiente de tirar";
  let earnedPush = false;

  if (st.rolledValues.length > 0) {
    if (finalTotal >= st.advanceThreshold) {
      outcome = "advance";
      earnedPush = unrolledCount > 0;
      outcomeLabel = earnedPush
        ? `ADVANCE (${finalTotal} ≥ ${st.advanceThreshold}) + ¡GANAS 1 PUSH! (${unrolledCount} dado/s sin tirar)`
        : `ADVANCE (${finalTotal} ≥ ${st.advanceThreshold}) — ¡Éxito rotundo! Otorga Ventaja (Edge) o recurso`;
    } else if (finalTotal >= st.holdThreshold) {
      outcome = "hold";
      outcomeLabel = `HOLD (${finalTotal}) — Éxito estándar sin premios ni penalizaciones graves`;
    } else {
      outcome = "setback";
      outcomeLabel = `SETBACK (${finalTotal} ≤ ${st.holdThreshold - 1}) — Revés: El GM entrega una carta de Problema`;
    }
  }

  return {
    totalDicePool,
    problemModifier,
    problemDicePenalty,
    totalModifier,
    diceSum,
    finalTotal,
    unrolledCount,
    outcome,
    outcomeLabel,
    earnedPush,
    handCards
  };
}

function renderChallengeRollerContent() {
  const modal = document.getElementById("one2one-challenge-modal");
  if (!modal || !One2OneState.activeChallenge) return;

  const st = One2OneState.activeChallenge;
  const calc = getChallengeTotals();
  const activeProblems = calc.handCards.filter(c => c.cardType === "problem");
  const usableEdges = calc.handCards.filter(c => ["edge", "contact"].includes(c.cardType));

  let diceSlotsHTML = "";
  for (let i = 0; i < calc.totalDicePool; i++) {
    const val = st.rolledValues[i];
    if (val !== undefined) {
      diceSlotsHTML += `<div class="o2o-die-slot rolled" title="Dado #${i + 1}">${val}</div>`;
    } else {
      diceSlotsHTML += `<div class="o2o-die-slot unrolled" title="Dado pendiente de tirar">d6</div>`;
    }
  }

  modal.innerHTML = `
    <div class="o2o-modal-window" style="width: min(670px, 95vw);">
      <div class="o2o-modal-header">
        <h3><i class="fas fa-dice-d6" style="color:#38bdf8;"></i> Lanzador Táctico de Retos (GUMSHOE One-2-One)</h3>
        <button type="button" class="o2o-btn" id="o2o-challenge-close"><i class="fas fa-times"></i></button>
      </div>

      <div class="o2o-modal-body o2o-challenge-box">
        <div class="o2o-form-grid">
          <div class="o2o-form-group">
            <label>Habilidad / Acción del Reto</label>
            <input type="text" id="o2o-ch-skill" class="o2o-input" value="${escapeHtml(st.skillName)}" placeholder="Ej. Frialdad (Cool) / Pelea (Fighting)" />
          </div>
          <div class="o2o-form-group" style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
            <div>
              <label>Dados Base (d6)</label>
              <input type="number" id="o2o-ch-basedice" class="o2o-input" min="1" max="10" value="${st.baseDice}" />
            </div>
            <div>
              <label>Mod. Manual</label>
              <input type="number" id="o2o-ch-custommod" class="o2o-input" value="${st.customModifier}" />
            </div>
          </div>
        </div>

        <div class="o2o-thresholds-bar">
          <div class="o2o-thresh-card advance">
            <div style="font-size:11px; font-weight:800; color:#34d399;">ADVANCE (Avance)</div>
            <div style="margin-top:4px;">
              Umbral: <input type="number" id="o2o-ch-adv" class="o2o-input" style="width:52px; text-align:center;" value="${st.advanceThreshold}" /> +
            </div>
          </div>
          <div class="o2o-thresh-card hold">
            <div style="font-size:11px; font-weight:800; color:#38bdf8;">HOLD (Mantener)</div>
            <div style="margin-top:4px;">
              Umbral: <input type="number" id="o2o-ch-hold" class="o2o-input" style="width:52px; text-align:center;" value="${st.holdThreshold}" /> a ${st.advanceThreshold - 1}
            </div>
          </div>
          <div class="o2o-thresh-card setback">
            <div style="font-size:11px; font-weight:800; color:#f87171;">SETBACK (Revés)</div>
            <div style="margin-top:6px; font-size:13px; font-weight:700;">
              ${st.holdThreshold - 1} o menos
            </div>
          </div>
        </div>

        <div style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.3); border-radius:8px; padding:8px 12px;">
          <div style="font-size:11px; font-weight:700; text-transform:uppercase; color:#fca5a5; margin-bottom:6px;">
            <i class="fas fa-thumbs-down"></i> Problemas en Mesa que afectan a este Reto:
          </div>
          ${activeProblems.length > 0 ? activeProblems.map(p => `
            <label style="display:flex; align-items:center; justify-content:space-between; font-size:12px; padding:3px 0; cursor:pointer;">
              <span>
                <input type="checkbox" class="o2o-ch-prob-check" data-prob-id="${p.id}" ${st.selectedProblemIds.includes(p.id) ? "checked" : ""} />
                <strong>${escapeHtml(p.name)}</strong> <span style="color:#94a3b8;">(${escapeHtml(p.mechanicalEffect)})</span>
              </span>
              <span class="o2o-mod-badge" style="color:#fca5a5;">
                ${p.effectiveModifier !== 0 ? p.effectiveModifier : ""} ${p.dicePenalty !== 0 ? `${p.dicePenalty}d6` : ""}
              </span>
            </label>
          `).join("") : `<div style="font-size:12px; color:#64748b; font-style:italic;">No hay Problemas activos en la mesa.</div>`}
        </div>

        <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); border-radius:8px; padding:8px 12px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
            <span style="font-size:11px; font-weight:700; text-transform:uppercase; color:#6ee7b7;">
              <i class="fas fa-thumbs-up"></i> Ventajas / Contactos en Mesa y Dados Extra:
            </span>
            <label style="font-size:11.5px; cursor:pointer; color:#fdba74; font-weight:700;">
              <input type="checkbox" id="o2o-ch-extraprob" ${st.extraProblemAccepted ? "checked" : ""} />
              Aceptar Problema Extra (+1d6)
            </label>
          </div>
          ${usableEdges.length > 0 ? `<div style="display:flex; flex-direction:column; gap:5px;">
            ${usableEdges.map(e => `
              <div style="display:flex; align-items:center; justify-content:space-between; font-size:12px; background:rgba(0,0,0,0.25); padding:4px 8px; border-radius:5px;">
                <span><strong>${escapeHtml(e.name)}</strong>: <span style="color:#94a3b8;">${escapeHtml(e.mechanicalEffect)}</span></span>
                <button type="button" class="o2o-btn o2o-btn-success o2o-ch-spend-edge" data-edge-id="${e.id}" style="padding:2px 8px; font-size:11px;">
                  <i class="fas fa-bolt"></i> ${e.duration === "single" ? "Gastar" : "Aplicar"} (+${Math.max(1, e.bonusDice)}d6)
                </button>
              </div>
            `).join("")}
          </div>` : `<div style="font-size:12px; color:#64748b; font-style:italic;">No quedan Ventajas en la mesa.</div>`}
          ${st.spentEdgeNames.length > 0 ? `<div style="margin-top:6px; font-size:11.5px; color:#34d399;">✔ Aplicadas en este Reto: <strong>${escapeHtml(st.spentEdgeNames.join(", "))}</strong> (+${st.bonusDiceFromEdges}d6)</div>` : ""}
        </div>

        <div class="o2o-dice-tray">
          <div style="font-size:12px; color:#94a3b8;">
            Reserva Total: <strong>${calc.totalDicePool}d6</strong> |
            Modificador Numérico: <strong style="color:${calc.totalModifier < 0 ? "#f87171" : "#34d399"};">${calc.totalModifier >= 0 ? `+${calc.totalModifier}` : calc.totalModifier}</strong>
          </div>
          <div class="o2o-dice-list">${diceSlotsHTML}</div>
          <div style="font-size:14px; font-weight:700; margin-bottom:10px;">
            Suma Dados (${calc.diceSum}) ${calc.totalModifier >= 0 ? `+ ${calc.totalModifier}` : `- ${Math.abs(calc.totalModifier)}`} =
            <span style="font-size:18px; color:#38bdf8;">${st.rolledValues.length > 0 ? calc.finalTotal : "—"}</span>
          </div>

          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
            ${calc.unrolledCount > 0 ? `
              <button type="button" class="o2o-btn o2o-btn-challenge" id="o2o-ch-roll-one">
                <i class="fas fa-dice-one"></i> Tirar Siguiente Dado (1d6)
              </button>
              <button type="button" class="o2o-btn o2o-btn-success" id="o2o-ch-roll-all">
                <i class="fas fa-dice"></i> Tirar Todos los Restantes (${calc.unrolledCount}d6)
              </button>
            ` : ""}
            ${st.rolledValues.length > 0 ? `
              <button type="button" class="o2o-btn" id="o2o-ch-reset">
                <i class="fas fa-rotate-left"></i> Reiniciar Dados
              </button>
            ` : ""}
          </div>
        </div>

        ${st.rolledValues.length > 0 ? `
          <div class="o2o-outcome-banner ${calc.outcome}">
            ${escapeHtml(calc.outcomeLabel)}
          </div>
        ` : ""}
      </div>

      <div class="o2o-modal-footer">
        <button type="button" class="o2o-btn o2o-btn-challenge" id="o2o-ch-publish-chat" ${st.rolledValues.length === 0 ? "disabled style='opacity:0.5;'" : ""}>
          <i class="fas fa-paper-plane"></i> Publicar Resultado del Reto en el Chat
        </button>
      </div>
    </div>
  `;

  modal.querySelector("#o2o-challenge-close")?.addEventListener("click", () => modal.remove());
  modal.querySelector("#o2o-ch-skill")?.addEventListener("input", (e) => { st.skillName = e.target.value; });
  modal.querySelector("#o2o-ch-basedice")?.addEventListener("change", (e) => {
    st.baseDice = Math.max(1, Number(e.target.value || 1));
    renderChallengeRollerContent();
  });
  modal.querySelector("#o2o-ch-custommod")?.addEventListener("change", (e) => {
    st.customModifier = Number(e.target.value || 0);
    renderChallengeRollerContent();
  });
  modal.querySelector("#o2o-ch-adv")?.addEventListener("change", (e) => {
    st.advanceThreshold = Number(e.target.value || 6);
    renderChallengeRollerContent();
  });
  modal.querySelector("#o2o-ch-hold")?.addEventListener("change", (e) => {
    st.holdThreshold = Number(e.target.value || 4);
    renderChallengeRollerContent();
  });
  modal.querySelector("#o2o-ch-extraprob")?.addEventListener("change", (e) => {
    st.extraProblemAccepted = e.target.checked;
    renderChallengeRollerContent();
  });

  modal.querySelectorAll(".o2o-ch-prob-check").forEach(chk => {
    chk.addEventListener("change", (e) => {
      const pid = e.currentTarget.dataset.probId;
      if (e.currentTarget.checked) {
        if (!st.selectedProblemIds.includes(pid)) st.selectedProblemIds.push(pid);
      } else {
        st.selectedProblemIds = st.selectedProblemIds.filter(id => id !== pid);
      }
      renderChallengeRollerContent();
    });
  });

  modal.querySelectorAll(".o2o-ch-spend-edge").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const edgeId = e.currentTarget.dataset.edgeId;
      const stacks = getStacksSync();
      const cardDoc = stacks.hand?.cards.get(edgeId);
      if (!cardDoc) return;
      const c = getCardData(cardDoc);
      const addedDice = Math.max(1, c.bonusDice || 1);

      st.bonusDiceFromEdges += addedDice;
      st.spentEdgeNames.push(c.name);

      if (c.duration === "single" && stacks.discard) {
        await transferCardBetweenStacks(cardDoc, stacks.discard);
      }
      ui.notifications.info(`"${c.name}" aplicada: +${addedDice}d6 a la reserva del Reto.`);
      renderChallengeRollerContent();
    });
  });

  modal.querySelector("#o2o-ch-roll-one")?.addEventListener("click", async () => {
    const roll = await (new Roll("1d6")).evaluate();
    if (game.dice3d) await game.dice3d.showForRoll(roll, game.user, true);
    st.rolledValues.push(roll.total);
    renderChallengeRollerContent();
  });

  modal.querySelector("#o2o-ch-roll-all")?.addEventListener("click", async () => {
    const currentCalc = getChallengeTotals();
    if (currentCalc.unrolledCount <= 0) return;
    const roll = await (new Roll(`${currentCalc.unrolledCount}d6`)).evaluate();
    if (game.dice3d) await game.dice3d.showForRoll(roll, game.user, true);
    const terms = roll.dice?.[0]?.results?.map(r => r.result) || [roll.total];
    st.rolledValues.push(...terms);
    renderChallengeRollerContent();
  });

  modal.querySelector("#o2o-ch-reset")?.addEventListener("click", () => {
    st.rolledValues = [];
    renderChallengeRollerContent();
  });

  modal.querySelector("#o2o-ch-publish-chat")?.addEventListener("click", async () => {
    const finalCalc = getChallengeTotals();
    const badgeColor = finalCalc.outcome === "advance"
      ? "#10b981"
      : (finalCalc.outcome === "hold" ? "#0ea5e9" : "#ef4444");

    const html = `
      <div class="o2o-chat-card challenge" style="border-color:${badgeColor};">
        <div class="o2o-chat-header" style="color:${badgeColor};">
          <span><i class="fas fa-dice-d6"></i> Reto: ${escapeHtml(st.skillName)}</span>
          <span>${finalCalc.outcome.toUpperCase()}</span>
        </div>
        <div style="font-size:12.5px; line-height:1.45;">
          <div><strong>Dados Tirados (${st.rolledValues.length}/${finalCalc.totalDicePool}d6):</strong> [${st.rolledValues.join(", ")}] = ${finalCalc.diceSum}</div>
          <div><strong>Modificadores:</strong> ${finalCalc.totalModifier >= 0 ? `+${finalCalc.totalModifier}` : finalCalc.totalModifier}</div>
          <div style="font-size:15px; font-weight:800; margin:6px 0; color:#fff;">
            Resultado Final: ${finalCalc.finalTotal}
          </div>
          <div style="padding:6px 8px; border-radius:6px; background:rgba(0,0,0,0.35); border-left:3px solid ${badgeColor};">
            ${escapeHtml(finalCalc.outcomeLabel)}
          </div>
          ${st.spentEdgeNames.length > 0 ? `<div style="margin-top:5px; color:#6ee7b7;"><i class="fas fa-bolt"></i> <strong>Ventajas / Contactos Aplicados:</strong> ${escapeHtml(st.spentEdgeNames.join(", "))}</div>` : ""}
          ${st.extraProblemAccepted ? `<div style="margin-top:5px; color:#fdba74;"><i class="fas fa-triangle-exclamation"></i> <strong>Problema Extra Aceptado:</strong> El GM debe entregar 1 carta de Problema adicional al cierre de la escena.</div>` : ""}
        </div>
      </div>
    `;

    await ChatMessage.create({
      user: game.user.id,
      speaker: ChatMessage.getSpeaker(),
      content: html
    });
    modal.remove();
  });
}

/* ==========================================================================
   6. ACCIONES INTERACTIVAS Y NOTIFICACIONES EN CHAT / SOCKET
   ========================================================================== */
async function notifyCardDealt(cardDoc) {
  const c = getCardData(cardDoc);
  const isEdge = c.cardType === "edge";
  const isContact = c.cardType === "contact";
  const color = isEdge ? "#10b981" : (isContact ? "#eab308" : "#ef4444");
  const titleLabel = isEdge ? "Nueva Ventaja en Mesa" : (isContact ? "Nuevo Contacto en Mesa" : "Nuevo Problema en Mesa");

  const chatHTML = `
    <div class="o2o-chat-card ${c.cardType}" style="border-color:${color};">
      <div class="o2o-chat-header" style="color:${color};">
        <span><i class="fas ${isEdge ? "fa-thumbs-up" : (isContact ? "fa-address-card" : "fa-thumbs-down")}"></i> ${titleLabel}</span>
        <span>${escapeHtml(c.code || c.categoryLabel)}</span>
      </div>
      <div style="display:flex; gap:10px; align-items:flex-start;">
        <img src="${escapeHtml(c.img)}" style="width:60px; height:60px; object-fit:contain; background:#f8fafc; border-radius:6px; border:1px solid rgba(255,255,255,0.2);" />
        <div style="font-size:12px; flex:1;">
          <div style="font-size:14px; font-weight:700; color:#fff;">${escapeHtml(c.name)}</div>
          ${c.description ? `<div style="font-style:italic; color:#94a3b8; margin:2px 0;">${escapeHtml(c.description)}</div>` : ""}
          ${c.mechanicalEffect ? `<div style="margin-top:4px;"><strong>Efecto:</strong> ${escapeHtml(c.mechanicalEffect)}</div>` : ""}
        </div>
      </div>
    </div>
  `;

  await ChatMessage.create({
    user: game.user.id,
    speaker: ChatMessage.getSpeaker(),
    content: chatHTML
  });

  const toastPayload = {
    action: "cardDealtToast",
    name: c.name,
    cardType: c.cardType,
    categoryLabel: c.code || c.categoryLabel,
    img: c.img
  };
  game.socket.emit(SOCKET_NAME, toastPayload);
  showCardToast(toastPayload);
}

function showCardToast(data) {
  const existing = document.querySelector(".o2o-toast-banner");
  if (existing) existing.remove();

  const isEdge = data.cardType === "edge";
  const isContact = data.cardType === "contact";
  const borderCol = isEdge ? "#10b981" : (isContact ? "#eab308" : "#ef4444");
  const toast = document.createElement("div");
  toast.className = "o2o-toast-banner";
  toast.style.borderColor = borderCol;
  toast.innerHTML = `
    <img src="${escapeHtml(data.img)}" style="width:52px; height:52px; object-fit:contain; background:#f8fafc; border-radius:6px; border:1px solid ${borderCol};" />
    <div>
      <div style="font-size:11px; font-weight:800; text-transform:uppercase; color:${borderCol};">
        <i class="fas ${isEdge ? "fa-thumbs-up" : (isContact ? "fa-address-card" : "fa-thumbs-down")}"></i> ${isEdge ? "Ventaja Recibida" : (isContact ? "Contacto Recibido" : "Problema Recibido")} (${escapeHtml(data.categoryLabel)})
      </div>
      <div style="font-size:16px; font-weight:700; color:#fff;">${escapeHtml(data.name)}</div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4200);
}

/** Reinicia toda la partida: devuelve todas las cartas de Mesa, Descartes y Continuidad a la Reserva del GM y pone sus marcas a 0 */
async function resetAllCardsToDeck() {
  if (!game.user.isGM) return;
  const stacks = await ensureCardStacks();
  if (!stacks.deck) return;

  let movedCount = 0;
  for (const sourceStack of [stacks.hand, stacks.discard, stacks.continuity]) {
    if (!sourceStack || sourceStack.cards.size === 0) continue;
    const docs = Array.from(sourceStack.cards.values());
    const toCreate = docs.map(d => {
      const obj = d.toObject();
      delete obj._id;
      obj.drawn = false;
      if (obj.flags?.[MODULE_ID]?.ticks) {
        obj.flags[MODULE_ID].ticks.current = 0;
      }
      return obj;
    });
    const idsToDelete = docs.map(d => d.id);
    await stacks.deck.createEmbeddedDocuments("Card", toCreate);
    await sourceStack.deleteEmbeddedDocuments("Card", idsToDelete);
    movedCount += docs.length;
  }

  // Asegurar también que no falte ninguna de las 75 cartas oficiales
  await importNeverSayDeadPack();
  One2OneState.gmActiveTab = "deck";
  ui.notifications.info(`Reinicio completado: ${movedCount} cartas devueltas a la Reserva del GM y marcas reiniciadas.`);
}

async function runEndOfOperationWizard() {
  if (!game.user.isGM) return;
  const stacks = await ensureCardStacks();
  const handCards = Array.from(stacks.hand.cards.values());

  if (handCards.length === 0) {
    ui.notifications.info("La mesa del agente ya está vacía.");
    return;
  }

  const doomCards = [];
  const continuityCards = [];
  const clearedCards = [];

  for (const doc of handCards) {
    const c = getCardData(doc);
    if (c.tags.doom) doomCards.push(c.name);
    if (c.tags.continuity) {
      continuityCards.push(c.name);
      await transferCardBetweenStacks(doc, stacks.continuity);
    } else {
      clearedCards.push(c.name);
      await transferCardBetweenStacks(doc, stacks.discard);
    }
  }

  const reportHTML = `
    <div class="o2o-chat-card challenge">
      <div class="o2o-chat-header" style="color:#f59e0b;">
        <span><i class="fas fa-flag-checkered"></i> Cierre de Operación (GUMSHOE One-2-One)</span>
      </div>
      <div style="font-size:12.5px; line-height:1.5;">
        ${doomCards.length > 0
          ? `<div style="background:rgba(220,38,38,0.3); border:1px solid #ef4444; padding:6px 8px; border-radius:6px; color:#fecaca; margin-bottom:6px;">
               <strong><i class="fas fa-skull"></i> ¡ALERTA DOOM / DESENLACE FATAL!</strong><br/>
               El agente concluyó la operación con: <strong>${escapeHtml(doomCards.join(", "))}</strong>.
             </div>`
          : `<div style="color:#34d399; margin-bottom:4px;"><i class="fas fa-shield-check"></i> Sin cartas DOOM activas al cierre.</div>`
        }
        <div><strong>Archivadas en Continuidad (${continuityCards.length}):</strong> ${continuityCards.length ? escapeHtml(continuityCards.join(", ")) : "Ninguna"}</div>
        <div><strong>Movidas a Descartes (${clearedCards.length}):</strong> ${clearedCards.length ? escapeHtml(clearedCards.join(", ")) : "Ninguna"}</div>
      </div>
    </div>
  `;

  await ChatMessage.create({
    user: game.user.id,
    speaker: ChatMessage.getSpeaker(),
    content: reportHTML
  });
}

async function onContainerActionClick(ev) {
  const btn = ev.target.closest("[data-action]");
  if (!btn) return;

  const action = btn.dataset.action;
  const cardId = btn.dataset.cardId;
  const stackId = btn.dataset.stackId;
  const stacks = getStacksSync();

  const findCard = () => {
    if (!cardId) return null;
    const st = stackId ? game.cards.get(stackId) : stacks.hand;
    return st?.cards.get(cardId) || null;
  };

  switch (action) {
    case "toggle-dock-minimize": {
      One2OneState.dockMinimized = !One2OneState.dockMinimized;
      await game.settings.set(MODULE_ID, "dockMinimized", One2OneState.dockMinimized);
      renderTabletopDock();
      break;
    }
    case "toggle-dock-view": {
      One2OneState.dockExpandedView = !One2OneState.dockExpandedView;
      await game.settings.set(MODULE_ID, "dockExpandedView", One2OneState.dockExpandedView);
      renderTabletopDock();
      break;
    }
    case "toggle-image-mode": {
      One2OneState.forceOriginalImageView = !One2OneState.forceOriginalImageView;
      await game.settings.set(MODULE_ID, "forceOriginalImageView", One2OneState.forceOriginalImageView);
      renderTabletopDock();
      refreshGMDrawerModal();
      break;
    }
    case "open-gm-drawer": {
      openGMDrawerModal();
      break;
    }
    case "close-gm-drawer": {
      document.getElementById("one2one-gm-drawer-modal")?.remove();
      break;
    }
    case "set-gm-tab": {
      One2OneState.gmActiveTab = btn.dataset.tab || "deck";
      refreshGMDrawerModal();
      break;
    }
    case "open-card-editor": {
      openCardEditorModal(null);
      break;
    }
    case "open-challenge-roller": {
      openChallengeRollerModal();
      break;
    }
    case "inspect-card": {
      const doc = findCard();
      if (doc) openCardInspectorModal(doc);
      break;
    }
    case "edit-card": {
      const doc = findCard();
      if (doc) openCardEditorModal(doc);
      break;
    }
    case "share-chat": {
      const doc = findCard();
      if (!doc) return;
      const c = getCardData(doc);
      const isEdge = c.cardType === "edge";
      await ChatMessage.create({
        user: game.user.id,
        speaker: ChatMessage.getSpeaker(),
        content: `
          <div class="o2o-chat-card ${c.cardType}">
            <div class="o2o-chat-header">
              <span><i class="fas ${isEdge ? "fa-thumbs-up" : "fa-thumbs-down"}"></i> ${escapeHtml(c.name)}</span>
              <span>${escapeHtml(c.code || c.categoryLabel)}</span>
            </div>
            <img src="${escapeHtml(c.img)}" style="width:100%; max-height:220px; object-fit:contain; background:#f8fafc; border-radius:6px; margin-bottom:6px;" />
            <div style="font-size:12px;">
              ${c.description ? `<p style="font-style:italic; margin:0 0 5px;">${escapeHtml(c.description)}</p>` : ""}
              ${c.mechanicalEffect ? `<div><strong>Efecto:</strong> ${escapeHtml(c.mechanicalEffect)}</div>` : ""}
              ${c.clearCondition ? `<div style="margin-top:4px;"><strong>Descarte:</strong> ${escapeHtml(c.clearCondition)}</div>` : ""}
            </div>
          </div>
        `
      });
      break;
    }
    case "delta-tick":
    case "set-tick": {
      const doc = findCard();
      if (!doc) return;
      const c = getCardData(doc);
      let nextVal = c.ticks.current;
      if (action === "delta-tick") {
        nextVal = Math.clamp(c.ticks.current + Number(btn.dataset.delta || 0), 0, c.ticks.max);
      } else {
        const clicked = Number(btn.dataset.tick || 1);
        nextVal = c.ticks.current === clicked ? clicked - 1 : clicked;
      }

      await doc.update({ [`flags.${MODULE_ID}.ticks.current`]: nextVal });

      if (nextVal >= c.ticks.max) {
        await ChatMessage.create({
          user: game.user.id,
          speaker: ChatMessage.getSpeaker(),
          content: `<div class="o2o-chat-card problem"><div class="o2o-chat-header" style="color:#f97316;"><i class="fas fa-bell"></i> ¡Límite de Marcas Alcanzado!</div><div style="font-size:12.5px;">La carta <strong>${escapeHtml(c.name)}</strong> ha llegado a <strong>${nextVal}/${c.ticks.max} marcas</strong>.<br/>${escapeHtml(c.mechanicalEffect)}</div></div>`
        });
      }
      break;
    }
    case "spend-resolve": {
      const doc = findCard();
      if (!doc || !stacks.discard) return;
      const c = getCardData(doc);
      await transferCardBetweenStacks(doc, stacks.discard);

      const isEdge = c.cardType === "edge";
      await ChatMessage.create({
        user: game.user.id,
        speaker: ChatMessage.getSpeaker(),
        content: `
          <div class="o2o-chat-card ${c.cardType}">
            <div class="o2o-chat-header">
              <span><i class="fas ${isEdge ? "fa-bolt" : "fa-check-circle"}"></i> ${isEdge ? "Ventaja Gastada" : (c.cardType === "contact" ? "Contacto Retirado" : "Problema Resuelto")}</span>
            </div>
            <div style="font-size:12.5px;">
              <strong>${escapeHtml(c.name)}</strong> pasa a la pila de descartes.<br/>
              ${c.mechanicalEffect ? `<span style="color:#94a3b8;">${escapeHtml(c.mechanicalEffect)}</span>` : ""}
            </div>
          </div>
        `
      });
      break;
    }
    case "apply-counter": {
      const doc = findCard();
      if (!doc || !stacks.hand || !stacks.discard) return;
      const c = getCardData(doc);
      const targetName = (c.tags.counterTarget || "").toLowerCase();
      const targetProb = Array.from(stacks.hand.cards.values()).find(p => p.name.toLowerCase().includes(targetName) && p.id !== doc.id);

      if (targetProb) {
        await transferCardBetweenStacks(targetProb, stacks.discard);
        if (c.duration === "single") {
          await transferCardBetweenStacks(doc, stacks.discard);
        }
        await ChatMessage.create({
          user: game.user.id,
          speaker: ChatMessage.getSpeaker(),
          content: `<div class="o2o-chat-card edge"><div class="o2o-chat-header" style="color:#f59e0b;"><i class="fas fa-shield-halved"></i> ¡Contramedida Activada!</div><div style="font-size:12.5px;"><strong>${escapeHtml(c.name)}</strong> ha neutralizado y descartado el Problema <strong>${escapeHtml(targetProb.name)}</strong>.</div></div>`
        });
      } else {
        ui.notifications.warn(`No se encontró ningún Problema activo en mesa que coincida con "${c.tags.counterTarget}".`);
      }
      break;
    }
    case "deal-to-hand": {
      const doc = findCard();
      if (!doc || !stacks.hand) return;
      const moved = await transferCardBetweenStacks(doc, stacks.hand);
      if (moved) await notifyCardDealt(moved);
      break;
    }
    case "return-to-deck": {
      const doc = findCard();
      if (!doc || !stacks.deck) return;
      await transferCardBetweenStacks(doc, stacks.deck);
      ui.notifications.info(`Carta devuelta a la Reserva del GM.`);
      break;
    }
    case "duplicate-card": {
      const doc = findCard();
      if (!doc || !doc.parent) return;
      const raw = doc.toObject();
      delete raw._id;
      raw.name = `${raw.name} (Copia)`;
      await doc.parent.createEmbeddedDocuments("Card", [raw]);
      ui.notifications.info(`Carta duplicada.`);
      break;
    }
    case "delete-card": {
      const doc = findCard();
      if (!doc || !doc.parent) return;
      await doc.parent.deleteEmbeddedDocuments("Card", [doc.id]);
      ui.notifications.info(`Carta eliminada.`);
      break;
    }
    case "import-never-say-dead": {
      await importNeverSayDeadPack();
      refreshGMDrawerModal();
      break;
    }
    case "reset-all-to-deck": {
      await resetAllCardsToDeck();
      refreshGMDrawerModal();
      break;
    }
    case "end-operation-wizard": {
      await runEndOfOperationWizard();
      break;
    }
  }
}

/* ==========================================================================
   HOOKS DE FOUNDRY VTT (v12 - v14)
   ========================================================================== */
Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Inicializando Sistema Táctico de Cartas GUMSHOE One-2-One`);

  // Ajustes persistentes por usuario (se guardan aunque recargues o cierres Foundry)
  game.settings.register(MODULE_ID, "forceOriginalImageView", {
    name: "Modo Visual: Ver Carta Original PDF",
    hint: "Si está activo, muestra el recorte original de la carta del PDF en lugar del diseño CSS en español.",
    scope: "client",
    config: true,
    type: Boolean,
    default: false,
    onChange: (val) => {
      One2OneState.forceOriginalImageView = Boolean(val);
      renderTabletopDock();
      refreshGMDrawerModal();
    }
  });

  game.settings.register(MODULE_ID, "dockExpandedView", {
    name: "Bandeja de Mesa: Vista Detallada",
    hint: "Muestra la descripción narrativa y condición de descarte directamente en la bandeja inferior.",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: (val) => {
      One2OneState.dockExpandedView = Boolean(val);
      renderTabletopDock();
    }
  });

  game.settings.register(MODULE_ID, "dockMinimized", {
    name: "Bandeja de Mesa Minimizada",
    scope: "client",
    config: false,
    type: Boolean,
    default: false
  });

  game.settings.register(MODULE_ID, "gmSortMode", {
    name: "Cajón GM: Orden de las Cartas",
    scope: "client",
    config: false,
    type: String,
    default: "alpha_es"
  });

  window.GumshoeOne2One = {
    toggleDock: async () => {
      One2OneState.dockMinimized = !One2OneState.dockMinimized;
      await game.settings.set(MODULE_ID, "dockMinimized", One2OneState.dockMinimized);
      renderTabletopDock();
    },
    openGMDrawer: () => openGMDrawerModal(),
    openCardEditor: () => openCardEditorModal(null),
    openChallengeRoller: () => openChallengeRollerModal(),
    importNeverSayDead: () => importNeverSayDeadPack()
  };
});

Hooks.once("ready", async () => {
  // Cargar preferencias visuales guardadas del usuario
  One2OneState.forceOriginalImageView = Boolean(game.settings.get(MODULE_ID, "forceOriginalImageView"));
  One2OneState.dockExpandedView = Boolean(game.settings.get(MODULE_ID, "dockExpandedView"));
  One2OneState.dockMinimized = Boolean(game.settings.get(MODULE_ID, "dockMinimized"));
  One2OneState.gmSortMode = game.settings.get(MODULE_ID, "gmSortMode") || "alpha_es";

  const stacks = await ensureCardStacks();
  // Si el mazo del GM está vacío al iniciar por primera vez, importamos automáticamente las 75 cartas de Never Say Dead
  if (game.user.isGM && stacks.deck && stacks.deck.cards.size === 0) {
    await importNeverSayDeadPack();
  }
  renderTabletopDock();

  game.socket.on(SOCKET_NAME, (data) => {
    if (data?.action === "cardDealtToast") {
      showCardToast(data);
    }
  });
});

for (const hookName of ["createCard", "updateCard", "deleteCard", "createCards", "updateCards", "deleteCards"]) {
  Hooks.on(hookName, () => {
    renderTabletopDock();
    refreshGMDrawerModal();
    if (document.getElementById("one2one-challenge-modal")) {
      renderChallengeRollerContent();
    }
  });
}

Hooks.on("getSceneControlButtons", (controls) => {
  const tokenTool = {
    name: "gumshoe-one2one-dock",
    title: "GUMSHOE One-2-One: Bandeja de Cartas / Cajón GM",
    icon: "fas fa-layer-group",
    button: true,
    onClick: () => {
      if (game.user.isGM && !One2OneState.dockMinimized) {
        openGMDrawerModal();
      } else {
        One2OneState.dockMinimized = false;
        renderTabletopDock();
      }
    }
  };

  if (Array.isArray(controls)) {
    const tokenControl = controls.find(c => c.name === "token");
    if (tokenControl && Array.isArray(tokenControl.tools)) {
      tokenControl.tools.push(tokenTool);
    }
  } else if (controls && typeof controls === "object") {
    const tokenControl = controls.tokens || controls.token;
    if (tokenControl?.tools) {
      if (Array.isArray(tokenControl.tools)) {
        tokenControl.tools.push(tokenTool);
      } else {
        tokenControl.tools["gumshoe-one2one-dock"] = {
          ...tokenTool,
          order: 99,
          onChange: tokenTool.onClick
        };
      }
    }
  }
});
