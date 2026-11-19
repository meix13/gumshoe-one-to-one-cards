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
  dockHidden: false,
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

  dockEl.classList.toggle("is-hidden", One2OneState.dockHidden);
  dockEl.classList.toggle("is-minimized", One2OneState.dockMinimized);
  dockEl.classList.toggle("view-expanded", One2OneState.dockExpandedView);

  const cards = hand ? Array.from(hand.cards.values()) : [];
  const edgesAndContacts = cards.filter(c => ["edge", "contact"].includes(getCardData(c).cardType));
  const edgesCount = cards.filter(c => getCardData(c).cardType === "edge").length;
  const contactsCount = cards.filter(c => getCardData(c).cardType === "contact").length;
  const problems = cards.filter(c => getCardData(c).cardType === "problem");
  const doomCount = problems.filter(c => getCardData(c).tags.doom).length;

  // Botón flotante discreto en la esquina inferior izquierda cuando la barra principal está oculta
  let launcherEl = document.getElementById("one2one-toolbar-launcher");
  if (!launcherEl) {
    launcherEl = document.createElement("div");
    launcherEl.id = "one2one-toolbar-launcher";
    document.body.appendChild(launcherEl);
    launcherEl.addEventListener("click", onContainerActionClick);
  }
  if (One2OneState.dockHidden) {
    launcherEl.style.display = "flex";
    launcherEl.innerHTML = `
      <button type="button" class="o2o-launcher-btn" data-action="show-dock" title="Abrir Mesa GUMSHOE One-2-One (También disponible en el icono de la barra de herramientas izquierda)">
        <i class="fas fa-layer-group"></i>
        <span>Mesa 1-2-1</span>
        <span class="o2o-pill-count edge" style="padding:1px 6px;">${edgesAndContacts.length}</span>
        <span class="o2o-pill-count problem" style="padding:1px 6px;">${problems.length}</span>
      </button>
    `;
  } else {
    launcherEl.style.display = "none";
  }

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
        <button type="button" class="o2o-btn o2o-btn-agent" data-action="open-agent-sheet" title="Abrir Ficha Interactiva de Agente (Leyla Khan — NBA: Solo Ops)">
          <i class="fas fa-user-secret"></i> Ficha Agente
        </button>
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
        <button type="button" class="o2o-btn" data-action="open-guide-journal" title="Abrir Diario con la Guía de Uso y Prueba paso a paso">
          <i class="fas fa-book-open"></i> Guía
        </button>
        <button type="button" class="o2o-btn" data-action="toggle-dock-minimize" title="Minimizar / Expandir bandeja de cartas">
          <i class="fas ${One2OneState.dockMinimized ? "fa-chevron-up" : "fa-chevron-down"}"></i>
        </button>
        <button type="button" class="o2o-btn" data-action="hide-dock" title="Ocultar barra de mesa (puedes volver a abrirla desde el icono de la barra de herramientas izquierda)">
          <i class="fas fa-times"></i>
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
          <button type="button" class="o2o-btn" data-action="open-guide-journal" title="Abrir Diario con la Guía de Uso y Prueba">
            <i class="fas fa-book-open"></i> Guía
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
function openChallengeRollerModal(preset = null) {
  const stacks = getStacksSync();
  const handCards = stacks.hand ? Array.from(stacks.hand.cards.values()).map(getCardData) : [];
  const activeProblems = handCards.filter(c => c.cardType === "problem");

  One2OneState.activeChallenge = {
    skillName: preset?.skillName || "Reto General",
    baseDice: Number(preset?.baseDice ?? 2),
    bonusDiceFromEdges: 0,
    extraProblemAccepted: false,
    spentEdgeNames: [],
    advanceThreshold: Number(preset?.advanceThreshold ?? 6),
    holdThreshold: Number(preset?.holdThreshold ?? 4),
    selectedProblemIds: Array.isArray(preset?.selectedProblemIds)
      ? preset.selectedProblemIds
      : activeProblems.filter(p => p.effectiveModifier !== 0 || p.dicePenalty !== 0).map(p => p.id),
    customModifier: Number(preset?.customModifier ?? 0),
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

      <div class="o2o-modal-footer" style="justify-content:space-between;">
        <div>
          ${game.user.isGM ? `
            <button type="button" class="o2o-btn o2o-btn-gm" id="o2o-ch-send-player" title="Abre esta ventana de Reto directamente en la pantalla del Jugador con los umbrales y penalizadores que has configurado">
              <i class="fas fa-share-from-square"></i> Enviar Reto Preparado al Jugador
            </button>
          ` : ""}
        </div>
        <button type="button" class="o2o-btn o2o-btn-challenge" id="o2o-ch-publish-chat" ${st.rolledValues.length === 0 ? "disabled style='opacity:0.5;'" : ""}>
          <i class="fas fa-paper-plane"></i> Publicar Resultado del Reto en el Chat
        </button>
      </div>
    </div>
  `;

  modal.querySelector("#o2o-ch-send-player")?.addEventListener("click", () => {
    const payload = {
      action: "openChallengeFromGM",
      preset: {
        skillName: st.skillName,
        baseDice: st.baseDice,
        advanceThreshold: st.advanceThreshold,
        holdThreshold: st.holdThreshold,
        selectedProblemIds: st.selectedProblemIds,
        customModifier: st.customModifier
      }
    };
    game.socket.emit(SOCKET_NAME, payload);
    ui.notifications.info(`Reto "${st.skillName}" enviado a la pantalla del jugador.`);
  });

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

    // Si ha ganado 1 Push por dejar dados sin tirar en un Advance, sumarlo a la ficha del Agente
    let pushAutoAddedMsg = "";
    if (finalCalc.earnedPush) {
      const agentActor = getActiveAgentActorSync();
      if (agentActor && (game.user.isGM || agentActor.isOwner)) {
        const currentAgentData = getAgentDataFromActor(agentActor);
        const nextPushes = Number(currentAgentData.pushes || 0) + 1;
        await updateAgentDataOnActor(agentActor, { pushes: nextPushes });
        pushAutoAddedMsg = `<div style="margin-top:5px; color:#38bdf8;"><i class="fas fa-circle-up"></i> <strong>+1 Push sumado automáticamente a ${escapeHtml(agentActor.name)}</strong> (Total: ${nextPushes} Pushes).</div>`;
      }
    }

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
          ${pushAutoAddedMsg}
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

/** Crea o abre la Entrada de Diario (JournalEntry) nativa en Foundry con la Guía de Uso y Prueba completa */
async function ensureGuideJournalEntry(openSheet = false) {
  let journal = game.journal?.find(j => j.getFlag(MODULE_ID, "isGuideJournal") === true);

  const guideHTML = `
    <h2>🎬 Guía de Uso y Prueba: Módulo GUMSHOE One-2-One (Never Say Dead)</h2>
    <p>Este diario ha sido generado automáticamente por el módulo <strong>GUMSHOE One-2-One: Sistema Táctico de Cartas y Retos</strong>. Tanto el Director de Juego (GM) como el Jugador pueden abrirlo en cualquier momento pulsando el botón <strong>📖 Guía</strong> de la bandeja inferior.</p>
    <hr/>
    <h3>🏥 Escena 1: Despertar en el Hospital de Budapest (Cajón GM y Entrega de Cartas)</h3>
    <ol>
      <li><strong>Como GM:</strong> En la bandeja inferior, pulsa el botón naranja <strong>Cajón GM</strong>. Verás la pestaña <strong>Reserva del GM (75)</strong> con todas las cartas oficiales de <em>Never Say Dead</em>.</li>
      <li><strong>Ordenación y Filtros:</strong> Usa el desplegable de ordenación para ver las cartas por <strong>🔤 Orden: A–Z (Título Español)</strong>, <strong>🔢 Nº Oficial (PROBLEM 1, 2...)</strong> o <strong>🔤 A–Z (Título Inglés)</strong>. La elección queda guardada automáticamente.</li>
      <li><strong>Entregar cartas iniciales:</strong> Busca y pulsa <strong>Entregar a Mesa</strong> en:
        <ul>
          <li><code>PROBLEM 1 — Apaleada (Beaten Up)</code></li>
          <li><code>PROBLEM 2 — Con lo Puesto (Running on Empty)</code></li>
          <li><code>PROBLEM 5 — Deberíamos Sedarla (We Should Sedate Her)</code></li>
          <li><code>EDGE 1 — La Iglesia (The Church)</code>, <code>EDGE 4 — Jeringuilla de Propofol</code> y <code>CONTACT 1 — Magdalena Halmi, Enfermera</code>.</li>
        </ul>
      </li>
      <li><strong>En la pantalla del Jugador:</strong> Aparece una notificación superior con la imagen de la carta, se registra en el Chat y se coloca en su bandeja de mesa (Ventajas y Contactos a la izquierda, Problemas a la derecha).</li>
    </ol>

    <h3>🔍 Escena 2: Inspección y Doble Modo Visual (Español CSS ⇄ Carta Original PDF)</h3>
    <ul>
      <li><strong>Alternar Modo Visual:</strong> Pulsa el botón <strong>Ver Carta PDF</strong> / <strong>Ver Español CSS</strong> en la bandeja o en el Cajón GM para cambiar entre el diseño oscuro traducido al español y el recorte original en inglés del PDF. Tu preferencia se guarda automáticamente aunque cierres o recargues Foundry.</li>
      <li><strong>Ampliar / Lupa (🔍):</strong> Haz clic en el título o en la lupa de cualquier carta para ver <strong>arriba la imagen original recortada del PDF</strong> y <strong>debajo toda su traducción al español</strong> (incluyendo Habilidades de Investigación y Generales en los Contactos).</li>
      <li><strong>Resolver o Gastar Cartas:</strong> El jugador puede pulsar <strong>✔ Resolver</strong> en un Problema superado o <strong>⚡ Gastar</strong> en una Ventaja para enviarla a la pila de Descartes y anunciarlo en el Chat.</li>
    </ul>

    <h3>🎲 Escena 3: Cómo lanza o prepara un Reto el GM y el Jugador (Botón Lanzar Reto)</h3>
    <p>El botón azul <strong>🎲 Lanzar Reto</strong> de la bandeja inferior permite resolver Retos tanto al Jugador como al GM:</p>
    <ul>
      <li><strong>Modo A — El GM prepara el Reto a mano y se lo envía al Jugador:</strong>
        <ol>
          <li>El GM pulsa <strong>🎲 Lanzar Reto</strong> en su bandeja.</li>
          <li>Escribe el nombre en <em>Habilidad / Acción del Reto</em> (ej. <code>Pelea - Guardias de Sinclair</code> o <code>Atletismo - Escapar de las ataduras</code>).</li>
          <li>Indica los <strong>Dados Base (d6)</strong> del agente y ajusta a mano los umbrales de dificultad según la escena: <strong>ADVANCE</strong> (ej. <code>6+</code> o <code>7+</code>), <strong>HOLD</strong> (ej. <code>4</code> a <code>5</code>) y <strong>SETBACK</strong> (<code>3 o menos</code>).</li>
          <li>Marca o desmarca qué <strong>Problemas activos en la mesa</strong> penalizan esta tirada (soporta tanto penalizadores numéricos como <code>-1</code>/<code>-2</code> como penalizadores de dados <code>-1d6</code>/<code>-2d6</code>).</li>
          <li>Pulsa el botón naranja <strong>📤 Enviar Reto Preparado al Jugador</strong>: la ventana del Reto se abre automáticamente en la pantalla del Jugador con todo ya configurado para que tire los dados.</li>
        </ol>
      </li>
      <li><strong>Modo B — El GM lanza y resuelve el Reto él mismo a mano:</strong>
        <p>El GM configura esos mismos campos en su ventana de <strong>🎲 Lanzar Reto</strong>, tira los dados directamente con <strong>Tirar Siguiente Dado (1d6)</strong> o <strong>Tirar Todos los Restantes</strong> y pulsa <strong>Publicar Resultado del Reto en el Chat</strong>.</p>
      </li>
      <li><strong>Tirada Progresiva (Dado a Dado), Gastar Ventajas y Push:</strong>
        <ul>
          <li>Puedes tirar los dados uno por uno (<strong>Tirar Siguiente Dado 1d6</strong>).</li>
          <li><strong>A mitad de la tirada</strong>, tras ver el primer dado, puedes pulsar <strong>⚡ Gastar (+1d6)</strong> en una Ventaja disponible o marcar <strong>Aceptar Problema Extra (+1d6)</strong> para sumar dados extra a la reserva.</li>
          <li>Si alcanzas el umbral de <strong>Advance</strong> dejando al menos 1 dado sin tirar, el sistema detecta y anuncia automáticamente que <strong>¡GANAS 1 PUSH!</strong>.</li>
        </ul>
      </li>
    </ul>

    <h3>🕵️‍♀️ Escena 4: Ficha Interactiva de Agente (Leyla Khan — NBA: Solo Ops)</h3>
    <ul>
      <li><strong>Abrir o Crear a Leyla Khan con 1 clic (👤 Ficha Agente):</strong> Pulsa el botón <strong>👤 Ficha Agente</strong> en la bandeja inferior (o en la barra lateral de controles de escena). El módulo crea automáticamente el Actor <strong>Leyla Khan</strong> con su retrato original recortado y sus 17 Habilidades de Investigación iniciales ya marcadas.</li>
      <li><strong>Como Hoja Adicional en cualquier Actor:</strong> También se registra como hoja de personaje en Foundry (<em>GUMSHOE One-2-One: Ficha de Agente (NBA: Solo Ops)</em>) y añade un botón rápido <strong>Ficha 1-2-1</strong> en la barra superior de cualquier Actor.</li>
      <li><strong>38 Habilidades de Investigación (A / I / T):</strong> Puedes activar o desactivar casillas, pulsar <strong>🔍 Pista</strong> para anunciar una investigación en el Chat o pulsar <strong>⚡ Push</strong> para gastar 1 Push de tu reserva y anunciarlo en el Chat.</li>
      <li><strong>16 Habilidades Generales conectadas al Lanzador de Retos:</strong> Marca la casilla <strong>STUNT USE</strong> (Maniobra Especial), ajusta tus dados base (por defecto <code>2d6 ⚀⚁</code>) y haz clic en cualquier Habilidad General (o en su botón <strong>🎲 Reto</strong>) para abrir directamente el <strong>Lanzador Táctico de Retos</strong> con esa habilidad y sus dados cargados. Si tienes en mesa <code>PROBLEM 2 — Con lo Puesto</code>, la ficha avisa automáticamente de que <em>Preparación (Preparedness)</em> y <em>Disparo (Shooting)</em> están bloqueadas.</li>
      <li><strong>Medidores Oficiales (Heat, Injury y Shadow Tracker 0–5):</strong> Haz clic en cualquier casilla de <code>0</code> a <code>5</code> o pulsa <strong>🔄 Sincronizar con Mesa</strong> para igualar los medidores al número de cartas activas de tipo <em>Heat</em>, <em>Injury</em> y <em>Shadow</em> en la mesa.</li>
    </ul>

    <h3>🎯 Escena 5: Marcas (Ticks), Contramedidas (Counter) y Creación Rápida</h3>
    <ul>
      <li><strong>Marcas Interactivas (Ticks):</strong> Cartas como <code>PROBLEM 32 — En el Punto de Mira (The Drop)</code> muestran casillas <code>MARCAS (0/3)</code> con botones <code>-</code> y <code>+</code> sincronizados en vivo. Al llegar al máximo, publican un aviso en el Chat.</li>
      <li><strong>Contramedida (Counter):</strong> Si tienes en mesa <code>PROBLEM 45 — Asalto Psíquico</code> y la ventaja <code>EDGE 11 — El Frasco de Agua de Rosas</code>, al pulsar <strong>🛡️ Anular</strong> en la ventaja se neutraliza y descarta automáticamente el problema objetivo.</li>
      <li><strong>Improvisar Carta (+ Crear Carta):</strong> El GM puede crear nuevas cartas en mitad de la partida (eligiendo diseño CSS o imagen completa) y guardarlas en su Reserva o entregarlas directamente a la mesa.</li>
    </ul>

    <h3>🔄 Gestión de Errores, Reinicio Completo y Fin de Operación</h3>
    <ul>
      <li><strong>Deshacer entrega si bajas una carta a la mesa por error (📦 Reserva):</strong> En cualquier carta que esté en la mesa del jugador, el GM tiene el botón <strong>📦 Reserva</strong> para retirarla inmediatamente de la mesa y devolverla a la Reserva del GM en silencio.</li>
      <li><strong>Reiniciar toda la partida (🔄 Reiniciar Todo a Reserva):</strong> En la cabecera del <strong>Cajón GM</strong>, este botón devuelve todas las cartas de la Mesa, Descartes y Continuidad a la Reserva del GM, pone todas las marcas (Ticks) a <code>0</code> y restaura las 75 cartas oficiales.</li>
      <li><strong>Fin de Operación (🏁 Fin de Operación):</strong> Al terminar el escenario, evalúa las cartas que sigan en la mesa: lanza una alerta crítica si queda alguna carta <strong>DOOM</strong> sin resolver (como <code>PROBLEM 20 — Desangrándose</code>), mueve las cartas con etiqueta <strong>Continuidad</strong> al Archivo de Continuidad para la siguiente aventura y limpia el resto de la mesa.</li>
    </ul>
  `;

  if (!journal && game.user.isGM) {
    journal = await JournalEntry.create({
      name: "📘 Guía de Uso: GUMSHOE One-2-One (Never Say Dead)",
      ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER },
      flags: { [MODULE_ID]: { isGuideJournal: true } },
      pages: [
        {
          name: "Guía Paso a Paso (GM y Jugador)",
          type: "text",
          text: { content: guideHTML, format: 1 }
        }
      ]
    });
  } else if (journal && game.user.isGM) {
    const firstPage = journal.pages?.contents?.[0];
    if (firstPage && !firstPage.text?.content?.includes("Ficha Interactiva de Agente")) {
      await firstPage.update({ "text.content": guideHTML });
    }
  }

  if (openSheet) {
    if (journal) {
      journal.sheet.render(true);
    } else {
      ui.notifications.warn("El GM aún no ha inicializado el Diario de la Guía.");
    }
  }
  return journal;
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
    case "hide-dock": {
      One2OneState.dockHidden = true;
      await game.settings.set(MODULE_ID, "dockHidden", true);
      renderTabletopDock();
      break;
    }
    case "show-dock": {
      One2OneState.dockHidden = false;
      One2OneState.dockMinimized = false;
      await game.settings.set(MODULE_ID, "dockHidden", false);
      await game.settings.set(MODULE_ID, "dockMinimized", false);
      renderTabletopDock();
      break;
    }
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
    case "open-guide-journal": {
      await ensureGuideJournalEntry(true);
      break;
    }
    case "open-agent-sheet": {
      await openAgentSheetModal();
      break;
    }
  }
}

/* ==========================================================================
   7. FICHA INTERACTIVA DE AGENTE (LEYLA KHAN — NIGHT'S BLACK AGENTS: SOLO OPS)
   ========================================================================== */
const LEYLA_PORTRAIT_PATH = `modules/${MODULE_ID}/assets/actors/leyla-khan.jpg`;

/** 38 Habilidades Oficiales de Investigación (organizadas en las 3 columnas exactas del PDF A4) */
const INVESTIGATIVE_ABILITIES_DEF = [
  // Columna 1 (13)
  { id: "accounting", col: 1, cat: "A", en: "Accounting", es: "Contabilidad", leylaDefault: false },
  { id: "archaeology", col: 1, cat: "A", en: "Archaeology", es: "Arqueología", leylaDefault: false },
  { id: "architecture", col: 1, cat: "A", en: "Architecture", es: "Arquitectura", leylaDefault: false },
  { id: "art_history", col: 1, cat: "A", en: "Art History", es: "Historia del Arte", leylaDefault: false },
  { id: "astronomy", col: 1, cat: "A", en: "Astronomy", es: "Astronomía", leylaDefault: false },
  { id: "bullshit_detector", col: 1, cat: "I", en: "Bullshit Detector", es: "Detector de Mentiras", leylaDefault: true },
  { id: "bureaucracy", col: 1, cat: "I", en: "Bureaucracy", es: "Burocracia", leylaDefault: false },
  { id: "charm", col: 1, cat: "I", en: "Charm", es: "Encanto / Seducción", leylaDefault: true },
  { id: "chemistry", col: 1, cat: "T", en: "Chemistry", es: "Química", leylaDefault: false },
  { id: "cop_talk", col: 1, cat: "I", en: "Cop Talk", es: "Jerga Policial", leylaDefault: false },
  { id: "criminology", col: 1, cat: "A", en: "Criminology", es: "Criminología", leylaDefault: true },
  { id: "cryptography", col: 1, cat: "T", en: "Cryptography", es: "Criptografía", leylaDefault: false },
  { id: "data_recovery", col: 1, cat: "T", en: "Data Recovery", es: "Recuperación de Datos", leylaDefault: false },

  // Columna 2 (13)
  { id: "diagnosis", col: 2, cat: "A", en: "Diagnosis", es: "Diagnóstico", leylaDefault: false },
  { id: "electronic_surveillance", col: 2, cat: "T", en: "Electronic Surveillance", es: "Vigilancia Electrónica", leylaDefault: true },
  { id: "forensic_pathology", col: 2, cat: "T", en: "Forensic Pathology", es: "Patología Forense", leylaDefault: true },
  { id: "forgery", col: 2, cat: "T", en: "Forgery", es: "Falsificación", leylaDefault: false },
  { id: "high_society", col: 2, cat: "I", en: "High Society", es: "Alta Sociedad", leylaDefault: false },
  { id: "history", col: 2, cat: "A", en: "History", es: "Historia", leylaDefault: false },
  { id: "human_terrain", col: 2, cat: "A", en: "Human Terrain", es: "Terreno Humano", leylaDefault: true },
  { id: "interrogation", col: 2, cat: "I", en: "Interrogation", es: "Interrogatorio", leylaDefault: true },
  { id: "intimidation", col: 2, cat: "I", en: "Intimidation", es: "Intimidación", leylaDefault: true },
  { id: "languages", col: 2, cat: "A", en: "Languages", es: "Idiomas", leylaDefault: true },
  { id: "law", col: 2, cat: "A", en: "Law", es: "Derecho / Leyes", leylaDefault: false },
  { id: "military_science", col: 2, cat: "A", en: "Military Science", es: "Ciencia Militar", leylaDefault: true },
  { id: "negotiation", col: 2, cat: "I", en: "Negotiation", es: "Negociación", leylaDefault: false },

  // Columna 3 (12)
  { id: "notice", col: 3, cat: "T", en: "Notice", es: "Advertir / Observación", leylaDefault: true },
  { id: "occult_studies", col: 3, cat: "A", en: "Occult Studies", es: "Estudios Ocultistas", leylaDefault: false },
  { id: "outdoor_survival", col: 3, cat: "T", en: "Outdoor Survival", es: "Supervivencia Exterior", leylaDefault: true },
  { id: "pharmacy", col: 3, cat: "T", en: "Pharmacy", es: "Farmacia", leylaDefault: false },
  { id: "photography", col: 3, cat: "T", en: "Photography", es: "Fotografía", leylaDefault: false },
  { id: "reassurance", col: 3, cat: "I", en: "Reassurance", es: "Tranquilizar", leylaDefault: true },
  { id: "research", col: 3, cat: "A", en: "Research", es: "Investigación", leylaDefault: false },
  { id: "streetwise", col: 3, cat: "I", en: "Streetwise", es: "Bajos Fondos / Callejeo", leylaDefault: true },
  { id: "tradecraft", col: 3, cat: "I", en: "Tradecraft", es: "Oficio de Espía (Tradecraft)", leylaDefault: true },
  { id: "traffic_analysis", col: 3, cat: "T", en: "Traffic Analysis", es: "Análisis de Tráfico", leylaDefault: true },
  { id: "urban_survival", col: 3, cat: "T", en: "Urban Survival", es: "Supervivencia Urbana", leylaDefault: true },
  { id: "vampirology", col: 3, cat: "A", en: "Vampirology", es: "Vampirología", leylaDefault: false }
];

/** 16 Habilidades Generales Oficiales (con STUNT USE y 2d6 por defecto como en el PDF) */
const GENERAL_ABILITIES_DEF = [
  { id: "athletics", en: "Athletics", es: "Atletismo", defaultDice: 2 },
  { id: "conceal", en: "Conceal", es: "Ocultar", defaultDice: 2 },
  { id: "cool", en: "Cool", es: "Frialdad", defaultDice: 2 },
  { id: "cover", en: "Cover", es: "Tapadera / Identidad", defaultDice: 2 },
  { id: "driving", en: "Driving", es: "Conducir", defaultDice: 2 },
  { id: "evasion", en: "Evasion", es: "Evasión / Sigilo", defaultDice: 2 },
  { id: "fighting", en: "Fighting", es: "Pelea", defaultDice: 2 },
  { id: "filch", en: "Filch", es: "Hurto", defaultDice: 2 },
  { id: "infiltration", en: "Infiltration", es: "Infiltración", defaultDice: 2 },
  { id: "mechanics", en: "Mechanics", es: "Mecánica", defaultDice: 2 },
  { id: "medic", en: "Medic", es: "Medicina", defaultDice: 2 },
  { id: "network", en: "Network", es: "Red de Contactos", defaultDice: 2 },
  { id: "preparedness", en: "Preparedness", es: "Preparación", defaultDice: 2 },
  { id: "sense_trouble", en: "Sense Trouble", es: "Detectar Peligro", defaultDice: 2 },
  { id: "shooting", en: "Shooting", es: "Disparo", defaultDice: 2 },
  { id: "surveillance", en: "Surveillance", es: "Vigilancia", defaultDice: 2 }
];

function buildDefaultLeylaAgentData() {
  const investigative = {};
  for (const ab of INVESTIGATIVE_ABILITIES_DEF) {
    investigative[ab.id] = Boolean(ab.leylaDefault);
  }
  const general = {};
  for (const g of GENERAL_ABILITIES_DEF) {
    general[g.id] = { dice: g.defaultDice, stunt: false };
  }
  return {
    agentName: "LEYLA KHAN",
    pushes: 2,
    contactsNotes: "",
    notes: "",
    trackers: {
      heat: 0,
      injury: 0,
      shadow: 0
    },
    investigative,
    general
  };
}

function getAgentDataFromActor(actorDoc) {
  const defaults = buildDefaultLeylaAgentData();
  if (!actorDoc) return defaults;
  const saved = actorDoc.flags?.[MODULE_ID]?.agentData || {};

  const investigative = { ...defaults.investigative, ...(saved.investigative || {}) };
  const general = {};
  for (const g of GENERAL_ABILITIES_DEF) {
    const sg = saved.general?.[g.id] || {};
    general[g.id] = {
      dice: Math.clamp(Number(sg.dice ?? g.defaultDice), 1, 6),
      stunt: Boolean(sg.stunt)
    };
  }

  return {
    agentName: actorDoc.name || saved.agentName || defaults.agentName,
    pushes: Math.max(0, Number(saved.pushes ?? defaults.pushes)),
    contactsNotes: String(saved.contactsNotes ?? defaults.contactsNotes),
    notes: String(saved.notes ?? defaults.notes),
    trackers: {
      heat: Math.clamp(Number(saved.trackers?.heat ?? 0), 0, 5),
      injury: Math.clamp(Number(saved.trackers?.injury ?? 0), 0, 5),
      shadow: Math.clamp(Number(saved.trackers?.shadow ?? 0), 0, 5)
    },
    investigative,
    general
  };
}

async function updateAgentDataOnActor(actorDoc, partialData) {
  if (!actorDoc) return;
  const current = getAgentDataFromActor(actorDoc);
  const next = foundry.utils.mergeObject(current, partialData, { inplace: false });

  const updatePayload = {
    [`flags.${MODULE_ID}.isOne2OneAgent`]: true,
    [`flags.${MODULE_ID}.agentData`]: next
  };
  if (partialData.agentName && partialData.agentName !== actorDoc.name) {
    updatePayload.name = partialData.agentName;
  }
  await actorDoc.update(updatePayload);
}

function getActiveAgentActorSync() {
  if (!game.actors) return null;
  return (
    game.actors.find(a => a.getFlag(MODULE_ID, "isLeylaKhan") === true) ||
    game.actors.find(a => a.getFlag(MODULE_ID, "isOne2OneAgent") === true) ||
    game.actors.find(a => a.name.toLowerCase().includes("leyla khan")) ||
    null
  );
}

async function ensureLeylaKhanActor() {
  let actor = getActiveAgentActorSync();
  const sheetClassId = `${MODULE_ID}.GumshoeOne2OneActorSheet`;

  if (actor) {
    if (game.user.isGM && actor.getFlag("core", "sheetClass") !== sheetClassId) {
      await actor.update({
        "flags.core.sheetClass": sheetClassId,
        [`flags.${MODULE_ID}.isOne2OneAgent`]: true,
        [`flags.${MODULE_ID}.isLeylaKhan`]: true
      });
      actor._sheet = null;
    }
    return actor;
  }

  if (!game.user.isGM) {
    // Solicitar creación al GM por socket si está conectado
    game.socket.emit(SOCKET_NAME, { action: "requestCreateLeylaActor" });
    return null;
  }

  // Detectar un tipo de Actor válido en cualquier sistema instalado en Foundry VTT
  const dataModelTypes = Object.keys(CONFIG.Actor?.dataModels || {});
  const docTypes = dataModelTypes.length ? dataModelTypes : (game.documentTypes?.Actor || Actor.TYPES || ["pc", "character"]);
  const validTypes = docTypes.filter(t => t !== "base");
  const chosenType = validTypes.includes("pc")
    ? "pc"
    : (validTypes.includes("character") ? "character" : (validTypes.includes("agent") ? "agent" : (validTypes[0] || "pc")));

  const defaultData = buildDefaultLeylaAgentData();

  actor = await Actor.create({
    name: "Leyla Khan",
    type: chosenType,
    img: LEYLA_PORTRAIT_PATH,
    ownership: { default: CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER },
    flags: {
      core: {
        sheetClass: sheetClassId
      },
      [MODULE_ID]: {
        isOne2OneAgent: true,
        isLeylaKhan: true,
        agentData: defaultData
      }
    }
  });

  ui.notifications.info("Actor 'Leyla Khan' creado automáticamente con su ficha oficial de Night's Black Agents: Solo Ops.");
  return actor;
}

/** Construye el HTML interior de la Ficha de Agente (válido tanto para Modal como para ActorSheet nativo) */
function buildAgentSheetInnerHTML(actorDoc) {
  const data = getAgentDataFromActor(actorDoc);
  const portraitSrc = actorDoc?.img || LEYLA_PORTRAIT_PATH;

  // Cartas activas en la Mesa del Agente para sincronizar Contactos, bloqueos y Trackers
  const stacks = getStacksSync();
  const handCards = stacks.hand ? Array.from(stacks.hand.cards.values()).map(getCardData) : [];
  const activeContacts = handCards.filter(c => c.cardType === "contact");
  const activeProblems = handCards.filter(c => c.cardType === "problem");

  const tableHeatCount = activeProblems.filter(c => c.category === "heat").length;
  const tableInjuryCount = activeProblems.filter(c => c.category === "injury").length;
  const tableShadowCount = activeProblems.filter(c => c.category === "shadow").length;

  // Detectar si PROBLEM 2 (Con lo Puesto / Running on Empty) está en mesa
  const hasRunningOnEmpty = activeProblems.some(p =>
    p.code?.toUpperCase() === "PROBLEM 2" ||
    p.name.toLowerCase().includes("con lo puesto") ||
    p.originalName?.toLowerCase().includes("running on empty")
  );

  const checkedInvCount = Object.values(data.investigative).filter(Boolean).length;

  const renderInvColumn = (colNum) => {
    const items = INVESTIGATIVE_ABILITIES_DEF.filter(ab => ab.col === colNum);
    return items.map(ab => {
      const isChecked = Boolean(data.investigative[ab.id]);
      const catTitle = ab.cat === "A" ? "Academic (Académica)" : (ab.cat === "I" ? "Interpersonal" : "Technical (Técnica)");
      return `
        <div class="o2o-inv-row ${isChecked ? "is-checked" : ""}" data-inv-id="${ab.id}">
          <label class="o2o-inv-check-label" title="${escapeHtml(ab.es)} (${escapeHtml(ab.en)})">
            <input type="checkbox" class="o2o-inv-checkbox" data-inv-id="${ab.id}" ${isChecked ? "checked" : ""} />
            <span class="o2o-inv-cat cat-${ab.cat}" title="${catTitle}">${ab.cat}</span>
            <span class="o2o-inv-name">
              <strong>${escapeHtml(ab.es)}</strong>
              <small>${escapeHtml(ab.en)}</small>
            </span>
          </label>
          <div class="o2o-inv-actions">
            <button type="button" class="o2o-mini-btn" data-sheet-action="use-inv-clue" data-inv-id="${ab.id}" title="Investigar / Obtener Pista en el Chat">
              <i class="fas fa-magnifying-glass"></i>
            </button>
            <button type="button" class="o2o-mini-btn push-btn" data-sheet-action="push-inv-ability" data-inv-id="${ab.id}" title="Gastar 1 Push con esta habilidad y anunciarlo en el Chat">
              ⚡ Push
            </button>
          </div>
        </div>
      `;
    }).join("");
  };

  const renderGeneralAbilities = () => {
    return GENERAL_ABILITIES_DEF.map(g => {
      const gState = data.general[g.id] || { dice: 2, stunt: false };
      const isBlockedByProb2 = hasRunningOnEmpty && (g.id === "preparedness" || g.id === "shooting");
      let diceIcons = "";
      for (let i = 0; i < gState.dice; i++) {
        diceIcons += `<i class="fas fa-dice-${i % 2 === 0 ? "one" : "two"}"></i>`;
      }
      return `
        <div class="o2o-gen-row ${isBlockedByProb2 ? "is-blocked" : ""}" data-gen-id="${g.id}">
          <label class="o2o-stunt-cell" title="STUNT USE (Uso de Maniobra Especial)">
            <input type="checkbox" class="o2o-gen-stunt" data-gen-id="${g.id}" ${gState.stunt ? "checked" : ""} />
          </label>
          <div class="o2o-gen-dice-cell" title="Dados base de la habilidad (por defecto 2d6)">
            <span class="o2o-dice-glyphs">${diceIcons}</span>
            <select class="o2o-gen-dice-select" data-gen-id="${g.id}">
              ${[1, 2, 3, 4].map(n => `<option value="${n}" ${gState.dice === n ? "selected" : ""}>${n}d6</option>`).join("")}
            </select>
          </div>
          <div class="o2o-gen-name-cell" data-sheet-action="roll-general-challenge" data-gen-id="${g.id}" title="Haz clic para abrir el Lanzador Táctico de Retos con ${escapeHtml(g.es)} (${gState.dice}d6)">
            <div>
              <strong>${escapeHtml(g.es)}</strong>
              <small>${escapeHtml(g.en)}</small>
            </div>
            ${isBlockedByProb2 ? `<span class="o2o-blocked-pill" title="Bloqueada por PROBLEM 2 — Con lo Puesto (Running on Empty)"><i class="fas fa-ban"></i> Sin equipo</span>` : ""}
          </div>
          <button type="button" class="o2o-btn o2o-btn-challenge o2o-gen-roll-btn" data-sheet-action="roll-general-challenge" data-gen-id="${g.id}" title="Lanzar Reto de ${escapeHtml(g.es)} (${gState.dice}d6)">
            <i class="fas fa-dice-d6"></i> Reto
          </button>
        </div>
      `;
    }).join("");
  };

  const renderTracker = (key, titleEn, titleEs, color, icon, tableCount) => {
    const currentVal = data.trackers[key] ?? 0;
    let boxes = "";
    for (let v = 0; v <= 5; v++) {
      const isSelected = currentVal === v;
      const isFilled = v > 0 && v <= currentVal;
      boxes += `
        <button type="button" class="o2o-tracker-box ${isSelected ? "active" : ""} ${isFilled ? "filled" : ""}"
                data-sheet-action="set-tracker" data-tracker="${key}" data-val="${v}"
                style="${isSelected ? `border-color:${color}; background:${color}33; color:#fff;` : ""}">
          ${v}
        </button>
      `;
    }
    return `
      <div class="o2o-tracker-card" style="border-top: 3px solid ${color};">
        <div class="o2o-tracker-header">
          <span style="color:${color}; font-weight:800;"><i class="fas ${icon}"></i> ${titleEn} <small style="color:#cbd5e1; font-weight:600;">(${titleEs})</small></span>
          <span class="o2o-tracker-table-badge" title="Cartas de tipo ${titleEn} activas ahora mismo en la mesa">
            En mesa: <strong>${tableCount}</strong>
          </span>
        </div>
        <div class="o2o-tracker-boxes">${boxes}</div>
      </div>
    `;
  };

  return `
    <div class="o2o-agent-sheet">
      <!-- CABECERA SUPERIOR: NOMBRE, CONTACTOS, PUSHES Y RETRATO -->
      <div class="o2o-sheet-top-grid">
        <div class="o2o-sheet-identity-box">
          <div class="o2o-sheet-banner-title">
            <div>
              <span class="o2o-nba-badge">NIGHT'S BLACK AGENTS: SOLO OPS</span>
              <h2>FICHA DE AGENTE — GUMSHOE ONE-2-ONE</h2>
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
              <button type="button" class="o2o-btn" data-sheet-action="reset-leyla-defaults" title="Restaurar las 17 habilidades oficiales y valores iniciales de Leyla Khan">
                <i class="fas fa-rotate-left"></i> Restaurar PDF Oficial
              </button>
              <button type="button" class="o2o-btn" data-sheet-action="share-agent-chat" title="Publicar resumen de la ficha en el Chat">
                <i class="fas fa-comment-dots"></i> Chat
              </button>
            </div>
          </div>

          <div class="o2o-sheet-name-pushes-row">
            <div class="o2o-name-field">
              <label>NAME / AGENTE:</label>
              <input type="text" class="o2o-input o2o-agent-name-input" value="${escapeHtml(data.agentName)}" />
            </div>

            <div class="o2o-pushes-widget" title="Reserva de Pushes (Empujes) para pistas o ventajas extra">
              <span class="o2o-pushes-label"><i class="fas fa-bolt" style="color:#f59e0b;"></i> PUSHES:</span>
              <button type="button" class="o2o-tick-btn" data-sheet-action="delta-push" data-delta="-1">-</button>
              <span class="o2o-pushes-count">${data.pushes}</span>
              <button type="button" class="o2o-tick-btn" data-sheet-action="delta-push" data-delta="1">+</button>
              <button type="button" class="o2o-btn o2o-btn-gm" data-sheet-action="spend-push-generic" style="padding:3px 8px; font-size:11px;">
                ⚡ Gastar Push
              </button>
            </div>
          </div>

          <div class="o2o-contacts-section">
            <div class="o2o-contacts-header">
              <span><i class="fas fa-address-card" style="color:#eab308;"></i> CONTACTS (CONTACTOS Y RED DE APOYO)</span>
              <span style="font-size:11px; color:#94a3b8;">${activeContacts.length} carta(s) de Contacto en mesa</span>
            </div>

            ${activeContacts.length > 0 ? `
              <div class="o2o-active-contacts-pills">
                ${activeContacts.map(c => `
                  <div class="o2o-contact-pill" data-sheet-action="inspect-contact-card" data-card-id="${c.id}" title="Haz clic para inspeccionar la carta de este Contacto">
                    <strong><i class="fas fa-user-check"></i> ${escapeHtml(c.name)}</strong>
                    ${c.investigativeAbilities ? `<div><small style="color:#fde047;">Inv:</small> ${escapeHtml(c.investigativeAbilities)}</div>` : ""}
                    ${c.generalAbilities ? `<div><small style="color:#7dd3fc;">Gen:</small> ${escapeHtml(c.generalAbilities)}</div>` : ""}
                  </div>
                `).join("")}
              </div>
            ` : ""}

            <textarea class="o2o-textarea o2o-contacts-textarea" rows="3" placeholder="Anota aquí tus Contactos de operación, tapaderas o aliados adicionales (ej. Magdalena Halmi, Viktor, Cillian Sinclair...)">${escapeHtml(data.contactsNotes)}</textarea>
          </div>
        </div>

        <div class="o2o-sheet-portrait-box">
          <div class="o2o-portrait-frame">
            <img src="${escapeHtml(portraitSrc)}" alt="${escapeHtml(data.agentName)}" class="o2o-agent-portrait-img" data-sheet-action="change-portrait" title="Haz clic para cambiar el retrato del Agente" />
            <div class="o2o-portrait-caption">
              <span>${escapeHtml(data.agentName)}</span>
              <small>${checkedInvCount}/38 Hab. Investigación</small>
            </div>
          </div>
        </div>
      </div>

      <!-- CUERPO CENTRAL: 38 HABILIDADES DE INVESTIGACIÓN (3 COLUMNAS) + 16 HABILIDADES GENERALES (1 COLUMNA) -->
      <div class="o2o-sheet-abilities-grid">
        <div class="o2o-investigative-panel">
          <div class="o2o-panel-title-bar">
            <span><i class="fas fa-magnifying-glass" style="color:#38bdf8;"></i> INVESTIGATIVE ABILITIES (HABILIDADES DE INVESTIGACIÓN)</span>
            <div class="o2o-cat-legend">
              <span><b class="o2o-inv-cat cat-A">A</b> Académica</span>
              <span><b class="o2o-inv-cat cat-I">I</b> Interpersonal</span>
              <span><b class="o2o-inv-cat cat-T">T</b> Técnica</span>
            </div>
          </div>
          <div class="o2o-inv-columns">
            <div class="o2o-inv-col">${renderInvColumn(1)}</div>
            <div class="o2o-inv-col">${renderInvColumn(2)}</div>
            <div class="o2o-inv-col">${renderInvColumn(3)}</div>
          </div>
        </div>

        <div class="o2o-general-panel">
          <div class="o2o-panel-title-bar">
            <span><i class="fas fa-dice-d6" style="color:#10b981;"></i> GENERAL ABILITIES</span>
            <span style="font-size:10px; color:#94a3b8;" title="Casilla izquierda: STUNT USE (Maniobra Especial)">STUNT | DADOS</span>
          </div>
          <div class="o2o-gen-list">
            ${renderGeneralAbilities()}
          </div>
        </div>
      </div>

      <!-- PIE DE FICHA: 3 TRACKERS OFICIALES (0-5) + BLOQUE DE NOTAS -->
      <div class="o2o-sheet-bottom-grid">
        <div class="o2o-trackers-column">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
            <span style="font-size:11.5px; font-weight:800; color:#cbd5e1; text-transform:uppercase; letter-spacing:0.5px;">
              <i class="fas fa-gauge-high"></i> Medidores Oficiales de Estado (0 a 5)
            </span>
            <button type="button" class="o2o-btn" data-sheet-action="sync-trackers-from-table" style="padding:2px 8px; font-size:11px;" title="Igualar Heat, Injury y Shadow al número de cartas de cada tipo que hay activas en la mesa">
              <i class="fas fa-arrows-rotate"></i> Sincronizar con Mesa
            </button>
          </div>
          ${renderTracker("heat", "HEAT TRACKER", "Presión / Alerta", "#f97316", "fa-siren-on", tableHeatCount)}
          ${renderTracker("injury", "INJURY TRACKER", "Heridas", "#ef4444", "fa-heart-crack", tableInjuryCount)}
          ${renderTracker("shadow", "SHADOW TRACKER", "Sombra / Vampiros", "#a855f7", "fa-eye", tableShadowCount)}
        </div>

        <div class="o2o-notes-column">
          <div class="o2o-panel-title-bar">
            <span><i class="fas fa-note-sticky" style="color:#eab308;"></i> NOTES (NOTAS DE OPERACIÓN, PISTAS Y EQUIPO)</span>
          </div>
          <textarea class="o2o-textarea o2o-agent-notes-textarea" placeholder="Escribe aquí tus pistas clave de Budapest, equipo recogido, nombres de sospechosos o consecuencias...">${escapeHtml(data.notes)}</textarea>
        </div>
      </div>
    </div>
  `;
}

function bindAgentSheetEvents(containerEl, actorDoc) {
  if (!containerEl) return;

  // Cambio de nombre del Agente
  const nameInput = containerEl.querySelector(".o2o-agent-name-input");
  nameInput?.addEventListener("change", async (e) => {
    const val = e.target.value.trim() || "LEYLA KHAN";
    await updateAgentDataOnActor(actorDoc, { agentName: val });
  });

  // Cambio de texto de Contactos
  const contactsArea = containerEl.querySelector(".o2o-contacts-textarea");
  contactsArea?.addEventListener("change", async (e) => {
    await updateAgentDataOnActor(actorDoc, { contactsNotes: e.target.value });
  });

  // Cambio de Notas
  const notesArea = containerEl.querySelector(".o2o-agent-notes-textarea");
  notesArea?.addEventListener("change", async (e) => {
    await updateAgentDataOnActor(actorDoc, { notes: e.target.value });
  });

  // Casillas de Habilidades de Investigación
  containerEl.querySelectorAll(".o2o-inv-checkbox").forEach(chk => {
    chk.addEventListener("change", async (e) => {
      const invId = e.currentTarget.dataset.invId;
      await updateAgentDataOnActor(actorDoc, {
        investigative: { [invId]: e.currentTarget.checked }
      });
    });
  });

  // Casillas de STUNT USE en Habilidades Generales
  containerEl.querySelectorAll(".o2o-gen-stunt").forEach(chk => {
    chk.addEventListener("change", async (e) => {
      const genId = e.currentTarget.dataset.genId;
      const current = getAgentDataFromActor(actorDoc);
      const prev = current.general[genId] || { dice: 2, stunt: false };
      await updateAgentDataOnActor(actorDoc, {
        general: { [genId]: { ...prev, stunt: e.currentTarget.checked } }
      });
    });
  });

  // Selector de Dados Base (1d6 - 4d6) en Habilidades Generales
  containerEl.querySelectorAll(".o2o-gen-dice-select").forEach(sel => {
    sel.addEventListener("change", async (e) => {
      const genId = e.currentTarget.dataset.genId;
      const current = getAgentDataFromActor(actorDoc);
      const prev = current.general[genId] || { dice: 2, stunt: false };
      await updateAgentDataOnActor(actorDoc, {
        general: { [genId]: { ...prev, dice: Number(e.currentTarget.value || 2) } }
      });
    });
  });

  // Botones de acción en la ficha
  containerEl.querySelectorAll("[data-sheet-action]").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const action = e.currentTarget.dataset.sheetAction;
      const data = getAgentDataFromActor(actorDoc);

      if (action === "delta-push") {
        const delta = Number(e.currentTarget.dataset.delta || 0);
        const nextPushes = Math.max(0, data.pushes + delta);
        await updateAgentDataOnActor(actorDoc, { pushes: nextPushes });
      } else if (action === "spend-push-generic") {
        if (data.pushes <= 0) {
          ui.notifications.warn("No te quedan Pushes disponibles en la ficha.");
          return;
        }
        const nextPushes = data.pushes - 1;
        await updateAgentDataOnActor(actorDoc, { pushes: nextPushes });
        await ChatMessage.create({
          user: game.user.id,
          speaker: ChatMessage.getSpeaker({ actor: actorDoc }),
          content: `
            <div class="o2o-chat-card edge" style="border-color:#f59e0b;">
              <div class="o2o-chat-header" style="color:#f59e0b;">
                <span><i class="fas fa-bolt"></i> ¡PUSH GASTADO! (${escapeHtml(data.agentName)})</span>
                <span>Quedan: ${nextPushes}</span>
              </div>
              <div style="font-size:12.5px;">
                <strong>${escapeHtml(data.agentName)}</strong> gasta <strong>1 Push</strong> para obtener una pista clave, ventaja narrativa o beneficio adicional.
              </div>
            </div>
          `
        });
      } else if (action === "use-inv-clue" || action === "push-inv-ability") {
        const invId = e.currentTarget.dataset.invId;
        const ab = INVESTIGATIVE_ABILITIES_DEF.find(x => x.id === invId);
        if (!ab) return;
        const hasAbility = Boolean(data.investigative[invId]);
        const isPush = action === "push-inv-ability";

        if (isPush) {
          if (data.pushes <= 0) {
            ui.notifications.warn("No tienes Pushes disponibles. Puedes añadir uno con el botón '+' si el GM te lo otorga.");
            return;
          }
          await updateAgentDataOnActor(actorDoc, { pushes: data.pushes - 1 });
        }

        const color = isPush ? "#f59e0b" : "#38bdf8";
        await ChatMessage.create({
          user: game.user.id,
          speaker: ChatMessage.getSpeaker({ actor: actorDoc }),
          content: `
            <div class="o2o-chat-card challenge" style="border-color:${color};">
              <div class="o2o-chat-header" style="color:${color};">
                <span><i class="fas ${isPush ? "fa-bolt" : "fa-magnifying-glass"}"></i> ${isPush ? "Push de Investigación" : "Investigación GUMSHOE"}</span>
                <span>Categoría ${ab.cat}</span>
              </div>
              <div style="font-size:12.5px; line-height:1.45;">
                <div><strong>Agente:</strong> ${escapeHtml(data.agentName)}</div>
                <div><strong>Habilidad:</strong> ${escapeHtml(ab.es)} (<em>${escapeHtml(ab.en)}</em>)</div>
                <div style="margin-top:4px; color:${hasAbility ? "#6ee7b7" : "#fca5a5"};">
                  ${hasAbility ? "✔ El agente posee esta habilidad entrenada." : "⚠ El agente no tiene marcada esta habilidad."}
                </div>
                ${isPush ? `<div style="margin-top:4px; color:#fcd34d;">⚡ <strong>1 Push gastado</strong> (Pushes restantes: ${Math.max(0, data.pushes - 1)}).</div>` : ""}
              </div>
            </div>
          `
        });
      } else if (action === "roll-general-challenge") {
        const genId = e.currentTarget.dataset.genId;
        const g = GENERAL_ABILITIES_DEF.find(x => x.id === genId);
        if (!g) return;
        const gState = data.general[genId] || { dice: 2, stunt: false };
        openChallengeRollerModal({
          skillName: `${g.es} (${g.en})`,
          baseDice: gState.dice,
          advanceThreshold: 6,
          holdThreshold: 4
        });
      } else if (action === "set-tracker") {
        const trackerKey = e.currentTarget.dataset.tracker;
        const val = Math.clamp(Number(e.currentTarget.dataset.val || 0), 0, 5);
        await updateAgentDataOnActor(actorDoc, {
          trackers: { [trackerKey]: val }
        });
      } else if (action === "sync-trackers-from-table") {
        const stacks = getStacksSync();
        const handCards = stacks.hand ? Array.from(stacks.hand.cards.values()).map(getCardData) : [];
        const activeProbs = handCards.filter(c => c.cardType === "problem");
        const heat = Math.clamp(activeProbs.filter(c => c.category === "heat").length, 0, 5);
        const injury = Math.clamp(activeProbs.filter(c => c.category === "injury").length, 0, 5);
        const shadow = Math.clamp(activeProbs.filter(c => c.category === "shadow").length, 0, 5);
        await updateAgentDataOnActor(actorDoc, {
          trackers: { heat, injury, shadow }
        });
        ui.notifications.info(`Medidores sincronizados con la mesa: Heat ${heat}, Injury ${injury}, Shadow ${shadow}.`);
      } else if (action === "inspect-contact-card") {
        const cardId = e.currentTarget.dataset.cardId;
        const stacks = getStacksSync();
        const doc = stacks.hand?.cards.get(cardId);
        if (doc) openCardInspectorModal(doc);
      } else if (action === "reset-leyla-defaults") {
        const defaults = buildDefaultLeylaAgentData();
        await updateAgentDataOnActor(actorDoc, defaults);
        ui.notifications.info("Ficha restaurada a los valores iniciales oficiales de Leyla Khan.");
      } else if (action === "change-portrait") {
        if (!actorDoc) return;
        const FPClass = foundry?.applications?.apps?.FilePicker?.implementation || window.FilePicker;
        if (!FPClass) return;
        const fp = new FPClass({
          type: "image",
          current: actorDoc.img || LEYLA_PORTRAIT_PATH,
          callback: async (path) => {
            await actorDoc.update({ img: path });
            refreshAgentSheetViews(actorDoc);
          }
        });
        fp.browse();
      } else if (action === "share-agent-chat") {
        const trainedInv = INVESTIGATIVE_ABILITIES_DEF
          .filter(ab => data.investigative[ab.id])
          .map(ab => ab.es);
        await ChatMessage.create({
          user: game.user.id,
          speaker: ChatMessage.getSpeaker({ actor: actorDoc }),
          content: `
            <div class="o2o-chat-card challenge">
              <div class="o2o-chat-header" style="color:#38bdf8;">
                <span><i class="fas fa-user-secret"></i> ${escapeHtml(data.agentName)}</span>
                <span>Pushes: ${data.pushes}</span>
              </div>
              <div style="font-size:12px; line-height:1.45;">
                <div><strong>Heat:</strong> ${data.trackers.heat}/5 | <strong>Injury:</strong> ${data.trackers.injury}/5 | <strong>Shadow:</strong> ${data.trackers.shadow}/5</div>
                <div style="margin-top:5px;"><strong>Habilidades Investigación (${trainedInv.length}):</strong> ${escapeHtml(trainedInv.join(", "))}</div>
              </div>
            </div>
          `
        });
      }
    });
  });
}

async function openAgentSheetModal(targetActor = null) {
  let actor = targetActor || getActiveAgentActorSync();
  if (!actor) {
    actor = await ensureLeylaKhanActor();
  }

  let modal = document.getElementById("one2one-agent-sheet-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "one2one-agent-sheet-modal";
    modal.className = "o2o-modal-backdrop";
    document.body.appendChild(modal);
    modal.addEventListener("click", (ev) => {
      if (ev.target === modal) modal.remove();
    });
  }

  modal.dataset.actorId = actor?.id || "";
  renderAgentSheetModalContent(actor);
}

function renderAgentSheetModalContent(actorDoc = null) {
  const modal = document.getElementById("one2one-agent-sheet-modal");
  if (!modal) return;
  const actor = actorDoc || (modal.dataset.actorId ? game.actors?.get(modal.dataset.actorId) : null) || getActiveAgentActorSync();

  modal.innerHTML = `
    <div class="o2o-modal-window o2o-agent-modal-window" style="width: min(1180px, 96vw); max-height: 92vh;">
      <div class="o2o-modal-header">
        <h3>
          <i class="fas fa-user-secret" style="color:#38bdf8;"></i>
          Ficha Oficial de Agente — ${escapeHtml(actor?.name || "Leyla Khan")} (Night's Black Agents: Solo Ops)
        </h3>
        <div style="display:flex; gap:8px; align-items:center;">
          <button type="button" class="o2o-btn o2o-btn-challenge" id="o2o-agent-open-roller">
            <i class="fas fa-dice-d6"></i> Lanzador de Retos
          </button>
          <button type="button" class="o2o-btn" id="o2o-agent-modal-close"><i class="fas fa-times"></i></button>
        </div>
      </div>
      <div class="o2o-modal-body" id="o2o-agent-modal-body" style="padding:14px 16px;">
        ${buildAgentSheetInnerHTML(actor)}
      </div>
    </div>
  `;

  modal.querySelector("#o2o-agent-modal-close")?.addEventListener("click", () => modal.remove());
  modal.querySelector("#o2o-agent-open-roller")?.addEventListener("click", () => openChallengeRollerModal());

  const bodyEl = modal.querySelector("#o2o-agent-modal-body");
  bindAgentSheetEvents(bodyEl, actor);
}

function refreshAgentSheetViews(actorDoc = null) {
  if (document.getElementById("one2one-agent-sheet-modal")) {
    renderAgentSheetModalContent(actorDoc);
  }
  // Si hay una ventana ActorSheet nativa abierta usando nuestra hoja, refrescar su interior
  document.querySelectorAll(".o2o-native-actor-sheet-mount").forEach(mount => {
    const aid = mount.dataset.actorId;
    const act = (aid && game.actors?.get(aid)) || actorDoc || getActiveAgentActorSync();
    if (act) {
      mount.innerHTML = buildAgentSheetInnerHTML(act);
      bindAgentSheetEvents(mount, act);
    }
  });
}

/** Registra la Ficha de Agente como Hoja de Personaje seleccionable en Foundry VTT (`Actors.registerSheet`) */
let _one2OneSheetRegistered = false;
function registerOne2OneActorSheet() {
  if (_one2OneSheetRegistered) return;
  try {
    const ActorsCollection = foundry?.documents?.collections?.Actors || window.Actors;
    if (!ActorsCollection?.registerSheet) return;

    const dataModelTypes = Object.keys(CONFIG.Actor?.dataModels || {});
    const rawTypes = dataModelTypes.length ? dataModelTypes : (game.documentTypes?.Actor || Actor.TYPES || []);
    const validTypes = rawTypes.filter(t => t && t !== "base");
    if (validTypes.length === 0) return; // Esperar al hook 'setup' cuando el sistema haya registrado sus tipos

    const ActorSheetV2Class = foundry?.applications?.sheets?.ActorSheetV2;
    const BaseActorSheetV1 = foundry?.appv1?.sheets?.ActorSheet || window.ActorSheet;

    if (ActorSheetV2Class) {
      class GumshoeOne2OneActorSheet extends ActorSheetV2Class {
        static DEFAULT_OPTIONS = {
          classes: ["o2o-actor-sheet-app"],
          position: {
            width: 1160,
            height: 860
          },
          window: {
            resizable: true
          }
        };

        get title() {
          return `${this.document?.name || "Leyla Khan"} — GUMSHOE One-2-One (NBA: Solo Ops)`;
        }

        async _renderHTML(_context, _options) {
          const wrapper = document.createElement("div");
          wrapper.className = "o2o-native-actor-sheet-mount";
          wrapper.dataset.actorId = this.document?.id || "";
          wrapper.innerHTML = buildAgentSheetInnerHTML(this.document);
          bindAgentSheetEvents(wrapper, this.document);
          return wrapper;
        }

        _replaceHTML(result, content, _options) {
          content.replaceChildren(result);
        }
      }

      ActorsCollection.registerSheet(MODULE_ID, GumshoeOne2OneActorSheet, {
        types: validTypes,
        label: "GUMSHOE One-2-One: Ficha de Agente (NBA: Solo Ops)",
        makeDefault: false
      });
      _one2OneSheetRegistered = true;
      console.log(`${MODULE_ID} | Hoja GumshoeOne2OneActorSheet (ApplicationV2) registrada para tipos:`, validTypes);
    } else if (BaseActorSheetV1) {
      class GumshoeOne2OneActorSheet extends BaseActorSheetV1 {
        static get defaultOptions() {
          return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["o2o-actor-sheet-app"],
            width: 1160,
            height: 860,
            resizable: true
          });
        }

        get title() {
          return `${this.actor?.name || "Leyla Khan"} — GUMSHOE One-2-One (NBA: Solo Ops)`;
        }

        async _renderInner() {
          const wrapper = document.createElement("div");
          wrapper.className = "o2o-native-actor-sheet-mount";
          wrapper.dataset.actorId = this.actor?.id || "";
          wrapper.innerHTML = buildAgentSheetInnerHTML(this.actor);
          bindAgentSheetEvents(wrapper, this.actor);
          return window.jQuery ? window.jQuery(wrapper) : wrapper;
        }
      }

      ActorsCollection.registerSheet(MODULE_ID, GumshoeOne2OneActorSheet, {
        types: validTypes,
        label: "GUMSHOE One-2-One: Ficha de Agente (NBA: Solo Ops)",
        makeDefault: false
      });
      _one2OneSheetRegistered = true;
      console.log(`${MODULE_ID} | Hoja GumshoeOne2OneActorSheet (AppV1) registrada para tipos:`, validTypes);
    }
  } catch (err) {
    console.warn(`${MODULE_ID} | Aviso al registrar ActorSheet adicional:`, err);
  }
}

/* ==========================================================================
   HOOKS DE FOUNDRY VTT (v12 - v14)
   ========================================================================== */
Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Inicializando Sistema Táctico de Cartas y Ficha GUMSHOE One-2-One`);
  registerOne2OneActorSheet();

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

  game.settings.register(MODULE_ID, "dockHidden", {
    name: "Bandeja de Mesa Oculta",
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
      One2OneState.dockHidden = !One2OneState.dockHidden;
      if (!One2OneState.dockHidden) One2OneState.dockMinimized = false;
      await game.settings.set(MODULE_ID, "dockHidden", One2OneState.dockHidden);
      renderTabletopDock();
    },
    openGMDrawer: () => openGMDrawerModal(),
    openCardEditor: () => openCardEditorModal(null),
    openChallengeRoller: () => openChallengeRollerModal(),
    openAgentSheet: (actor) => openAgentSheetModal(actor),
    importNeverSayDead: () => importNeverSayDeadPack()
  };
});

Hooks.once("setup", () => {
  registerOne2OneActorSheet();
});

Hooks.once("ready", async () => {
  registerOne2OneActorSheet();
  // Cargar preferencias visuales guardadas del usuario
  One2OneState.forceOriginalImageView = Boolean(game.settings.get(MODULE_ID, "forceOriginalImageView"));
  One2OneState.dockExpandedView = Boolean(game.settings.get(MODULE_ID, "dockExpandedView"));
  One2OneState.dockMinimized = Boolean(game.settings.get(MODULE_ID, "dockMinimized"));
  One2OneState.dockHidden = Boolean(game.settings.get(MODULE_ID, "dockHidden"));
  One2OneState.gmSortMode = game.settings.get(MODULE_ID, "gmSortMode") || "alpha_es";

  const stacks = await ensureCardStacks();
  // Si el mazo del GM está vacío al iniciar por primera vez, importamos automáticamente las 75 cartas de Never Say Dead
  if (game.user.isGM && stacks.deck && stacks.deck.cards.size === 0) {
    await importNeverSayDeadPack();
  }
  if (game.user.isGM) {
    await ensureLeylaKhanActor();
  }
  await ensureGuideJournalEntry(false);
  renderTabletopDock();

  game.socket.on(SOCKET_NAME, async (data) => {
    if (data?.action === "cardDealtToast") {
      showCardToast(data);
    } else if (data?.action === "openChallengeFromGM" && !game.user.isGM) {
      openChallengeRollerModal(data.preset);
      ui.notifications.info(`El GM te ha planteado un Reto: ${data.preset?.skillName || "Reto"}`);
    } else if (data?.action === "requestCreateLeylaActor" && game.user.isGM) {
      await ensureLeylaKhanActor();
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
    refreshAgentSheetViews();
  });
}

Hooks.on("updateActor", (actor) => {
  if (actor?.getFlag(MODULE_ID, "isOne2OneAgent") || actor?.getFlag(MODULE_ID, "isLeylaKhan")) {
    refreshAgentSheetViews(actor);
  }
});

// Botón "Ficha 1-2-1" en la barra de título de cualquier Actor en Foundry VTT
Hooks.on("getActorSheetHeaderButtons", (app, buttons) => {
  if (!app?.actor) return;
  buttons.unshift({
    label: "Ficha 1-2-1",
    class: "o2o-header-sheet-btn",
    icon: "fas fa-user-secret",
    onclick: () => openAgentSheetModal(app.actor)
  });
});

Hooks.on("getSceneControlButtons", (controls) => {
  const toggleDockAction = async () => {
    One2OneState.dockHidden = !One2OneState.dockHidden;
    if (!One2OneState.dockHidden) {
      One2OneState.dockMinimized = false;
      await game.settings.set(MODULE_ID, "dockMinimized", false);
    }
    await game.settings.set(MODULE_ID, "dockHidden", One2OneState.dockHidden);
    renderTabletopDock();
  };

  const dockTool = {
    name: "gumshoe-one2one-dock",
    title: "GUMSHOE One-2-One: Mostrar / Ocultar Mesa de Cartas",
    icon: "fas fa-layer-group",
    visible: true,
    button: true,
    onClick: toggleDockAction,
    onChange: toggleDockAction
  };

  const agentTool = {
    name: "gumshoe-one2one-agent",
    title: "GUMSHOE One-2-One: Abrir Ficha de Agente (Leyla Khan)",
    icon: "fas fa-user-secret",
    visible: true,
    button: true,
    onClick: () => openAgentSheetModal(),
    onChange: () => openAgentSheetModal()
  };

  const gmTool = {
    name: "gumshoe-one2one-gm",
    title: "GUMSHOE One-2-One: Abrir Cajón del GM",
    icon: "fas fa-briefcase",
    visible: game.user?.isGM,
    button: true,
    onClick: () => openGMDrawerModal(),
    onChange: () => openGMDrawerModal()
  };

  if (Array.isArray(controls)) {
    const tokenControl = controls.find(c => c.name === "token");
    if (tokenControl && Array.isArray(tokenControl.tools)) {
      tokenControl.tools.push(dockTool, agentTool);
      if (game.user?.isGM) tokenControl.tools.push(gmTool);
    }
  } else if (controls && typeof controls === "object") {
    const tokenControl = controls.tokens || controls.token;
    if (tokenControl?.tools) {
      if (Array.isArray(tokenControl.tools)) {
        tokenControl.tools.push(dockTool, agentTool);
        if (game.user?.isGM) tokenControl.tools.push(gmTool);
      } else {
        tokenControl.tools["gumshoe-one2one-dock"] = {
          ...dockTool,
          order: 97
        };
        tokenControl.tools["gumshoe-one2one-agent"] = {
          ...agentTool,
          order: 98
        };
        if (game.user?.isGM) {
          tokenControl.tools["gumshoe-one2one-gm"] = {
            ...gmTool,
            order: 99
          };
        }
      }
    }
  }
});
