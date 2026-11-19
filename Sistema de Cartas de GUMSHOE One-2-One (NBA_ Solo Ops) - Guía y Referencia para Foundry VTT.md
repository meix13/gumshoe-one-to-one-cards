# **Sistema de Cartas de GUMSHOE One-2-One (Night's Black Agents: Solo Ops)**

# **Guía de mecánica, ejemplos prácticos y referencia técnica para desarrollo de módulo en Foundry VTT**

---

# **1\. Filosofía del Sistema: Qué son (y qué no son) las cartas**

En GUMSHOE One-2-One (el motor diseñado para partidas en solitario como *Night's Black Agents: Solo Ops* y *Cthulhu Confidential*), las cartas **no forman un mazo aleatorio** del que el jugador roba al azar ni sustituyen a los dados. Los retos se siguen resolviendo mediante tiradas de dados de 6 caras.

En su lugar, las cartas funcionan como fichas visuales de estado, recursos tácticos y consecuencias narrativas. Reemplazan mecánicas tradicionales como los puntos de vida, la cordura o las reservas numéricas de habilidades:

* **Gestión por parte del GM:** El Director de Juego (GM) mantiene una reserva con las cartas preparadas para la aventura y puede improvisar nuevas cartas sobre la marcha.  
* **Mesa como interfaz visual:** A medida que el jugador investiga, supera retos o comete errores, el GM le entrega cartas que permanecen visibles frente a él en la mesa.  
* **Tensión acumulativa:** El estado visual de la mesa comunica la tensión de la partida de un vistazo. Una mesa cargada de Problemas y sin Ventajas indica que el agente se encuentra contra las cuerdas.

## **Relación con los Retos (Challenges)**

Cuando el agente se enfrenta a una situación de riesgo que involucra sus habilidades Generales, realiza un **Reto** tirando su reserva de d6 contra tres umbrales de resultado posibles:

| Resultado del Reto | Umbral Típico | Definición Mecánica | Consecuencia en Cartas |
| :---- | :---- | :---- | :---- |
| **Advance (Avance)** | 6+ | Éxito rotundo (*"sí, y además..."*). | Otorga una **carta de Ventaja (Edge)** o un recurso narrativo clave. Si se supera el umbral dejando dados sin tirar, el jugador también gana un *Push*. |
| **Hold (Mantener)** | 4–5 | Éxito estándar (*"sí"*). | Supera el obstáculo sin premios extra ni penalizaciones graves. |
| **Setback (Revés)** | 3 o menos | Fallo o éxito con coste grave (*"no"*, o *"sí, pero..."*). | El GM entrega una **carta de Problema (Problem)**. |

**Mecánica de dados extra:** Durante un Reto, el jugador puede aceptar un **Extra Problem** para ganar \+1 dado adicional antes de resolver la tirada, aceptando sufrir una carta de Problema adicional al terminar la escena.

---

# **2\. Anatomía y Tipos de Cartas**

## **A. Cartas de Ventaja (Edges)**

Representan recursos, golpes de suerte, contactos útiles, información procesable o superioridad táctica. Se identifican tradicionalmente con un icono de pulgar arriba.

En Night's Black Agents: Solo Ops, las Ventajas se dividen conceptualmente en dos categorías:

* Luck Edges (Ventajas de Suerte): Golpes de fortuna, casualidades favorables o oportunidades pasajeras.  
* Mastery Edges (Ventajas de Maestría): Fruto del entrenamiento del espía, preparación táctica, equipo especializado o deducciones brillantes.

Según su comportamiento mecánico, una Ventaja puede ser:

* **De un solo uso (Descartable):** El jugador la descarta en cualquier momento oportuno para sumar \+1 dado a un Reto, repetir una tirada o activar un beneficio narrativo concreto.  
* **Continua (Ongoing):** Permanece en mesa otorgando un modificador pasivo o permiso narrativo mientras se cumpla su condición (por ejemplo, tener un arma especial o un piso franco seguro).  
* **Contramedida (Counter):** Algunas Ventajas están diseñadas específicamente para neutralizar o eliminar una carta de Problema concreta (por ejemplo, descubrir la debilidad de un vampiro para cancelar su problema de "Invulnerable").

## **B. Cartas de Problema (Problems)**

Representan heridas, persecuciones, traumas o amenazas sobrenaturales. Se identifican con un icono de pulgar abajo. En GUMSHOE One-2-One, el agente no muere a mitad de la operación por recibir un solo golpe; en cambio, los Problemas acumulan penalizadores y complicaciones que ponen en riesgo el clímax o el desenlace de la misión.

En *Night's Black Agents: Solo Ops*, los Problemas pertenecen a tres categorías principales:

1. **Injury (Herida):** Daño físico, agotamiento, venenos o lesiones que penalizan pruebas físicas o de combate.  
2. **Heat (Presión / Alerta):** Atención policial, agencias de inteligencia buscándote, identidad quemada, controles fronterizos o recompensas por tu cabeza.  
3. **Shadow (Sombra):** Atención de la conspiración vampírica, influencia sobrenatural, vigilancia paranormal o terror psicológico.

*(Nota: En otros juegos del mismo motor como Cthulhu Confidential, las categorías cambian a Injury, Shock y Trouble/Mythos, pero la estructura mecánica es idéntica).*

## **Campos y Etiquetas Especiales de las Cartas**

Para modelar correctamente cualquier carta del sistema, es clave contemplar sus atributos especiales:

* **Efecto Mecánico:** Penalizador numérico (ej. \-1 a pruebas Físicas), pérdida de un dado, prohibición de hacer *Pushes* o disparador condicional.  
* **Marcas / Contadores (Ticks):** Algunas cartas no tienen un efecto estático, sino que acumulan marcas (*ticks*) a medida que ocurren eventos (ej. *"cada vez que falles una prueba de sigilo, añade una marca; al llegar a 3, ocurre X"*).  
* **Condición de Descarte (Clear / Discard):** Toda carta de Problema indica explícitamente qué debe hacer el jugador en la ficción para quitársela de encima (ej. *"Visita a un contacto médico"*, *"Cambia de identidad"*, *"Supera un Reto de Combate"*).  
* **Continuity (Continuidad):** Etiqueta que indica que, si el problema (o ventaja) no se resuelve antes de terminar el escenario actual, pasa a la siguiente aventura de la campaña.  
* **Doom / Fatal (Desenlace mortal):** Problemas graves que, si siguen en la mano del jugador al concluir la operación sin haber sido contrarrestados, provocan la muerte, captura o retirada definitiva del personaje.

---

# **3\. Ejemplos Prácticos de Cartas**

## **Ejemplos de Ventajas (Edges)**

### **Ejemplo 1: Ventaja de Suerte (Un solo uso)**

* **Título:** Salida de Emergencia  
* **Tipo:** Edge (Luck) \| **Duración:** Un solo uso  
* **Descripción:** Memorizaste los planos del edificio antes de entrar y sabes exactamente qué puerta da al callejón trasero.  
* **Efecto:** Descarta esta carta para sumar \+1 dado a cualquier Reto de Huida, Atletismo o Sigilo dentro de un entorno urbano, o para escapar automáticamente de una emboscada sin tirar dados.

### **Ejemplo 2: Ventaja de Maestría (Continua)**

* **Título:** Identidad Limpia en Schengen  
* **Tipo:** Edge (Mastery) \| **Duración:** Continua (Ongoing)  
* **Descripción:** Tu pasaporte suizo de respaldo está recién emitido y no figura en ninguna lista negra de Interpol.  
* **Efecto:** Mientras conserves esta carta, ignoras los penalizadores de cartas de tipo *Heat* al cruzar fronteras o registrarte en hoteles. Si sacas un *Setback* en una prueba de Trámites o Engaño ante autoridades, descarta esta carta.

### **Ejemplo 3: Ventaja Contramedida (Investigativa)**

* **Título:** Aleación de Plata y Tungsteno  
* **Tipo:** Edge (Mastery / Counter) \| **Duración:** Continua  
* **Descripción:** El informe forense del laboratorio clandestino confirma qué munición atraviesa la regeneración del objetivo.  
* **Efecto:** Anula inmediatamente el Problema "Invulnerable" del adversario vampírico durante el enfrentamiento final y añade \+1 dado a tu primer ataque contra él.

## **Ejemplos de Problemas (Problems)**

### **Ejemplo 4: Problema de Herida (Injury)**

* **Título:** Costillas Fisuradas  
* **Tipo:** Problem (Injury) \| **Etiquetas:** Ninguna  
* **Descripción:** El impacto contra el capó del coche te deja sin aire cada vez que haces un esfuerzo brusco.  
* **Efecto:** \-1 a todos los Retos Físicos y de Combate. No puedes realizar maniobras (*Stunts*) que requieran Atletismo.  
* **Cómo descartarla:** Dedica una escena de descanso a recibir atención médica (contacto médico o botiquín avanzado en un piso franco).

### **Ejemplo 5: Problema de Presión con Ticks y Continuidad (Heat)**

* **Título:** En el Radar de la Europol  
* **Tipo:** Problem (Heat) \| **Etiquetas:** Ticks (0/3), Continuity  
* **Descripción:** Una cámara de tráfico en el aeropuerto captó tu rostro y el sistema de reconocimiento facial ha saltado una alerta silenciosa.  
* **Efecto:** Empieza con 1 marca (*tick*). Añade 1 marca cada vez que uses tarjetas de crédito, cruces un aeropuerto o saques un *Setback* en una zona pública. Sufres una penalización a pruebas de Infiltración y Trato Social igual al número de marcas. Si llegas a 3 marcas, un equipo táctico te intercepta en la siguiente escena.  
* **Cómo descartarla:** Usa un contacto hacker o quema un piso franco para borrar tu rastro digital (elimina 1 marca por cada acción; al llegar a 0, descarta la carta). Si sigue activa al final de la aventura, se mantiene como *Continuity*.

### **Ejemplo 6: Problema Sobrenatural con Riesgo Fatal (Shadow)**

* **Título:** La Marca del Depredador  
* **Tipo:** Problem (Shadow) \| **Etiquetas:** Doom  
* **Descripción:** La sangre del vampiro rozó tu herida durante el forcejeo. Sientes su presencia en la nuca cada vez que cae la noche.  
* **Efecto:** \-1 a pruebas de Estabilidad y Sentir Peligro. El vampiro siempre sabe en qué ciudad te encuentras.  
* **Cómo descartarla:** Destruye al vampiro origen de la marca o sométete a una transfusión completa antes del amanecer. Si terminas la operación con esta carta en tu poder, caes bajo el control del vampiro (*Doom*).

---

# **4\. Ejemplo de Escena Completa en Juego**

**Situación inicial:** Leyla Khan intenta escapar de un almacén en el puerto de Barcelona mientras mercenarios vinculados a la conspiración la rodean. Tiene en su mesa la Ventaja "Salida de Emergencia" (+1 dado) y el Problema "Costillas Fisuradas" (-1 a pruebas físicas).

```
[MESA DEL JUGADOR]
├── Ventaja: "Salida de Emergencia" (+1 dado disponible)
└── Problema: "Costillas Fisuradas" (-1 a tiradas físicas)
```

1. **Declaración del Reto:** Leyla intenta saltar a una lancha amarrada y arrancar el motor bajo fuego enemigo. El GM plantea un Reto de *Atletismo/Conducción* con los siguientes umbrales:  
   * **Advance:** 6+  
   * **Hold:** 4–5  
   * **Setback:** 3 o menos  
2. **Evaluación de modificadores y cartas:** Leyla posee 2 dados base en la habilidad, pero sufre un penalizador de **\-1** al resultado final por su carta de *Costillas Fisuradas*.  
3. **Tirada progresiva y decisión táctica:**  
   * Leyla tira su primer d6 y obtiene un **2**. *(Aplicando el \-1 de sus costillas, el acumulado es 1: resultado crítico)*.  
   * Antes de tirar su último dado, decide **descartar su carta de Ventaja "Salida de Emergencia"** para añadir \+1 dado extra a la reserva (le quedan ahora 2 dados por tirar).  
   * Tira el segundo dado: obtiene un **3**. Total acumulado: \$2 \+ 3 \- 1 \= 4\$ *(alcanza la zona de Hold)*.  
   * Tira el tercer dado: obtiene un **3**. Total final: \$2 \+ 3 \+ 3 \- 1 \= 7\$ *(supera el umbral de 6+ de Advance)*.  
4. **Resolución y actualización de cartas:**  
   * **Ficción:** Leyla logra un **Advance**: arranca la lancha a máxima velocidad, esquiva las ráfagas y despista a los perseguidores en la bocana del puerto.  
   * **Actualización del estado:**  
     * La carta **"Salida de Emergencia"** se retira de la mesa y pasa a la pila de descartes.  
     * Como recompensa por lograr un *Advance*, el GM le entrega una nueva Ventaja: **"Rastro Perdido"** (los mercenarios asumen erróneamente que huyó hacia el sur).

**Análisis alternativo (Setback):** Si la tirada final hubiese sumado 2 o 3 (*Setback*), Leyla habría escapado igualmente —ya que la narrativa nunca se detiene por completo en GUMSHOE—, pero el GM le habría entregado un Problema de tipo Heat o Injury (por ejemplo, "Motor Dañado" o "Hemorragia").

---

# **5\. Arquitectura Recomendada para un Módulo en Foundry VTT**

## **A. Selección de Primitivas (Cards vs Item)**

Para desarrollar un módulo reutilizable que funcione en cualquier mundo (sea *Simple Worldbuilding*, *Custom System Builder* o el sistema oficial *Investigator*), la opción arquitectónica óptima es extender el **Document nativo `Cards` de Foundry VTT** mediante `flags.<module-id>`:

* **Ventaja de agnosticismo:** Es 100% independiente del sistema de juego (*system-agnostic*), posee soporte nativo para permisos de usuario, manejo de pilas (*Deck*, *Hand*, *Pile*) y métodos API optimizados para mover documentos entre contenedores (`pass()`, `deal()`, `recall()`).  
* **Mapeo de contenedores nativos:**  
  * **Deck (Mazo del GM):** Repositorio de cartas preparadas para la aventura (ocultas para los jugadores).  
  * **Hand (Mano del Jugador):** Las cartas activas "sobre la mesa" frente al agente.  
  * **Pile (Descarte / Archivo):** Cartas consumidas o problemas resueltos en la sesión.  
  * **Pile (Continuidad):** Cartas persistentes que pasan a siguientes escenarios.

## **B. Modelo de Datos Sugerido (JSON en `card.flags`)**

Aprovechando los campos nativos de `Card` (`name`, `description`, `faces`, `back`), la estructura interna dentro de `card.flags["one2one-cards"]` almacena las propiedades mecánicas avanzadas:n  
{  
"cardType": "problem",  
"category": "heat",  
"duration": "ongoing",  
"mechanicalEffect": "-1 a pruebas de Infiltración y Trato Social por cada marca.",  
"clearCondition": "Usa un contacto hacker o quema un piso franco para reducir marcas a 0.",  
"ticks": {  
"enabled": true,  
"current": 1,  
"max": 3  
},  
"tags": {  
"continuity": true,  
"doom": false,  
"counterTarget": null  
},  
"sceneRef": "Escena 04 \- Puerto de Barcelona"  
}

```

#### Esquema de Categorías
* **Si `cardType === "edge"`:** `"luck"`, `"mastery"`, `"counter"`, `"generic"`.
* **Si `cardType === "problem"`:** `"injury"`, `"heat"`, `"shadow"` *(ampliable mediante configuración para Cthulhu Confidential: `"shock"`, `"trouble"`, `"mythos"`)*.

### C. Componentes de Interfaz y Experiencia de Usuario (UX)
```

\+-----------------------------------------------------------------------+  
\| TABLETOP DOCK (HUD PERSISTENTE EN PANTALLA)                          \|  
\|                                                                       \|  
\|  \[ EDGES / VENTAJAS \]                   \[ PROBLEMS / PROBLEMAS \]      \|  
\|  \+-----------------------+              \+--------------------------+  \|  
\|  \| Identidad Limpia \[OK\] \|              \| Europol \[x\]\[ \]\[ \] (-1)   \|  \|  
\|  \| (Ongoing)             \|              \| Heat \| Contadores: 1/3   \|  \|  
\|  \+-----------------------+              \+--------------------------+  \|  
\+-----------------------------------------------------------------------+

```

1. **HUD / Bandeja de Mesa Persistente (Tabletop Dock):**
   Un panel acoplable al canvas visual donde se muestran las cartas activas de la `Hand` del jugador actual. Mantiene una separación clara entre **Ventajas** (borde azul/verde con icono de pulgar arriba) y **Problemas** (borde rojo para *Injury*, ámbar para *Heat*, púrpura para *Shadow* con icono de pulgar abajo).
2. **Interacciones Directas en la Carta:**
   * **Botón "Gastar / Resolver":** Mueve la carta de la `Hand` a la `Pile` de descarte y publica una tarjeta estilizada en el chat notificando la acción.
   * **Controles de Ticks (`-` / `+`):** Si `ticks.enabled` es `true`, renderiza casillas interactivas sobre la carta para incrementar o reducir las marcas con un clic.
   * **Modo Vista:** Alternancia entre vista reducida (título, categoría, marcas y efecto) y vista expandida (narrativa completa y condición de descarte).
3. **Panel de Control del Director de Juego (GM Drawer):**
   * Filtrado rápido por tipo (*Edge* / *Problem*), categoría o escena asignada.
   * Botón **"Entregar al Jugador"** (1 clic): Transfiere la carta del `Deck` a la `Hand` del jugador y dispara una notificación sonora y visual en pantalla.
   * **Creación Rápida (Quick-Create Modal):** Formulario emergente para que el GM improvise una carta personalizada directamente en la mano del jugador durante la partida.
4. **Asistente de Cierre de Escenario (End of Operation Wizard):**
   Flujo automatizado al finalizar la misión que evalúa las cartas activas:
   * Emite una alerta crítica si permanece alguna carta con `doom: true`.
   * Mueve automáticamente las cartas marcadas con `continuity: true` a la pila de Continuidad.
   * Arciva o descarta el resto de las cartas consumidas.

### D. Especificaciones Técnicas de Desarrollo (Foundry VTT v12–v14)

* **Framework de Interfaz:** Implementar el HUD, las hojas de carta y los modales de edición utilizando `HandlebarsApplicationMixin(ApplicationV2)` para asegurar compatibilidad y rendimiento a largo plazo.
* **Sincronización de Estado:** Escuchar los eventos del bus de Foundry (`createCard`, `updateCard`, `deleteCard`) filtrados por el ID de la `Cards` configurada como `Hand` del jugador. Esto permite re-renderizar la interfaz en tiempo real en todos los clientes conectados de forma síncrona sin necesidad de programar un sistema complejo de sockets.
* **Flexibilidad de Sistema:** Incluir un menú de configuración de mundo (*World Settings*) con presets predefinidos (*Night's Black Agents: Solo Ops*, *Cthulhu Confidential*, *Personalizado*) que permita personalizar los nombres, colores e iconos de las categorías de cartas sin requerir modificación del código base del módulo.
```

