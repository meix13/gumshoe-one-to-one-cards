/**
 * Baraja Oficial: No Grave for Traitors (75 cartas)
 * Traducidas al español y enlazadas con sus recortes originales (.webp)
 */

export const NO_GRAVE_FOR_TRAITORS_CARDS = [
  {
    "code": "PROBLEM 1",
    "name": "PROBLEM 1 — La Llamada Oscura (The Dark Call)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-01.webp",
    "description": "Sigues atormentada por los vampiros. Los sientes en el fondo de tu mente como voces que te llaman. La herida psíquica ha formado costra, pero no ha sanado.",
    "flags": {
      "code": "PROBLEM 1",
      "originalName": "The Dark Call",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL / SOMBRA: Necesitas más Poción de Agua de Rosas y, para ello, necesitas sangre de vampiro.",
      "clearCondition": "Consigue sangre de vampiro para preparar más Poción de Agua de Rosas.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 2",
    "name": "PROBLEM 2 — La Mejor Defensa (The Best Defense)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-02.webp",
    "description": "La conspiración —y especialmente Carlyle, el vampiro que intentó arrebatarte a Jovitzo— sigue dándote caza. Debes desestabilizarlos y golpear donde no lo esperen.",
    "flags": {
      "code": "PROBLEM 2",
      "originalName": "The Best Defense",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL: Si no has anulado esta carta al final de la operación, cámbiala por el Problema 5, «Eliminarla» (Eliminate Her).",
      "clearCondition": "Anúlala golpeando los intereses de la conspiración o desbaratando sus planes.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 3",
    "name": "PROBLEM 3 — Pesadillas (Bad Dreams)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-03.webp",
    "description": "Durante las últimas noches te atormenta un recuerdo de tu pasado fragmentado: irrumpir en una casa en Moscú, sangre en tus manos y un hombre huyendo aterrorizado mientras le das caza.",
    "flags": {
      "code": "PROBLEM 3",
      "originalName": "Bad Dreams",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL / SOMBRA: Para apaciguar tu culpa te has lanzado de lleno a la lucha contra tus antiguos amos.",
      "clearCondition": "Anúlala descubriendo la verdad sobre tus recuerdos de Moscú o reduciendo tu Sombra.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 4",
    "name": "PROBLEM 4 — Campo de Pruebas (Proving Ground)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-04.webp",
    "description": "Has establecido un contacto tentativo con tus antiguos jefes del MI6. Siguen desconfiando mucho de ti por cómo los dejaste, pero no te han cerrado la puerta del todo.",
    "flags": {
      "code": "PROBLEM 4",
      "originalName": "Proving Ground",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL: Si no consigues inteligencia útil para ellos al final de la operación, cambia este problema por el Problema 6, «Quemada por el MI6» (Burned by MI6).",
      "clearCondition": "Entrega información valiosa al MI6 antes de concluir la operación.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 5",
    "name": "PROBLEM 5 — Eliminarla (Eliminate Her)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-05.webp",
    "description": "Te has convertido en un problema para toda la conspiración, no solo para Carlyle y Jovitzo.",
    "flags": {
      "code": "PROBLEM 5",
      "originalName": "Eliminate Her",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Espera que envíen un escuadrón de ejecución tras de ti.",
      "clearCondition": "Elimina al comando de asesinos o borra tu rastro por completo.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": true,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 6",
    "name": "PROBLEM 6 — Quemada por el MI6 (Burned by MI6)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-06.webp",
    "description": "Eres una agente renegada a ojos tanto de la conspiración como del MI6. Estás completamente quemada.",
    "flags": {
      "code": "PROBLEM 6",
      "originalName": "Burned by MI6",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT), CONTINUIDAD: Mientras tengas esta carta, debes gastar 1 Push extra al tratar con miembros de la inteligencia británica o sus aliados, y tienes +2 de Alerta (Heat) cuando estés en el Reino Unido.",
      "clearCondition": "Limpia tu nombre ante el MI6 o presta un servicio extraordinario a la Corona.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 7",
    "name": "PROBLEM 7 — Descubierta (Spotted)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-07.webp",
    "description": "Quienquiera que esté siguiendo a Curtis te ha visto.",
    "flags": {
      "code": "PROBLEM 7",
      "originalName": "Spotted",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Los perseguidores de Francesca Curtis conocen tu presencia.",
      "clearCondition": "Despista o neutraliza a los perseguidores de Curtis.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": true,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 8",
    "name": "PROBLEM 8 — Simpatía por Curtis (Sympathy for Curtis)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-08.webp",
    "description": "En cierto modo se parece a ti: otra herramienta de la conspiración para ser usada y desechada por amos invisibles. Observarla despierta recuerdos de tu etapa como esclava de los vampiros.",
    "flags": {
      "code": "PROBLEM 8",
      "originalName": "Sympathy for Curtis",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Tal vez ella también merezca una oportunidad de liberarse.",
      "clearCondition": "Ayuda a Francesca Curtis a liberarse o resuelve su situación.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 9",
    "name": "PROBLEM 9 — Superviviente de Accidente (Car Crash Survivor)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-09.webp",
    "description": "Casi mueres cuando sacaron tu coche de la carretera.",
    "flags": {
      "code": "PROBLEM 9",
      "originalName": "Car Crash Survivor",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Cuenta como Herida y no puedes hacer Pushes Interpersonales hasta que te Tomes tu Tiempo (Take Time) para limpiarte y curarte.",
      "clearCondition": "Tómate tu Tiempo para limpiarte y atender tus contusiones.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 10",
    "name": "PROBLEM 10 — Necesito Transporte (Need a Ride)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-10.webp",
    "description": "No solo tu coche está en el fondo del acantilado, sino que no quieres quedarte por aquí respondiendo preguntas incómodas de la policía.",
    "flags": {
      "code": "PROBLEM 10",
      "originalName": "Need a Ride",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Estás a pie y la policía se dirige al lugar del siniestro.",
      "clearCondition": "Consigue otro vehículo y aléjate de la zona del accidente.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 11",
    "name": "PROBLEM 11 — Colada en la Fiesta (Party Crasher)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-11.webp",
    "description": "Te has infiltrado en la fiesta de la villa, así que debes mantenerte oculta.",
    "flags": {
      "code": "PROBLEM 11",
      "originalName": "Party Crasher",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Si haces algo que llame la atención tendrás problemas. Puede contar como Problema de Alerta (Heat) a discreción del GM.",
      "clearCondition": "Sal de la fiesta sin ser descubierta o supera la escena de infiltración.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": true,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 12A",
    "name": "PROBLEM 12A — Pelea en el Baño (Bathroom Brawl)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-12a.webp",
    "description": "Tuviste que mantener las cosas en silencio, y eso significó nada de armas de fuego. Mucha porcelana rota y sangre.",
    "flags": {
      "code": "PROBLEM 12A",
      "originalName": "Bathroom Brawl",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY): Has sufrido cortes y golpes severos peleando cuerpo a cuerpo en el baño.",
      "clearCondition": "Recibe Atención Médica (Medical Attention).",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": true,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 12B",
    "name": "PROBLEM 12B — De Lado a Lado (Through and Through)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-12b.webp",
    "description": "Te han disparado. Puedes sobrevivir a esto, pero estás perdiendo mucha sangre.",
    "flags": {
      "code": "PROBLEM 12B",
      "originalName": "Through and Through",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY): Necesitas Atención Médica urgentemente.",
      "clearCondition": "Recibe Atención Médica (Medical Attention).",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": true,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 13",
    "name": "PROBLEM 13 — Punto Rojo (Red Dot)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-13.webp",
    "description": "Hay un francotirador ahí fuera intentando fijar el blanco sobre ti. Has visto el punto láser rojo.",
    "flags": {
      "code": "PROBLEM 13",
      "originalName": "Red Dot",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Estás bajo el fuego de un francotirador.",
      "clearCondition": "Ponte a cubierto, escapa de la línea de tiro o neutraliza al tirador.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 14",
    "name": "PROBLEM 14 — Abatida (Down)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-14.webp",
    "description": "Te golpearon con tanta fuerza que perdiste el conocimiento. Cuando despiertas, estás en manos de la banda de Calatrava.",
    "flags": {
      "code": "PROBLEM 14",
      "originalName": "Down",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY): Has caído inconsciente y has sido capturada.",
      "clearCondition": "Escapa de la banda de Calatrava y recibe Atención Médica.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": true,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 15",
    "name": "PROBLEM 15 — Cabo Suelto (Loose End)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-15.webp",
    "description": "Los asesinos que atacaron la fiesta de Calatrava te quieren muerta.",
    "flags": {
      "code": "PROBLEM 15",
      "originalName": "Loose End",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Los sicarios van tras de ti para no dejar testigos.",
      "clearCondition": "Anúlala despistándolos y borrando tu rastro.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": true,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 16",
    "name": "PROBLEM 16 — Susurros en el Viento (Whispers on the Wind)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-16.webp",
    "description": "La noche después de la fiesta sientes de pronto un escalofrío hasta los huesos, como si alguien caminara sobre tu tumba.",
    "flags": {
      "code": "PROBLEM 16",
      "originalName": "Whispers on the Wind",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): La próxima vez que duermas, soñarás con manos pálidas que te estrangulan.",
      "clearCondition": "Reduce tu Sombra o descansa bajo protección.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 17",
    "name": "PROBLEM 17 — La Situación de Luciano (The Luciano Situation)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-17.webp",
    "description": "Escapaste de las garras de Luciano Calatrava haciendo demasiado ruido.",
    "flags": {
      "code": "PROBLEM 17",
      "originalName": "The Luciano Situation",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Describe cómo escapaste de Luciano Calatrava y cómo esa huida aumentó tu puntuación de Alerta (Heat).",
      "clearCondition": "Reduce tu Alerta o abandona el país.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 18",
    "name": "PROBLEM 18 — Sobre Aviso (Forewarned)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-18.webp",
    "description": "La conspiración en Londres sabe que vas hacia allí. Espera problemas.",
    "flags": {
      "code": "PROBLEM 18",
      "originalName": "Forewarned",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Tus enemigos en Londres están prevenidos de tu llegada.",
      "clearCondition": "Anúlala asegurándote de entrar en Londres sin ser detectada.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": true,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 19",
    "name": "PROBLEM 19 — Adzeh, el Devorador de Sangre (Adzeh, the Blood-Eater)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-19.webp",
    "description": "El monstruo probó tu sangre.",
    "flags": {
      "code": "PROBLEM 19",
      "originalName": "Adzeh, the Blood-Eater",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW), CONTINUIDAD: No puedes anular este Problema de Sombra hasta que mates al adzeh.",
      "clearCondition": "Mata al adzeh.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 20",
    "name": "PROBLEM 20 — El Sabueso de los Hollister (The Hound of the Hollisters)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-20.webp",
    "description": "Esa criatura canina puede oler que te acercas.",
    "flags": {
      "code": "PROBLEM 20",
      "originalName": "The Hound of the Hollisters",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): El sabueso sobrenatural detecta tu rastro.",
      "clearCondition": "Despista su olfato o abate a la bestia.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 21",
    "name": "PROBLEM 21 — En el Punto de Mira de la Conspiración (Targeted by the Conspiracy)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-21.webp",
    "description": "Debes asumir que Hollister informará a sus amos vampiros de vuestro encuentro.",
    "flags": {
      "code": "PROBLEM 21",
      "originalName": "Targeted by the Conspiracy",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Si aún conservas esta carta al final de la siguiente escena, se convierte en un Problema tanto de Alerta (Heat) como de Sombra (Shadow).",
      "clearCondition": "Anúlala describiendo cómo cubres tus huellas tras la reunión.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 22",
    "name": "PROBLEM 22 — Alerta en Londres (London Heat)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-22.webp",
    "description": "La policía ha sido informada de un altercado en las oficinas del respetado consultor político Anthony Hollister.",
    "flags": {
      "code": "PROBLEM 22",
      "originalName": "London Heat",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): La policía metropolitana investiga el incidente en las oficinas de Hollister.",
      "clearCondition": "Enfría tu rastro policial en Londres.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 23",
    "name": "PROBLEM 23 — Tiene tu Olor (It’s Got Your Scent)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-23.webp",
    "description": "Mientras ese perro siga vivo, continuará dándote caza.",
    "flags": {
      "code": "PROBLEM 23",
      "originalName": "It’s Got Your Scent",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD, SOMBRA (SHADOW): La bestia te persigue implacablemente.",
      "clearCondition": "Anúlala sacrificando a un Contacto para saciar su hambre, o matando al sabueso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 24",
    "name": "PROBLEM 24 — Sobreexpuesta (Overexposed)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-24.webp",
    "description": "Jugaste demasiado fuerte tus cartas en Londres, y los esbirros de Carlyle están olfateando las calles en tu busca.",
    "flags": {
      "code": "PROBLEM 24",
      "originalName": "Overexposed",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Los sirvientes de Carlyle te buscan por todo Londres.",
      "clearCondition": "Cambia de refugio o elimina a los sabuesos de Carlyle.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 25",
    "name": "PROBLEM 25 — Al Borde del Abismo (Close to the Edge)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-25.webp",
    "description": "Te enfrentaste a un Renfield. Definitivamente tienes varias costillas fisuradas y sientes como si te hubiera atropellado un elefante.",
    "flags": {
      "code": "PROBLEM 25",
      "originalName": "Close to the Edge",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY): Daño severo tras pelear contra un Renfield.",
      "clearCondition": "Recibe Atención Médica (Medical Attention).",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": true,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 26",
    "name": "PROBLEM 26 — Llamando al Inspector Sands (Calling Inspector Sands)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-26.webp",
    "description": "Londres tiene más cámaras de CCTV que cualquier otro lugar del mundo; definitivamente te han captado.",
    "flags": {
      "code": "PROBLEM 26",
      "originalName": "Calling Inspector Sands",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Las cámaras de vigilancia de Londres han registrado tus movimientos.",
      "clearCondition": "Borra las grabaciones o sal del radar de vigilancia.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 27",
    "name": "PROBLEM 27 — Bajo Vigilancia (Under Surveillance)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-27.webp",
    "description": "Tienes un hormigueo en la nuca; alguien te está observando.",
    "flags": {
      "code": "PROBLEM 27",
      "originalName": "Under Surveillance",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Tienes vigilancia encima.",
      "clearCondition": "Anúlala Tomándote tu Tiempo (Take Time) para despistar a quienes te vigilan.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": true,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 28",
    "name": "PROBLEM 28 — Acrobacia Peligrosa (Stuntwork)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-28.webp",
    "description": "Alcanzaste la furgoneta, pero como el perro que atrapa a un coche, poco pudiste hacer para detenerla antes de que te estamparan contra un muro.",
    "flags": {
      "code": "PROBLEM 28",
      "originalName": "Stuntwork",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Magulladuras y golpes por el impacto contra el vehículo.",
      "clearCondition": "Tómate tu Tiempo para recuperarte.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 29",
    "name": "PROBLEM 29 — Dada por Muerta (Left for Dead)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-29.webp",
    "description": "Te das cuenta de que es una trampa un instante antes de que el tirador oculto dispare. Te han dado.",
    "flags": {
      "code": "PROBLEM 29",
      "originalName": "Left for Dead",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY) / DOOM: Debes salir de aquí y encontrar Atención Médica de inmediato. Si no lo haces, morirás.",
      "clearCondition": "Consigue Atención Médica inmediatamente.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": true,
        "seriousInjury": true,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 30",
    "name": "PROBLEM 30 — Allanamiento en Cornet’s (Break-In at Cornet’s)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-30.webp",
    "description": "Has irrumpido en la casa de subastas Cornet’s.",
    "flags": {
      "code": "PROBLEM 30",
      "originalName": "Break-In at Cornet’s",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Riesgo de investigación policial tras el allanamiento.",
      "clearCondition": "Puedes descartar este Problema de Alerta si no dejas rastro de tu presencia y no te llevas nada de la casa de subastas.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 31",
    "name": "PROBLEM 31 — Vista por Seguridad (Spotted by Security)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-31.webp",
    "description": "Tu salida apresurada de Cornet’s quedó grabada en cámara.",
    "flags": {
      "code": "PROBLEM 31",
      "originalName": "Spotted by Security",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): La seguridad de Cornet’s tiene imágenes de tu huida.",
      "clearCondition": "Puedes descartar este Problema de Alerta si permites que atrapen a Carmen Vidraru mientras huyes.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 32",
    "name": "PROBLEM 32 — Escrutinio de Seguridad (Security Scrutiny)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-32.webp",
    "description": "Los servicios de seguridad en Londres te están buscando.",
    "flags": {
      "code": "PROBLEM 32",
      "originalName": "Security Scrutiny",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Mientras tengas este Problema, no puedes descartar ni anular otros Problemas de Alerta (Heat).",
      "clearCondition": "Descártala cuando abandones el Reino Unido.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 33",
    "name": "PROBLEM 33 — Porras Policiales (Nightsticks)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-33.webp",
    "description": "Darle una patada en el pecho a un agente de policía hace que te arresten, además de costarte unos cuantos moratones.",
    "flags": {
      "code": "PROBLEM 33",
      "originalName": "Nightsticks",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Contusiones por porras policiales.",
      "clearCondition": "Puedes gastar un Push de Jerga Policial (Cop Talk) o Encanto (Charm) para anular esta carta.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 34",
    "name": "PROBLEM 34 — Magullada por Fieras (Mauled)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-34.webp",
    "description": "Para cuando despiertas en la celda, alguien ya ha vendado las feroces mordeduras de perro en tus antebrazos, pero todo te duele y estás mareada por la pérdida de sangre.",
    "flags": {
      "code": "PROBLEM 34",
      "originalName": "Mauled",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Mordeduras profundas en los antebrazos.",
      "clearCondition": "Descansa o recibe atención médica adicional.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 35",
    "name": "PROBLEM 35 — Arañada y Desollada (Clawed and Scraped)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-35.webp",
    "description": "Tienes docenas de arañazos y cortes visibles por el ataque del sabueso.",
    "flags": {
      "code": "PROBLEM 35",
      "originalName": "Clawed and Scraped",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): No puedes hacer ningún Push Interpersonal hasta que te Tomes tu Tiempo (Take Time) para recuperarte.",
      "clearCondition": "Tómate tu Tiempo para curar y ocultar las heridas.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 36",
    "name": "PROBLEM 36 — Sigue Suelto (Still At Large)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-36.webp",
    "description": "El monstruoso sabueso del vampiro Carlyle merodea por las calles de Londres, y la bestia tiene tu olor.",
    "flags": {
      "code": "PROBLEM 36",
      "originalName": "Still At Large",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW), CONTINUIDAD: Este Problema de Sombra solo se aplica en Londres.",
      "clearCondition": "Anúlala matando a Carlyle o al sabueso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 37",
    "name": "PROBLEM 37 — Herida en la Cabeza (Head Wound)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-37.webp",
    "description": "Te golpearon lo bastante fuerte como para dejarte inconsciente y te sangra el cuero cabelludo. Todo te duele.",
    "flags": {
      "code": "PROBLEM 37",
      "originalName": "Head Wound",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Conmoción y brecha en la cabeza.",
      "clearCondition": "Recibe curas o descansa.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 38",
    "name": "PROBLEM 38 — La Llamada del Conde (The Count’s Call)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-38.webp",
    "description": "Carmen está bajo la influencia de Kobori, igual que tú estuviste controlada por Jovitzo. Vuelves a sentir esa fuerza psíquica al borde de un terrible precipicio.",
    "flags": {
      "code": "PROBLEM 38",
      "originalName": "The Count’s Call",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Te cuesta todo tu valor dar un paso atrás y no caer al abismo.",
      "clearCondition": "Resiste el influjo de Kobori o acaba con el Conde.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 39",
    "name": "PROBLEM 39 — Viejos Amigos (Old Friends)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-39.webp",
    "description": "Algunos de los otros sirvientes de Jovitzo saben que sigues viva y vuelven a seguir tu rastro.",
    "flags": {
      "code": "PROBLEM 39",
      "originalName": "Old Friends",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Mientras tengas esta carta, sufres un penalizador de -2 a todas las pruebas de Red de Contactos (Network).",
      "clearCondition": "Anúlala convenciéndoles de que sigues vinculada a la conspiración, o cuando hayas adquirido seis nuevas cartas de Contacto.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 40",
    "name": "PROBLEM 40 — Cautivada (Enthralled)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-40.webp",
    "description": "Estás al menos parcialmente bajo el dominio mental del conde vampiro Kobori.",
    "flags": {
      "code": "PROBLEM 40",
      "originalName": "Enthralled",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Kobori tiene garras psíquicas sobre tu mente.",
      "clearCondition": "Anúlala matando al Conde Kobori.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 41",
    "name": "PROBLEM 41 — Tu Antiguo Amo (Your Former Master)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-41.webp",
    "description": "Sientes, en el límite de tu percepción, a tu antiguo amo Jovitzo rugiendo de ira mientras su primo Kobori intenta reclamar «su» posesión.",
    "flags": {
      "code": "PROBLEM 41",
      "originalName": "Your Former Master",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Jovitzo sigue creyendo que le perteneces. Esta carta cuenta como +2 de Sombra (Shadow) en cualquier situación que involucre a Jovitzo.",
      "clearCondition": "Destruye a Jovitzo o corta definitivamente su vínculo con tu alma.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 42",
    "name": "PROBLEM 42 — Desarmada (Disarmed)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-42.webp",
    "description": "Tu arma está en algún lugar en el fondo de un barranco en Transilvania, o en el Infierno.",
    "flags": {
      "code": "PROBLEM 42",
      "originalName": "Disarmed",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "No puedes usar dados de Disparo (Shooting) ni Preparación (Preparedness) mientras tengas esta carta.",
      "clearCondition": "Anúlala consiguiendo un arma de repuesto.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 43",
    "name": "PROBLEM 43 — La Voluntad de Drácula (The Will of Dracula)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-43.webp",
    "description": "El mismísimo Drácula ha sentido tu presencia en su tierra.",
    "flags": {
      "code": "PROBLEM 43",
      "originalName": "The Will of Dracula",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Mientras tengas esta carta, sufres automáticamente un Revés (Setback) en cualquier enfrentamiento contra Kobori.",
      "clearCondition": "Anúlala descartando el Crucifijo de Sykoran o reduciendo tu Frialdad (Cool) en 1 permanentemente.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 44",
    "name": "PROBLEM 44 — Mano Quemada (Burnt Hand)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-44.webp",
    "description": "Volcaste el brasero presa del horror, quemándote gravemente la mano.",
    "flags": {
      "code": "PROBLEM 44",
      "originalName": "Burnt Hand",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Quemadura severa en la mano.",
      "clearCondition": "Trata la quemadura con primeros auxilios o descanso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 45",
    "name": "PROBLEM 45 — Herida de Bala (Gunshot)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-45.webp",
    "description": "Uno de los guardias te rozó con una bala y ahora la sangre te corre por el brazo. Las piedras del castillo tragan la sangre con avidez.",
    "flags": {
      "code": "PROBLEM 45",
      "originalName": "Gunshot",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Impacto de bala en el brazo.",
      "clearCondition": "Venda la herida o recibe atención médica.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 46",
    "name": "PROBLEM 46 — Encañonada (Held at Gunpoint)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-46.webp",
    "description": "Tu captor te apunta directamente con un arma y disparará si haces el más mínimo movimiento agresivo. No les importa si vives o mueres: solo quieren tu sangre.",
    "flags": {
      "code": "PROBLEM 46",
      "originalName": "Held at Gunpoint",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Cualquier movimiento brusco provocará un disparo inmediato.",
      "clearCondition": "Descarta esta carta si encuentras una forma ingeniosa de desarmar a tu captor.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 47",
    "name": "PROBLEM 47 — El Destornillador (The Screwdriver)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-47.webp",
    "description": "Uno de los matones de Hollister hizo honor a su apodo y ahora tienes un destornillador clavado en el estómago.",
    "flags": {
      "code": "PROBLEM 47",
      "originalName": "The Screwdriver",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY) / DOOM: Cada vez que tires un dado de una Habilidad General, pon 1 marca en esta carta. Si superas las 6 marcas antes de recibir Atención Médica, mueres.",
      "clearCondition": "Recibe Atención Médica urgentemente antes de llegar a 6 marcas.",
      "ticks": {
        "enabled": true,
        "current": 0,
        "max": 6,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": true,
        "seriousInjury": true,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 48",
    "name": "PROBLEM 48 — La Maldición Mortal de Kobori (Kobori’s Death Curse)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-48.webp",
    "description": "El vampiro te maldijo con su último aliento.",
    "flags": {
      "code": "PROBLEM 48",
      "originalName": "Kobori’s Death Curse",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Hasta que encuentres una forma de anular esta carta, corres el peligro de deslizarte fuera de la realidad y regresar a la dimensión sombría que contiene su castillo.",
      "clearCondition": "Encuentra un ritual o contramedida ocultista para romper la maldición de Kobori.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 49",
    "name": "PROBLEM 49 — Garras del Vampiro (Claws of the Vampire)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-49.webp",
    "description": "Kobori te desgarró la cara y el cuello, y esas heridas no sanarán rápido. Llevarás las cicatrices el resto de tu vida.",
    "flags": {
      "code": "PROBLEM 49",
      "originalName": "Claws of the Vampire",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY), CONTINUIDAD: Heridas profundas causadas por las garras de Kobori.",
      "clearCondition": "Recibe tratamiento médico y tiempo de recuperación.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "PROBLEM 50",
    "name": "PROBLEM 50 — Huésped de Kobori (Kobori’s Guest)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/problem-50.webp",
    "description": "Has estado atrapada en un castillo de pesadilla durante días. Afuera no hay más que un vacío aullante muy por debajo de cero.",
    "flags": {
      "code": "PROBLEM 50",
      "originalName": "Kobori’s Guest",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Sufres un penalizador de -2 en tus próximas 3 tiradas/retos; después, descarta esta carta.",
      "clearCondition": "Se descarta automáticamente tras aplicar el -2 en tres tiradas (3 marcas).",
      "ticks": {
        "enabled": true,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 1",
    "name": "EDGE 1 — ¿Quiénes Son Estos Tipos? (Who Are These Guys?)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-01.webp",
    "description": "Has detectado a quienes siguen a Curtis: cuatro hombres, en su mayoría marroquíes.",
    "flags": {
      "code": "EDGE 1",
      "originalName": "Who Are These Guys?",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Puedes descartar esta carta y usar un Contacto o un Push de Criminología para identificarlos, o descartarla por +1d6 en cualquier enfrentamiento contra ellos.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 2",
    "name": "EDGE 2 — Invitación a la Fiesta (Party Invitation)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-02.webp",
    "description": "Francesca Curtis te ha invitado a acompañarla a una fiesta privada.",
    "flags": {
      "code": "EDGE 2",
      "originalName": "Party Invitation",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para obtener 1 Push gratis o +1d6 en cualquier tirada durante la fiesta.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 3",
    "name": "EDGE 3 — En Guardia (En Garde)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-03.webp",
    "description": "Sientes que se avecinan problemas.",
    "flags": {
      "code": "EDGE 3",
      "originalName": "En Garde",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en cualquier enfrentamiento contra los misteriosos intrusos.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 4",
    "name": "EDGE 4 — En Deuda Contigo (Indebted)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-04.webp",
    "description": "Salvaste a tu objetivo de los asesinos, y ese es un favor con el que puedes contar en el futuro.",
    "flags": {
      "code": "EDGE 4",
      "originalName": "Indebted",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Descártala para obtener 1 Push gratis al tratar con esa persona.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 5",
    "name": "EDGE 5 — Atrayendo el Fuego (Drawing Fire)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-05.webp",
    "description": "No había forma de que sobrevivieras a esa lluvia de fuego de francotirador sin recibir un impacto y, sin embargo, aquí estás, ilesa. La suerte está contigo esta noche.",
    "flags": {
      "code": "EDGE 5",
      "originalName": "Drawing Fire",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para Anular (Counter) cualquier Problema de Alerta (Heat) o Sombra (Shadow).",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": "Heat"
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 6",
    "name": "EDGE 6 — El Necrófono (The Necrophone)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-06.webp",
    "description": "Es un frasco lleno de tierra de cementerio conectado a un teléfono antiguo, y Calatrava lo trataba como si fuera inmensamente valioso.",
    "flags": {
      "code": "EDGE 6",
      "originalName": "The Necrophone",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Artefacto ocultista. Ganas 1 Problema de Sombra (Shadow) cada vez que lo actives.",
      "clearCondition": "Continua.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 7",
    "name": "EDGE 7 — Voluntad de Hierro (Iron Will)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-07.webp",
    "description": "Has mirado a la muerte directamente a sus millones de ojos multifacéticos y no has parpadeado.",
    "flags": {
      "code": "EDGE 7",
      "originalName": "Iron Will",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para ganar +2 dados (+2d6) de Frialdad (Cool) en una tirada.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 8",
    "name": "EDGE 8 — Recuerdos de Hollister (Memories of Hollister)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-08.webp",
    "description": "Reconoces su rostro; nunca trataste con él directamente, pero sabes que trabaja para la conspiración, justo por debajo de un Slugeri: un sirviente de confianza de un vampiro.",
    "flags": {
      "code": "EDGE 8",
      "originalName": "Memories of Hollister",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en Detectar Peligro (Sense Trouble), o por 1 Push Interpersonal gratis al tratar con Hollister.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 9",
    "name": "EDGE 9 — Una Llamada Privada (A Private Call)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-09.webp",
    "description": "Viste a Hollister hacer una llamada y estás segura de que no quería que sus amos vampiros la escucharan.",
    "flags": {
      "code": "EDGE 9",
      "originalName": "A Private Call",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Mencionarlo te da ventaja: puedes descartar esta carta por 1 Push Interpersonal gratis al tratar con Hollister.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 10",
    "name": "EDGE 10 — La Ayuda de Hollister (Hollister’s Aid)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-10.webp",
    "description": "A cambio de que retrocedas, Hollister se ha ofrecido a ayudarte en el futuro y evitará que la conspiración te encuentre hasta entonces.",
    "flags": {
      "code": "EDGE 10",
      "originalName": "Hollister’s Aid",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Mientras tengas esta carta, puedes reducir tus medidores de Alerta (Heat) y Sombra (Shadow) en 1 cada uno. Descártala si Hollister muere o al final de la operación.",
      "clearCondition": "Continua durante la operación.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 11",
    "name": "EDGE 11 — El Enemigo de mi Enemigo (Enemy of my Enemy)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-11.webp",
    "description": "Has delatado a Hollister ante Carlyle. Ahora veremos si el vampiro muerde el anzuelo...",
    "flags": {
      "code": "EDGE 11",
      "originalName": "Enemy of my Enemy",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Ventaja táctica en la intriga entre Hollister y Carlyle.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 12",
    "name": "EDGE 12 — Desafiar al León (Bearded the Lion)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-12.webp",
    "description": "Puede que no hayas logrado todo lo que te proponías, pero has causado suficiente caos a tu paso como para meter en problemas a tus enemigos.",
    "flags": {
      "code": "EDGE 12",
      "originalName": "Bearded the Lion",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para Anular (Counter) cualquier Problema de Alerta (Heat) o Sombra (Shadow).",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": "Shadow"
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 13",
    "name": "EDGE 13 — La Otra Mujer (The Other Woman)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-13.webp",
    "description": "Detectaste a alguien fuera de lugar en la subasta que merece una investigación más a fondo.",
    "flags": {
      "code": "EDGE 13",
      "originalName": "The Other Woman",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Mientras tengas esta carta, obtienes +1d6 cuando uses Vigilancia (Surveillance) o Infiltración (Infiltration) para observarla.",
      "clearCondition": "Continua.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 14",
    "name": "EDGE 14 — Kastantev Te Debe Una (Kastantev Owes You)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-14.webp",
    "description": "Salvaste la vida de Nestor Kastantev.",
    "flags": {
      "code": "EDGE 14",
      "originalName": "Kastantev Owes You",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Descártala por 1 Push Interpersonal al tratar con él, o por +1d6 en una prueba de Red de Contactos (Network) en Europa.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 15",
    "name": "EDGE 15 — Carmen Te Debe Una (Carmen Owes You)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-15.webp",
    "description": "Salvaste la vida de Carmen Vidraru.",
    "flags": {
      "code": "EDGE 15",
      "originalName": "Carmen Owes You",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Descártala por 1 Push Interpersonal al tratar con ella, o para ganarla permanentemente como Contacto.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 16",
    "name": "EDGE 16 — Muerte por Poder (Death by Proxy)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-16.webp",
    "description": "El sabueso pálido era más que un sirviente del vampiro: era una extensión de Carlyle. Parte de su espíritu impío estaba en el animal cuando lo mataste.",
    "flags": {
      "code": "EDGE 16",
      "originalName": "Death by Proxy",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Descártala para anular cualquier Problema de Vampiro conectado con Carlyle.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": "Carlyle"
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 17",
    "name": "EDGE 17 — Parada y Respuesta (Parry and Riposte)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-17.webp",
    "description": "El intento del vampiro por detenerte fracasó y sabes que estás cerca.",
    "flags": {
      "code": "EDGE 17",
      "originalName": "Parry and Riposte",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para anular cualquier Problema de Sombra conectado con Kobori, o por +1d6 en cualquier enfrentamiento en el castillo de Kobori.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": "Kobori"
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 18",
    "name": "EDGE 18 — El Rostro de Drácula (The Face of Dracula)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-18.webp",
    "description": "Has visto el rostro del mismísimo Conde, el padre de los vampiros. Sabes que tiene que morir.",
    "flags": {
      "code": "EDGE 18",
      "originalName": "The Face of Dracula",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Una vez por partida, puedes recurrir a esta determinación para ganar +1 en Frialdad (Cool). Descártala si alguna vez abandonas la misión de matar a Drácula.",
      "clearCondition": "Continua.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 19",
    "name": "EDGE 19 — Tesoro Mal Habido (Ill-Gotten Treasure)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-19.webp",
    "description": "Tienes una bolsa llena de monedas de oro antiguas y otros tesoros. Necesitarás encontrar a un perista especializado para convertirlo en dinero líquido.",
    "flags": {
      "code": "EDGE 19",
      "originalName": "Ill-Gotten Treasure",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Reserva considerable de fondos para sobornos, equipo o contactos.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "EDGE 20",
    "name": "EDGE 20 — Un Favor de Vauxhall Cross (A Favor from Vauxhall Cross)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/edge-20.webp",
    "description": "El MI6 te debe un favor.",
    "flags": {
      "code": "EDGE 20",
      "originalName": "A Favor from Vauxhall Cross",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Descártala para cobrar el favor; puedes usarla para eliminar todos tus Problemas de Alerta (Heat) cuando estés en Inglaterra.",
      "clearCondition": "Un solo uso.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": "Heat"
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "CONTACT 1",
    "name": "CONTACT 1 — Francesca Curtis, Abogada (Francesca Curtis, Lawyer)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/contact-01.webp",
    "description": "Londres. Ex-intermediaria financiera de la conspiración y agente involuntaria.",
    "flags": {
      "code": "CONTACT 1",
      "originalName": "Francesca Curtis, Lawyer",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "Contabilidad (Accounting), Criminología (Criminology), Alta Sociedad (High Society).",
      "generalAbilities": "Solo apoyo investigativo.",
      "mechanicalEffect": "Investigación: Contabilidad (Accounting), Criminología (Criminology), Alta Sociedad (High Society). | Generales: Solo apoyo investigativo.",
      "clearCondition": "Contacto activo en mesa.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "CONTACT 2",
    "name": "CONTACT 2 — Tazi, Traficante de Armas (Tazi, Arms Dealer)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/contact-02.webp",
    "description": "Marruecos. Traficante de armamento con contactos militares y en el mercado negro.",
    "flags": {
      "code": "CONTACT 2",
      "originalName": "Tazi, Arms Dealer",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "Ciencia Militar (Military Science), Bajos Fondos (Streetwise).",
      "generalAbilities": "Mecánica (Mechanics) 2, Disparo (Shooting) 2.",
      "mechanicalEffect": "Investigación: Ciencia Militar (Military Science), Bajos Fondos (Streetwise). | Generales: Mecánica (Mechanics) 2, Disparo (Shooting) 2.",
      "clearCondition": "Contacto activo en mesa.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "CONTACT 3",
    "name": "CONTACT 3 — Susan Graves, Historiadora (Susan Graves, Historian)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/contact-03.webp",
    "description": "Académica e historiadora especializada en archivos antiguos.",
    "flags": {
      "code": "CONTACT 3",
      "originalName": "Susan Graves, Historian",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "Arqueología (Archaeology), Historia (History), Idiomas (Languages), Investigación (Research).",
      "generalAbilities": "Solo apoyo investigativo.",
      "mechanicalEffect": "Investigación: Arqueología (Archaeology), Historia (History), Idiomas (Languages), Investigación (Research). | Generales: Solo apoyo investigativo.",
      "clearCondition": "Contacto activo en mesa.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  },
  {
    "code": "CONTACT 4",
    "name": "CONTACT 4 — Carmen Vidraru, Estudiante de Arqueología (Carmen Vidraru, Archaeology Student)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/no-grave-for-traitors/contact-04.webp",
    "description": "Joven estudiante rumana de arqueología con conocimientos de folclore vampírico.",
    "flags": {
      "code": "CONTACT 4",
      "originalName": "Carmen Vidraru, Archaeology Student",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "Arqueología (Archaeology), Historia (History), Idiomas (Languages), Vampirología (Vampirology).",
      "generalAbilities": "Infiltración (Infiltration) 1.",
      "mechanicalEffect": "Investigación: Arqueología (Archaeology), Historia (History), Idiomas (Languages), Vampirología (Vampirology). | Generales: Infiltración (Infiltration) 1.",
      "clearCondition": "Contacto activo en mesa.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": false,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "No Grave for Traitors"
    }
  }
];
