/**
 * Baraja Oficial: The Deniable Woman (58 cartas)
 * Traducidas al español y enlazadas con sus recortes originales (.webp)
 */

export const THE_DENIABLE_WOMAN_CARDS = [
  {
    "code": "PROBLEM 1",
    "name": "PROBLEM 1 — Tendiendo Puentes (Building Bridges)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-01.webp",
    "description": "Necesitas aliados y fuentes fiables; eso significa reconstruir tu conexión con el MI6.",
    "flags": {
      "code": "PROBLEM 1",
      "originalName": "Building Bridges",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL: Debes terminar esta operación estando en buenos términos con el MI6.",
      "clearCondition": "Completa la misión en Moscú favoreciendo los intereses del MI6.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 2",
    "name": "PROBLEM 2 — Refugio en la Tormenta (Shelter in a Storm)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-02.webp",
    "description": "La conspiración está cerrando el cerco sobre ti: necesitas esconderte lejos de tus lugares habituales o quitarte de encima a algunos de los monstruos que te siguen.",
    "flags": {
      "code": "PROBLEM 2",
      "originalName": "Shelter in a Storm",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL: Si no encuentras una forma de anular este problema, ganas el Problema 5, «Al Cuello» (At Your Throat).",
      "clearCondition": "Anúlala asegurando un refugio seguro o eliminando a tus perseguidores.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 3",
    "name": "PROBLEM 3 — Sin Sangre (Out of Blood)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-03.webp",
    "description": "Has agotado hasta la última gota de la Poción de Agua de Rosas.",
    "flags": {
      "code": "PROBLEM 3",
      "originalName": "Out of Blood",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL: Necesitas más sangre de vampiro para fabricar más elixir protector.",
      "clearCondition": "Consigue sangre de vampiro durante la operación.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 4",
    "name": "PROBLEM 4 — Mensaje de Voz (Voice Message)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-04.webp",
    "description": "Hace unos días recibiste un mensaje breve y confuso de Harry Coleman (antiguo compañero del MI6 en la sección de Moscú). Sonaba aterrorizado y borracho: dijo que tenías razón y que necesitaba hablar contigo.",
    "flags": {
      "code": "PROBLEM 4",
      "originalName": "Voice Message",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL: Mientras tengas esta carta, sufres -1 a todas las pruebas de Frialdad (Cool). Descártala para obtener 1 Push Interpersonal gratis al tratar con Harry.",
      "clearCondition": "Encuentra a Harry Coleman y habla con él.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 5",
    "name": "PROBLEM 5 — Al Cuello (At Your Throat)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-05.webp",
    "description": "La conspiración se cierne sobre ti.",
    "flags": {
      "code": "PROBLEM 5",
      "originalName": "At Your Throat",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD, ALERTA (HEAT): A partir de ahora comienzas cada misión con Alerta (Heat) adicional.",
      "clearCondition": "Desmantela la célula de persecución de la conspiración.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 6",
    "name": "PROBLEM 6 — Nacida en la Oscuridad (Born in Darkness)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-06.webp",
    "description": "Tienes el recuerdo de haberte sometido voluntariamente al vampiro Jovitzo. Alguna parte de ti eligió el camino del mal... o al menos así lo recuerdas, ¿pero puedes confiar en tu propia memoria?",
    "flags": {
      "code": "PROBLEM 6",
      "originalName": "Born in Darkness",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Tus recuerdos traumáticos socavan tu estabilidad.",
      "clearCondition": "Afronta la verdad sobre tu pasado o reduce tu Sombra.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 7",
    "name": "PROBLEM 7 — Alborotadora (Troublemaker)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-07.webp",
    "description": "Tuviste que discutir, amenazar y sobornar para pasar el control de seguridad, y ahora has cabreado a la Policía de Moscú.",
    "flags": {
      "code": "PROBLEM 7",
      "originalName": "Troublemaker",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): La policía moscovita te tiene fichada como conflictiva.",
      "clearCondition": "Mantén un perfil bajo o soborna a las autoridades locales.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 8",
    "name": "PROBLEM 8 — Marcada (Marked)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-08.webp",
    "description": "Tus movimientos están siendo rastreados en Moscú.",
    "flags": {
      "code": "PROBLEM 8",
      "originalName": "Marked",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Están siguiendo tus pasos por la ciudad.",
      "clearCondition": "Puedes despistarlos Tomándote tu Tiempo (Take Time); descarta esta carta si lo haces.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 9",
    "name": "PROBLEM 9 — Alerta en Moscú (Moscow Heat)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-09.webp",
    "description": "Esto es Moscú, así que vive según las reglas de Moscú: «nunca estás completamente sola». Te están vigilando.",
    "flags": {
      "code": "PROBLEM 9",
      "originalName": "Moscow Heat",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Vigilancia constante en la capital rusa.",
      "clearCondition": "Opera desde las sombras o abandona Moscú.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 10",
    "name": "PROBLEM 10 — Conmocionada (Shaken)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-10.webp",
    "description": "Esa alucinación te ha dejado sin nervios. Algo extraño está ocurriendo.",
    "flags": {
      "code": "PROBLEM 10",
      "originalName": "Shaken",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shock",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "No puedes hacer ningún Push Interpersonal hasta que te Tomes tu Tiempo para descansar o encuentres otra forma de liberar el estrés.",
      "clearCondition": "Tómate tu Tiempo para descansar y calmar tus nervios.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 11",
    "name": "PROBLEM 11 — Esbirros Zombis (Zombie Minions)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-11.webp",
    "description": "Este vampiro tiene algún tipo de sirvientes zombis infectados. Posiblemente muchos. Más te vale ir armada hasta los dientes.",
    "flags": {
      "code": "PROBLEM 11",
      "originalName": "Zombie Minions",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "VAMPIRO: Horda de sirvientes no-muertos infectados.",
      "clearCondition": "Destruye a los esbirros o prepara armamento pesado.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 12",
    "name": "PROBLEM 12 — Costillas Fisuradas (Cracked Ribs)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-12.webp",
    "description": "Definitivamente oíste crujir varias costillas ahí.",
    "flags": {
      "code": "PROBLEM 12",
      "originalName": "Cracked Ribs",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Dolor agudo al respirar y moverte.",
      "clearCondition": "Recibe atención médica o descansa.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 13",
    "name": "PROBLEM 13 — Conmoción Cerebral (Concussion)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-13.webp",
    "description": "Estás aturdida por el golpe en la cabeza.",
    "flags": {
      "code": "PROBLEM 13",
      "originalName": "Concussion",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Mientras tengas esta carta, aplica la penalización de tus Heridas a todas las tiradas y retos (no solo a las físicas).",
      "clearCondition": "Tómate tu Tiempo para recibir tratamiento médico.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 14",
    "name": "PROBLEM 14 — Infectada (Infected)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-14.webp",
    "description": "Has estado expuesta a un arma biológica de la era soviética.",
    "flags": {
      "code": "PROBLEM 14",
      "originalName": "Infected",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "DOOM: Cada vez que te Tomes tu Tiempo, pon 1 marca en esta carta. Sufres -1 a todas las pruebas Físicas por cada marca. Si llegas a 5 marcas, mueres.",
      "clearCondition": "Anúlala con la Ventaja 15 (Cultivo / Culture) o recibiendo Atención Médica de un médico equipado para tratar esta plaga.",
      "ticks": {
        "enabled": true,
        "current": 0,
        "max": 5,
        "penaltyPerTick": true
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 15",
    "name": "PROBLEM 15 — Expuesta (Exposed)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-15.webp",
    "description": "Has sido detectada por quienes protegen a Linklathe.",
    "flags": {
      "code": "PROBLEM 15",
      "originalName": "Exposed",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): No puedes lograr un Avance (Advance) en ninguna prueba de Tapadera (Cover) ni Red de Contactos (Network) en Moscú mientras tengas esta carta.",
      "clearCondition": "Elimina a los vigilantes de Linklathe o cambia de identidad.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 16",
    "name": "PROBLEM 16 — Una Paliza Brutal (A Hell of a Beating)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-16.webp",
    "description": "Apenas puedes moverte tras la paliza.",
    "flags": {
      "code": "PROBLEM 16",
      "originalName": "A Hell of a Beating",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -4,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY): Sufres un penalizador de -4 a todas las pruebas Físicas hasta que te Tomes tu Tiempo para recibir Atención Médica.",
      "clearCondition": "Tómate tu Tiempo para recibir Atención Médica.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 17",
    "name": "PROBLEM 17 — Golpeada en la Cara con una Cadena (Hit in the Face with a Bike Chain)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-17.webp",
    "description": "Te han cruzado la cara con una cadena de bicicleta.",
    "flags": {
      "code": "PROBLEM 17",
      "originalName": "Hit in the Face with a Bike Chain",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Contusión y corte facial doloroso.",
      "clearCondition": "Cúrate o descansa.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 18",
    "name": "PROBLEM 18 — Altercado con Seguridad (Tangled with Security)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-18.webp",
    "description": "Acabas de montar una escena en la Embajada Británica en Moscú.",
    "flags": {
      "code": "PROBLEM 18",
      "originalName": "Tangled with Security",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Si no terminas esta operación en buenos términos con el MI6, esto se convertirá en un Problema de Alerta (Heat) la próxima vez que visites el Reino Unido.",
      "clearCondition": "Reconcíliate con el MI6 antes de cerrar la operación.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 19",
    "name": "PROBLEM 19 — Perdida en el Bosque (Lost in the Woods)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-19.webp",
    "description": "Tomaste el camino equivocado y probablemente no llegarás a la isla antes del anochecer.",
    "flags": {
      "code": "PROBLEM 19",
      "originalName": "Lost in the Woods",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Retraso crítico en ruta hacia la isla.",
      "clearCondition": "Anúlala gastando 1 Push.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 20",
    "name": "PROBLEM 20 — Necesito una Victoria (Need a Win)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-20.webp",
    "description": "La desesperación empieza a pesar sobre ti.",
    "flags": {
      "code": "PROBLEM 20",
      "originalName": "Need a Win",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Aplica tu puntuación de Sombra (Shadow) como penalizador a todas las tiradas.",
      "clearCondition": "Descártala la próxima vez que consigas un éxito rotundo / Avance (Advance).",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 21",
    "name": "PROBLEM 21 — Hemorragia Fuerte (Bleeding Badly)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-21.webp",
    "description": "La herida sangra abundantemente.",
    "flags": {
      "code": "PROBLEM 21",
      "originalName": "Bleeding Badly",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Si esta es la única carta de Herida que tienes, no puedes descartarla a menos que recibas Atención Médica.",
      "clearCondition": "Recibe Atención Médica.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 22",
    "name": "PROBLEM 22 — Equipo Robado (Stolen Gear)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-22.webp",
    "description": "Te han dejado sin equipo.",
    "flags": {
      "code": "PROBLEM 22",
      "originalName": "Stolen Gear",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "No puedes usar Preparación (Preparedness) ni Disparo (Shooting) hasta que encuentres suministros.",
      "clearCondition": "Encuentra armas y suministros de repuesto.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 23",
    "name": "PROBLEM 23 — Atada (Bound)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-23.webp",
    "description": "Estás atada de pies y manos con bridas de plástico.",
    "flags": {
      "code": "PROBLEM 23",
      "originalName": "Bound",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Inmovilizada por tus captores.",
      "clearCondition": "Corta o rompe las bridas para liberarte.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 24",
    "name": "PROBLEM 24 — Corte Profundo (Deep Cut)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-24.webp",
    "description": "Te abriste el brazo con un metal oxidado, aunque el tétanos es la menor de tus preocupaciones ahora mismo.",
    "flags": {
      "code": "PROBLEM 24",
      "originalName": "Deep Cut",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Corte profundo en el brazo.",
      "clearCondition": "Desinfecta y venda la herida.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 25",
    "name": "PROBLEM 25 — Disparada (Shot)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-25.webp",
    "description": "Has recibido un impacto de bala crítico.",
    "flags": {
      "code": "PROBLEM 25",
      "originalName": "Shot",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY) / DOOM: Si no recibes tratamiento médico antes del final de esta operación, te desangrarás y morirás.",
      "clearCondition": "Recibe tratamiento médico antes de que termine la operación.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 26",
    "name": "PROBLEM 26 — Cojeando (Limping)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-26.webp",
    "description": "Tienes una pierna lesionada.",
    "flags": {
      "code": "PROBLEM 26",
      "originalName": "Limping",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Esta penalización solo se aplica a Evasión (Evasion).",
      "clearCondition": "Descansa o venda la pierna.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 27",
    "name": "PROBLEM 27 — ¡Crujido! (Creeeeakk)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-27.webp",
    "description": "Acabas de alertar a cualquier monstruo de la zona de tu presencia.",
    "flags": {
      "code": "PROBLEM 27",
      "originalName": "Creeeeakk",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Mientras tengas esta carta, sufres un penalizador de -2 a cualquier prueba de Infiltración (Infiltration).",
      "clearCondition": "Anúlala Tomándote tu Tiempo para esconderte.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 28",
    "name": "PROBLEM 28 — Brazo Roto (Broken Arm)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-28.webp",
    "description": "Casi te arranca el brazo de cuajo.",
    "flags": {
      "code": "PROBLEM 28",
      "originalName": "Broken Arm",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY): Fractura grave en el brazo.",
      "clearCondition": "Recibe Atención Médica.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 29",
    "name": "PROBLEM 29 — Garras del Vampiro (Claws of the Vampire)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-29.webp",
    "description": "Koschei te desgarró la cara y el cuello, y esas heridas no sanarán rápido. Llevarás las cicatrices el resto de tu vida.",
    "flags": {
      "code": "PROBLEM 29",
      "originalName": "Claws of the Vampire",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY): Desgarro severo causado por Koschei.",
      "clearCondition": "Recibe Atención Médica.",
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
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 30",
    "name": "PROBLEM 30 — Desarmada (Disarmed)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-30.webp",
    "description": "Has perdido tu arma de fuego en la refriega.",
    "flags": {
      "code": "PROBLEM 30",
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
      "mechanicalEffect": "No puedes usar Disparo (Shooting) hasta que encuentres otra pistola.",
      "clearCondition": "Consigue otra arma de fuego.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "PROBLEM 31",
    "name": "PROBLEM 31 — Arrastrándote Lejos (Crawling Away)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/problem-31.webp",
    "description": "Casi mueres en la orilla y te llevará mucho tiempo recuperarte.",
    "flags": {
      "code": "PROBLEM 31",
      "originalName": "Crawling Away",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": -1,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Reduce permanentemente dos de tus Habilidades Generales en 1 dado cada una.",
      "clearCondition": "Secuela permanente de continuidad.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": true,
        "doom": false,
        "seriousInjury": true,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 1",
    "name": "EDGE 1 — Moneda del Reino (Coin of the Realm)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-01.webp",
    "description": "Tienes acceso a fondos de la Cuenta Única de Inteligencia.",
    "flags": {
      "code": "EDGE 1",
      "originalName": "Coin of the Realm",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Descarta esta carta para retirar varios miles de libras en efectivo imposible de rastrear.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 2",
    "name": "EDGE 2 — Un Favor de Vauxhall Cross (A Favor from Vauxhall Cross)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-02.webp",
    "description": "El MI6 te debe un favor.",
    "flags": {
      "code": "EDGE 2",
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
      "mechanicalEffect": "CONTINUIDAD: Descarta esta carta para cobrarlo cuando lo necesites.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 3",
    "name": "EDGE 3 — La Carpeta de Linklathe (Linklathe’s Folder)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-03.webp",
    "description": "El MI6 te ha proporcionado un pasaporte y una tapadera... ¿pero confías en el MI6?",
    "flags": {
      "code": "EDGE 3",
      "originalName": "Linklathe’s Folder",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Puedes descartar esta carta para tener éxito automático (Hold) en cualquier prueba de Tapadera (Cover) en Moscú. Si lo haces, ganas el Problema 8, «Marcada» (Marked).",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 4",
    "name": "EDGE 4 — Desafiante Hasta el Final (Defiant to the Last)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-04.webp",
    "description": "Recuerdas haber luchado contra el control de Jovitzo todo lo que pudiste.",
    "flags": {
      "code": "EDGE 4",
      "originalName": "Defiant to the Last",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Recurre a ese recuerdo de tu coraje y descarta esta carta para anular cualquier Problema de Sombra (Shadow).",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 5",
    "name": "EDGE 5 — El Vigilante (The Watcher)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-05.webp",
    "description": "¿Tuviste una visión? ¿Un recuerdo? La intuición de alguien observándote, una figura pálida y hambrienta.",
    "flags": {
      "code": "EDGE 5",
      "originalName": "The Watcher",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Mientras tengas esta carta no puedes suprimir tu Sombra. Descártala para tener éxito rotundo (Advance) automático en Detectar Peligro (Sense Trouble), o anúlala descartando la experiencia como una alucinación.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 6",
    "name": "EDGE 6 — La Identidad de Moscú (The Moscow Identity)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-06.webp",
    "description": "Ya has establecido una identidad falsa sólida en Moscú.",
    "flags": {
      "code": "EDGE 6",
      "originalName": "The Moscow Identity",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para tener éxito automático (Hold) en cualquier prueba de Red de Contactos (Network), Tapadera (Cover) o Preparación (Preparedness) realizada en la ciudad.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 7",
    "name": "EDGE 7 — La Nota Misteriosa (The Mysterious Note)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-07.webp",
    "description": "Alguien concertó una reunión clandestina con Coleman justo antes de que desapareciera, usando a su novia Olga como palanca. Definitivamente hay juego sucio.",
    "flags": {
      "code": "EDGE 7",
      "originalName": "The Mysterious Note",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PISTA (CLUE): Prueba clave sobre el secuestro/chantaje a Harry Coleman.",
      "clearCondition": "Pista permanente de investigación.",
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
        "clue": true,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 8",
    "name": "EDGE 8 — La Asistencia de Shawler (Shawler’s Assistance)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-08.webp",
    "description": "Cuentas con el respaldo de Shawler dentro de Cathedral Dome.",
    "flags": {
      "code": "EDGE 8",
      "originalName": "Shawler’s Assistance",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Tienes 1 Push Interpersonal gratis por empleado al interrogar a cualquier trabajador de Cathedral Dome. Descártala al salir de Moscú o si pierdes el favor de Shawler.",
      "clearCondition": "Continua en Moscú.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 9",
    "name": "EDGE 9 — La Fotografía de Rozkhova (The Rozkhova Photograph)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-09.webp",
    "description": "Una foto de dos científicos y su bebé. Al dorso dice «Rozkhova» y una fecha de 1984. ¿Quiénes son estas personas? Tu intuición te dice que es una pista importante.",
    "flags": {
      "code": "EDGE 9",
      "originalName": "The Rozkhova Photograph",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PISTA (CLUE): Fotografía familiar de 1984 vinculada al apellido Rozkhova.",
      "clearCondition": "Pista de investigación.",
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
        "clue": true,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 10",
    "name": "EDGE 10 — La Cuestión Morozov (The Morozov Question)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-10.webp",
    "description": "La desaparición de Morozov está definitivamente conectada con Coleman; vas por buen camino.",
    "flags": {
      "code": "EDGE 10",
      "originalName": "The Morozov Question",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para ganar 1 Push extra cuando encuentres a Morozov.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 11",
    "name": "EDGE 11 — Estas Cosas Pueden Morir (These Things Can Die)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-11.webp",
    "description": "Nada te alegra más el día que matar a un zombi.",
    "flags": {
      "code": "EDGE 11",
      "originalName": "These Things Can Die",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en cualquier enfrentamiento contra estos zombis.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 12",
    "name": "EDGE 12 — Irregularidades Financieras (Financial Irregularities)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-12.webp",
    "description": "Borya Ignatiev te dio detalles de unas transferencias de dinero sospechosas desde Suiza y Londres que tendrás que investigar más adelante.",
    "flags": {
      "code": "EDGE 12",
      "originalName": "Financial Irregularities",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Rastro financiero de la conspiración entre Suiza y Londres.",
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
        "clue": true,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 13",
    "name": "EDGE 13 — Con el Agua al Cuello (In Over His Head)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-13.webp",
    "description": "Tienes a Hestridge completamente descolocado.",
    "flags": {
      "code": "EDGE 13",
      "originalName": "In Over His Head",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para obtener 1 Push gratis al tratar con él.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 14",
    "name": "EDGE 14 — La Nota de Coleman (Coleman’s Note)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-14.webp",
    "description": "Has encontrado una nota de Coleman a su novia pidiéndole que «revise nuestro sitio. Te lo explicaré cuando vuelva». ¿Dónde está «su sitio»? Tienes que hablar con Olga.",
    "flags": {
      "code": "EDGE 14",
      "originalName": "Coleman’s Note",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PISTA (CLUE): Nota manuscrita de Harry Coleman a Olga.",
      "clearCondition": "Pista de investigación.",
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
        "clue": true,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 15",
    "name": "EDGE 15 — Cultivo Antibiótico (Culture)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-15.webp",
    "description": "Un antibiótico experimental desarrollado en el laboratorio.",
    "flags": {
      "code": "EDGE 15",
      "originalName": "Culture",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para Anular el Problema 14, «Infectada» (Infected), o para obtener +1d6 en cualquier prueba de Medicina (Medic).",
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
        "counterTarget": "Infected"
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 16",
    "name": "EDGE 16 — La Puerta Trasera (The Back Door)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-16.webp",
    "description": "Has descubierto lo que parece ser una entrada alternativa al laboratorio soviético de armas biológicas en ruinas.",
    "flags": {
      "code": "EDGE 16",
      "originalName": "The Back Door",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PISTA (CLUE): Acceso secundario al complejo de armas biológicas.",
      "clearCondition": "Pista de investigación.",
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
        "clue": true,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 17",
    "name": "EDGE 17 — Adicción a la Perfluorodecalina (Perfluorodecalin Habit)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-17.webp",
    "description": "Sabes que la entidad Koschei depende de un compuesto químico llamado perfluorodecalina para poder digerir la sangre. Tiene que haber una forma de explotar esta dependencia.",
    "flags": {
      "code": "EDGE 17",
      "originalName": "Perfluorodecalin Habit",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PISTA (CLUE): Punto débil químico de la entidad Koschei.",
      "clearCondition": "Pista de investigación.",
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
        "clue": true,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 18",
    "name": "EDGE 18 — Fría Bienvenida (Cold Welcome)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-18.webp",
    "description": "Maria Rozkhova murió en 1987, pero al parecer te estará esperando cuando llegues a la isla de Koschei. Eso no es nada tranquilizador.",
    "flags": {
      "code": "EDGE 18",
      "originalName": "Cold Welcome",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Estás prevenida de lo que te aguarda en la isla de Koschei.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 19",
    "name": "EDGE 19 — Sin Cuartel (No Quarter)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-19.webp",
    "description": "Has matado a un montón de las criaturas zombis que infestan la isla. No sabes si has acabado con todas, pero sin duda has diezmado sus filas.",
    "flags": {
      "code": "EDGE 19",
      "originalName": "No Quarter",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Reducción significativa de las defensas de la isla.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "EDGE 20",
    "name": "EDGE 20 — La Ventaja (The Drop)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/edge-20.webp",
    "description": "Has logrado entrar en la guarida de Koschei sin ser detectada.",
    "flags": {
      "code": "EDGE 20",
      "originalName": "The Drop",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en cualquier tirada o enfrentamiento.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "CONTACT 1",
    "name": "CONTACT 1 — Harry Coleman, Oficial del MI6 (Harry Coleman, MI6 Officer)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/contact-01.webp",
    "description": "Conociste a Harry cuando ambos estabais en el MI6. Se diga lo que se diga de él, al final siempre cumple.",
    "flags": {
      "code": "CONTACT 1",
      "originalName": "Harry Coleman, MI6 Officer",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "Contabilidad (Accounting), Criminología (Criminology), Oficio de Espía (Tradecraft), Análisis de Tráfico (Traffic Analysis).",
      "generalAbilities": "Infiltración (Infiltration) 2, Disparo (Shooting) 2.",
      "mechanicalEffect": "Investigación: Contabilidad (Accounting), Criminología (Criminology), Oficio de Espía (Tradecraft), Análisis de Tráfico (Traffic Analysis). | Generales: Infiltración (Infiltration) 2, Disparo (Shooting) 2.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "CONTACT 2",
    "name": "CONTACT 2 — Jimmy Linklathe, «Diplomático» (Jimmy Linklathe, “Diplomat”)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/contact-02.webp",
    "description": "Te contrató para investigar la desaparición de Harry Coleman.",
    "flags": {
      "code": "CONTACT 2",
      "originalName": "Jimmy Linklathe, “Diplomat”",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "Burocracia (Bureaucracy), Alta Sociedad (High Society).",
      "generalAbilities": "Solo apoyo investigativo.",
      "mechanicalEffect": "Investigación: Burocracia (Bureaucracy), Alta Sociedad (High Society). | Generales: Solo apoyo investigativo.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "CONTACT 3",
    "name": "CONTACT 3 — Yuri Fokine, Policía de Moscú (Yuri Fokine, Moscow Cop)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/contact-03.webp",
    "description": "Agente de la policía de Moscú con experiencia en las calles.",
    "flags": {
      "code": "CONTACT 3",
      "originalName": "Yuri Fokine, Moscow Cop",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "Jerga Policial (Cop Talk), Negociación (Negotiation), Bajos Fondos (Streetwise).",
      "generalAbilities": "Pelea (Fighting) 1, Vigilancia (Surveillance) 2.",
      "mechanicalEffect": "Investigación: Jerga Policial (Cop Talk), Negociación (Negotiation), Bajos Fondos (Streetwise). | Generales: Pelea (Fighting) 1, Vigilancia (Surveillance) 2.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "CONTACT 4",
    "name": "CONTACT 4 — Tara Tallwood, Asistente Personal (Tara Tallwood, Personal Assistant)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/contact-04.webp",
    "description": "La secretaria personal de Harry Coleman.",
    "flags": {
      "code": "CONTACT 4",
      "originalName": "Tara Tallwood, Personal Assistant",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "Burocracia (Bureaucracy), Investigación (Research).",
      "generalAbilities": "Solo apoyo administrativo.",
      "mechanicalEffect": "Investigación: Burocracia (Bureaucracy), Investigación (Research). | Generales: Solo apoyo administrativo.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "CONTACT 5",
    "name": "CONTACT 5 — Eduard Morozov, Científico (Eduard Morozov, Scientist)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/contact-05.webp",
    "description": "Trabajó en el Proyecto KOSCHEI durante la era soviética.",
    "flags": {
      "code": "CONTACT 5",
      "originalName": "Eduard Morozov, Scientist",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "Química (Chemistry), Diagnóstico (Diagnosis), Farmacia (Pharmacy), Vampirología (Vampirology).",
      "generalAbilities": "Medicina (Medic) 1.",
      "mechanicalEffect": "Investigación: Química (Chemistry), Diagnóstico (Diagnosis), Farmacia (Pharmacy), Vampirología (Vampirology). | Generales: Medicina (Medic) 1.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "CONTACT 6",
    "name": "CONTACT 6 — Nina Rozkhova, Agente del FSB (Nina Rozkhova, FSB)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/contact-06.webp",
    "description": "Tu homóloga rusa en Moscú.",
    "flags": {
      "code": "CONTACT 6",
      "originalName": "Nina Rozkhova, FSB",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "Jerga Policial (Cop Talk), Criminología (Criminology), Vigilancia Electrónica (Electronic Surveillance), Oficio de Espía (Tradecraft), Bajos Fondos (Streetwise), Vampirología (Vampirology).",
      "generalAbilities": "Vigilancia (Surveillance) 2.",
      "mechanicalEffect": "Investigación: Jerga Policial (Cop Talk), Criminología (Criminology), Vigilancia Electrónica (Electronic Surveillance), Oficio de Espía (Tradecraft), Bajos Fondos (Streetwise), Vampirología (Vampirology). | Generales: Vigilancia (Surveillance) 2.",
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
      "sceneRef": "The Deniable Woman"
    }
  },
  {
    "code": "CONTACT 7",
    "name": "CONTACT 7 — Angela Coleman (Angela Coleman)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-deniable-woman/contact-07.webp",
    "description": "La esposa separada de Harry Coleman, con formación médica.",
    "flags": {
      "code": "CONTACT 7",
      "originalName": "Angela Coleman",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "Diagnóstico (Diagnosis), Patología Forense (Forensic Pathology), Farmacia (Pharmacy).",
      "generalAbilities": "Medicina (Medic) 2.",
      "mechanicalEffect": "Investigación: Diagnóstico (Diagnosis), Patología Forense (Forensic Pathology), Farmacia (Pharmacy). | Generales: Medicina (Medic) 2.",
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
      "sceneRef": "The Deniable Woman"
    }
  }
];
