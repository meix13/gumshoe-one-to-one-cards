# Guía de Prueba y Manual de Uso: Módulo GUMSHOE One-2-One (Never Say Dead)

Este documento contiene un guion paso a paso de **10 minutos** ambientado en el arranque de la aventura **Never Say Dead** (*Night's Black Agents: Solo Ops*) para probar todas las funciones del módulo **`gumshoe-one-to-one-cards`** con **1 Director de Juego (GM)** y **1 Jugador** (puedes abrir una ventana normal como GM y una ventana de incógnito como Jugador).

---

## 🎬 Paso 0: Activación y Verificación Inicial (1 min)

1. **Como GM:** Entra en `Configuración -> Gestionar Módulos`, activa **`GUMSHOE One-2-One: Sistema Táctico de Cartas y Retos (NBA: Solo Ops)`** y guarda los cambios.
2. Al recargar el mundo, fíjate en la **parte inferior de la pantalla**: verás la bandeja persistente **`Mesa GUMSHOE One-2-One`** (tanto en la pantalla del GM como en la del Jugador).
3. *(Opcional)* Si abres la pestaña **Mazos de Cartas (Card Stacks)** en la barra lateral derecha de Foundry VTT, comprobarás que el módulo ha creado automáticamente los 4 contenedores nativos:
   * `GUMSHOE 1-2-1: Reserva del GM` (*Deck* privado con las **75 cartas** de *Never Say Dead* preimportadas).
   * `GUMSHOE 1-2-1: Mesa del Agente` (*Hand* compartida en mesa con permisos para el jugador).
   * `GUMSHOE 1-2-1: Pila de Descartes` (*Pile* para ventajas gastadas y problemas resueltos).
   * `GUMSHOE 1-2-1: Archivo de Continuidad` (*Pile* para cartas con etiqueta `Continuity`).

---

## 🏥 Escena 1: Despertar en el Hospital de Budapest (Cajón GM y Entrega de Cartas)

*Contexto de ficción: Leyla Khan despierta en un hospital de Budapest magullada, sin equipo y con los médicos intentando sedarla.*

1. **Como GM:** En la bandeja inferior, pulsa el botón naranja **`Cajón GM`**.
   * Verás la pestaña **`Reserva del GM (75)`** con todas las cartas oficiales de la aventura.
2. **Prueba el buscador y los filtros:**
   * Escribe `PROBLEM 1` o `Hospital` en el buscador, o filtra por **`👎 Problemas (Problems)`**.
   * Pulsa el botón **`Entregar a Mesa`** en estas 3 cartas iniciales:
     * **`PROBLEM 1 — Apaleada (Beaten Up)`**
     * **`PROBLEM 2 — Con lo Puesto (Running on Empty)`**
     * **`PROBLEM 5 — Deberíamos Sedarla (We Should Sedate Her)`**
   * Ahora cambia el filtro a **`👍 Ventajas (Edges)`** y **`📇 Contactos (Contacts)`** y entrega:
     * **`EDGE 1 — La Iglesia (The Church)`** *(Pista inicial en su teléfono móvil)*.
     * **`EDGE 4 — Jeringuilla de Propofol`** *(Ventaja táctica para peleas)*.
     * **`CONTACT 1 — Magdalena Halmi, Enfermera`**.
3. **Qué comprobar en la pantalla del Jugador:**
   * Al entregar cada carta, al Jugador le aparece una **notificación flotante (Toast)** en la parte superior con la miniatura de la carta recibida.
   * Se publica automáticamente una tarjeta informativa en el **Chat**.
   * La carta aparece en tiempo real en su **Bandeja de Mesa inferior** (Ventajas y Contactos a la izquierda, Problemas a la derecha).

---

## 🔍 Escena 2: Inspección y Doble Modo Visual (Español CSS ⇄ Imagen Original PDF)

1. **Alternar Modo Visual en 1 clic:**
   * **Como Jugador (o GM):** En la cabecera de la bandeja inferior, pulsa el botón **`Ver Carta PDF`**.
   * Verás cómo todas las cartas en mesa cambian al instante para mostrar el **recorte original en inglés del PDF** con su maquetación clásica del libro.
   * Vuelve a pulsar **`Ver Español CSS`** para regresar al diseño oscuro traducido al español.
2. **Probar el Inspector / Zoom (`🔍`):**
   * Haz clic sobre el título o el botón de la **lupa (`🔍`)** de **`CONTACT 1 — Magdalena Halmi, Enfermera`**.
   * Se abrirá una ventana que muestra **arriba el recorte original de la carta del PDF** y **debajo toda la traducción al español**, incluyendo sus **Habilidades de Investigación** (*Diagnóstico, Farmacia, Consuelo*) y sus **Habilidades Generales** (*Conducir 1, Medicina 2*).
3. **Resolver un Problema narrativamente:**
   * Supongamos que la jugadora gasta un *Push de Consuelo (Reassurance)* con la enfermera para evitar que la seden.
   * **Como Jugador:** En la carta **`PROBLEM 5 — Deberíamos Sedarla`**, pulsa el botón **`✔ Resolver`**.
   * Comprueba que la carta se retira de la mesa, pasa a la pila de **Descartes** y publica en el Chat que el problema ha sido superado.

---

## 🎲 Escena 3: Huida y Reto Táctico Dado a Dado (Lanzador de Retos + Penalizadores + Gastar Ventaja)

*Vamos a probar un Reto aplicando penalizadores numéricos, penalizadores de dados y gasto de Ventajas a mitad de tirada.*

1. **Como GM:** Abre el **`Cajón GM`**, busca y entrega a la mesa:
   * **`PROBLEM 12 — Conmocionada (Shaken)`** *(penalizador numérico **`-1`** a pruebas de Frialdad)*.
   * **`PROBLEM 24 — Capturada (Captured)`** *(penalizador de reserva **`-1d6`** a retos físicos o manuales)*.
   * **`EDGE 6 — Impulso (Momentum)`** *(Ventaja de un solo uso que otorga **`+1d6`**)*.
2. **Como Jugador:** Pulsa el botón azul **`🎲 Lanzar Reto`** en la bandeja de mesa.
   * En **Habilidad / Acción del Reto**, escribe: `Atletismo - Escapar de las ataduras`.
   * En **Dados Base (d6)**, pon **`3`**.
   * Fíjate en la sección roja **Problemas en Mesa que afectan a este Reto**: aparecen marcados automáticamente los problemas con penalizador. Deja marcados **`PROBLEM 24 — Capturada (-1d6)`** y **`PROBLEM 12 — Conmocionada (-1)`**.
   * Comprueba cómo tu **Reserva Total** baja automáticamente de `3d6` a **`2d6`** (por el `-1d6` de *Capturada*) y tu **Modificador Numérico** marca **`-1`** (por *Conmocionada*).
3. **Probar la Tirada Progresiva (Dado a Dado):**
   * Pulsa **`Tirar Siguiente Dado (1d6)`**. Se lanza solo el primer dado (integrado con *Dice So Nice* si lo tienes activo) y ves la suma actual aplicando el `-1`.
   * **Decisión táctica a mitad de tirada:** En la sección verde **Ventajas / Contactos en Mesa**, pulsa el botón **`⚡ Gastar (+1d6)`** junto a **`EDGE 6 — Impulso`**.
   * Comprueba que:
     1. La carta *Impulso* se consume automáticamente de la mesa y pasa a Descartes.
     2. Tu reserva de dados en el reto añade un dado extra (`+1d6`).
   * **Regla de Push automático:** Si con los dados ya tirados alcanzas o superas `6` (*Advance*) y decides **dejar al menos 1 dado sin tirar**, el banner inferior se pondrá en verde indicando: **`ADVANCE + ¡GANAS 1 PUSH! (1 dado/s sin tirar)`**.
   * También puedes probar a marcar la casilla **`Aceptar Problema Extra (+1d6)`** para sumar un dado más a cambio de que el GM te entregue un Problema al final de la escena.
   * Pulsa **`Publicar Resultado del Reto en el Chat`** para enviar el desglose completo al chat de Foundry.

---

## 🎯 Escena 4: Marcas Interactivas (`Ticks`), Contramedidas (`Counter`) y Creación Rápida

1. **Probar Marcas (`Ticks`):**
   * **Como GM:** En el **`Cajón GM`**, busca **`PROBLEM 32 — En el Punto de Mira (The Drop)`** y entrégala a la mesa.
   * **Como Jugador:** Verás que la carta muestra la barra **`MARCAS (0/3)`** con 3 casillas interactivas y botones **`-`** / **`+`**.
   * Haz clic en **`+`** (o directamente sobre las casillas) hasta llegar a **`3/3`**: comprueba que se sincronizan en tiempo real entre Jugador y GM, y que al alcanzar el máximo (`3/3`) el módulo envía una alerta automática al Chat.
2. **Probar Contramedida (`Counter`):**
   * **Como GM:** Entrega a la mesa **`PROBLEM 45 — Asalto Psíquico (Psychic Assault)`** y la ventaja **`EDGE 11 — El Frasco de Agua de Rosas`**.
   * **Como Jugador:** En la carta **`El Frasco de Agua de Rosas`**, verás el botón especial naranja **`🛡️ Anular`**. Al pulsarlo, neutraliza y descarta automáticamente *Asalto Psíquico* de la mesa y publica la contramedida en el Chat.
3. **Probar Improvisación de Carta (`+ Crear Carta`):**
   * **Como GM:** Pulsa **`+ Crear Carta`** en la bandeja inferior.
   * Rellena un problema improvisado (por ejemplo: *"Neumático Pinchado"*, categoría *Trouble*, modificador `-1`, activando las casillas de *Ticks* y marcando *Multiplicar penalizador por nº de marcas*).
   * Pulsa **`Crear y Entregar a la Mesa Ahora`** para que aparezca directamente frente al jugador.

---

## 🏁 Escena 5: Cierre de la Operación (Evaluación de `DOOM` y `Continuity`)

1. **Como GM:** Antes de concluir la misión, entrega a la mesa estas cartas para probar el asistente de cierre:
   * **`PROBLEM 20 — Desangrándose (Bleeding Out)`** *(tiene etiquetas **`HERIDA GRAVE`** y **`DOOM`** — observarás que en la cabecera de la bandeja aparece una alerta roja parpadeante **`💀 1 DOOM`**)*.
   * **`PROBLEM 25 — Daños Colaterales`** y **`EDGE 8 — Agua Corriente`** *(ambas tienen etiqueta **`Continuidad`**)*.
2. **Como GM:** Abre el **`Cajón GM`** y pulsa el botón rojo **`🏁 Fin de Operación`** (arriba a la derecha).
3. **Qué comprobar:**
   * La mesa del agente queda limpia automáticamente.
   * En el **Chat** aparece el **Informe de Cierre de Operación**:
     * Dispara una **Alerta Crítica de DOOM / Desenlace Fatal** porque el agente terminó la operación con *Desangrándose* sin haber recibido atención médica.
     * Lista las cartas archivadas en **Continuidad** (*Daños Colaterales* y *Agua Corriente*) que persisten para la siguiente operación.
     * Lista el resto de cartas movidas a **Descartes**.
   * Si en el **`Cajón GM`** haces clic en la pestaña **`Continuidad`**, verás ahí guardadas las cartas de continuidad listas para devolverlas a la mesa al comenzar la siguiente aventura.

---

## 💻 Macros Rápidas (Opcional)

Si quieres crear botones en tu barra de macros de Foundry VTT, el módulo expone estas funciones globales de JavaScript:

```js
// Mostrar / Minimizar la bandeja de mesa
GumshoeOne2One.toggleDock();

// Abrir el Lanzador Táctico de Retos
GumshoeOne2One.openChallengeRoller();

// Abrir el Cajón del Director de Juego (Solo GM)
GumshoeOne2One.openGMDrawer();

// Abrir el creador rápido de cartas (Solo GM)
GumshoeOne2One.openCardEditor();
```
