/**
 * Baraja Oficial: The Best of Intentions (78 cartas)
 * Traducidas al español y enlazadas con sus recortes originales (.webp)
 */

export const THE_BEST_OF_INTENTIONS_CARDS = [
  {
    "code": "CONTACT 1",
    "name": "CONTACT 1 — Helen Slane, Periodista Freelance (Helen Slane, Freelance Journalist)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/contact-01.webp",
    "description": "Periodista de investigación independiente que ya sigue el rastro de la Conspiración.",
    "flags": {
      "code": "CONTACT 1",
      "originalName": "Helen Slane, Freelance Journalist",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "Criminología (Criminology), Investigación (Research), Fotografía (Photography).",
      "generalAbilities": "Red de Contactos (Network) 1, Vigilancia (Surveillance) 2.",
      "mechanicalEffect": "Investigación: Criminología (Criminology), Investigación (Research), Fotografía (Photography). | Generales: Red de Contactos (Network) 1, Vigilancia (Surveillance) 2.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "CONTACT 2",
    "name": "CONTACT 2 — Zelenka, Excéntrico Experto en Ocultismo (Zelenka, Eccentric Occult Expert)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/contact-02.webp",
    "description": "Sepulturero en el Cementerio de Praga y erudito excéntrico en ciencias ocultas.",
    "flags": {
      "code": "CONTACT 2",
      "originalName": "Zelenka, Eccentric Occult Expert",
      "renderMode": "parametric",
      "cardType": "contact",
      "category": "contact",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "Arqueología (Archaeology), Historia (History), Estudios Ocultistas (Occult Studies), Vampirología (Vampirology).",
      "generalAbilities": "Solo apoyo investigativo.",
      "mechanicalEffect": "Investigación: Arqueología (Archaeology), Historia (History), Estudios Ocultistas (Occult Studies), Vampirología (Vampirology). | Generales: Solo apoyo investigativo.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 1",
    "name": "PROBLEM 1 — Escasez de Sangre (Running Low)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-01.webp",
    "description": "Necesitas sangre de vampiro para la Poción de Agua de Rosas y se te ha acabado.",
    "flags": {
      "code": "PROBLEM 1",
      "originalName": "Running Low",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL: No puedes sacar más que un Éxito Estándar (Hold) en cualquier prueba de Frialdad (Cool) que involucre a un vampiro.",
      "clearCondition": "Rastrea y mata a una sanguijuela para saciar tu necesidad; si lo haces, cambia esta carta por la Ventaja 12, «La Poción de Agua de Rosas».",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 2",
    "name": "PROBLEM 2 — Husmeando (Snooping Around)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-02.webp",
    "description": "Alguien ha estado escarbando en tu pasado y desenterrando tus secretos.",
    "flags": {
      "code": "PROBLEM 2",
      "originalName": "Snooping Around",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL, ALERTA (HEAT): Alguien investiga tu historial.",
      "clearCondition": "Descubre quién ha estado investigando tu pasado.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 3",
    "name": "PROBLEM 3 — El Sueño del Castillo (The Castle Dream)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-03.webp",
    "description": "Tuviste un sueño extrañamente vívido en el que subías por un sendero de cabras entre colinas rocosas. Alguien caminaba justo detrás de ti, pero solo podías ver sus brillantes ojos rojos.",
    "flags": {
      "code": "PROBLEM 3",
      "originalName": "The Castle Dream",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PROBLEMA INICIAL, SOMBRA (SHADOW): Un vampiro ha invadido tus sueños.",
      "clearCondition": "Descubre el origen de la intrusión psíquica o bloquea al vampiro.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 4",
    "name": "PROBLEM 4 — Debería Haberse Quedado Enterrado (Should Have Stayed Buried)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-04.webp",
    "description": "Tienes problemas para diferenciar entre los recuerdos de tu anterior visita al cementerio y el presente.",
    "flags": {
      "code": "PROBLEM 4",
      "originalName": "Should Have Stayed Buried",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shock",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": -1,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Sufres -1 dado (-1d6) en todas las pruebas de Concentración/Enfoque hasta que te Tomes tu Tiempo para aclarar tu mente.",
      "clearCondition": "Tómate tu Tiempo (Take Time) para serenarte.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 5",
    "name": "PROBLEM 5 — Pensamientos Oscuros (Dark Thoughts)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-05.webp",
    "description": "Cementerios, criptas, cosas muertas... tú misma te sientes medio muerta.",
    "flags": {
      "code": "PROBLEM 5",
      "originalName": "Dark Thoughts",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): La atmósfera fúnebre alimenta tu oscuridad interior.",
      "clearCondition": "Sal del cementerio o reduce tu Sombra.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 6",
    "name": "PROBLEM 6 — El Tercer Hombre (The Third Man)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-06.webp",
    "description": "Has perdido de vista a uno de los tres enemigos en el cementerio.",
    "flags": {
      "code": "PROBLEM 6",
      "originalName": "The Third Man",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Uno de los sicarios se mueve fuera de tu campo visual.",
      "clearCondition": "Anúlala volviendo a localizarlo visualmente.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 7",
    "name": "PROBLEM 7 — Robo en el Coche (Break-In)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-07.webp",
    "description": "Robaron en tu coche mientras vigilabas el cementerio; definitivamente fue un golpe selectivo.",
    "flags": {
      "code": "PROBLEM 7",
      "originalName": "Break-In",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descarta cualquier Ventaja de equipo guardada allí, y no puedes usar Preparación (Preparedness) hasta que te reabastezcas.",
      "clearCondition": "Reabastécete de equipo en un piso franco o con un contacto.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 8",
    "name": "PROBLEM 8 — Requiesce in Pace (Requiesce in Pace)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-08.webp",
    "description": "Te liaste a tiros en medio de un cementerio.",
    "flags": {
      "code": "PROBLEM 8",
      "originalName": "Requiesce in Pace",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Los disparos en el cementerio han alertado a las autoridades locales.",
      "clearCondition": "Abandona la zona antes de que llegue la policía.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 9",
    "name": "PROBLEM 9 — Herida en el Cuello (Neck Wound)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-09.webp",
    "description": "El monstruo probó tu sangre, aunque no llegó a drenarte por completo.",
    "flags": {
      "code": "PROBLEM 9",
      "originalName": "Neck Wound",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY), SOMBRA (SHADOW): Mordedura o desgarro vampírico en el cuello.",
      "clearCondition": "Recibe Atención Médica y protege tu mente del vínculo de sangre.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 10",
    "name": "PROBLEM 10 — Desgarrada (Clawed)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-10.webp",
    "description": "El monstruo desgarró tu carne con sus uñas afiladas como garras.",
    "flags": {
      "code": "PROBLEM 10",
      "originalName": "Clawed",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Laceraciones profundas por garras.",
      "clearCondition": "Venda las heridas o recibe atención médica.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 11",
    "name": "PROBLEM 11 — Periodista Incómoda (Troublesome Reporter)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-11.webp",
    "description": "Te persigue una periodista que quiere reunirse contigo.",
    "flags": {
      "code": "PROBLEM 11",
      "originalName": "Troublesome Reporter",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Si no aceptas la reunión, al final del escenario cambia esta carta por el Problema 48, «Gravemente Quemada» (Badly Burned).",
      "clearCondition": "Reúnete con la periodista Helen Slane para gestionar la situación.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 12",
    "name": "PROBLEM 12 — Lastre del Pasado (Baggage)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-12.webp",
    "description": "Slane tiene información sobre tu vida pasada como sirvienta de los vampiros. Tienes que convencerla de que destruya sus pruebas.",
    "flags": {
      "code": "PROBLEM 12",
      "originalName": "Baggage",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Si las pruebas no arden antes del final del escenario, cambia esta carta por el Problema 48, «Gravemente Quemada» (Badly Burned).",
      "clearCondition": "Descártala si consigues que las pruebas sean destruidas.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 13",
    "name": "PROBLEM 13 — Detectada (Spotted)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-13.webp",
    "description": "La policía de Praga ha tomado nota de tus actividades.",
    "flags": {
      "code": "PROBLEM 13",
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
      "mechanicalEffect": "ALERTA (HEAT): Estás en el radar de la policía checa.",
      "clearCondition": "Mantén un perfil bajo en Praga o cambia de tapadera.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 14",
    "name": "PROBLEM 14 — Paranoia (Paranoia)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-14.webp",
    "description": "Sientes como si cada rata en las alcantarillas, cada cámara y cada rostro en la calle te estuviera observando.",
    "flags": {
      "code": "PROBLEM 14",
      "originalName": "Paranoia",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Sensación constante de persecución sobrenatural.",
      "clearCondition": "Tómate tu Tiempo en un lugar seguro para serenarte.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 15",
    "name": "PROBLEM 15 — Salida Apresurada (Hasty Exit)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-15.webp",
    "description": "Debiste de activar una alarma silenciosa en Musil & Sons.",
    "flags": {
      "code": "PROBLEM 15",
      "originalName": "Hasty Exit",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Alarma activada durante la incursión en Musil & Sons.",
      "clearCondition": "Aléjate del edificio y borra tu rastro.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 16",
    "name": "PROBLEM 16 — Situación Incendiaria (Incendiary Situation)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-16.webp",
    "description": "Sufriste quemaduras cuando detonó el artefacto incendiario.",
    "flags": {
      "code": "PROBLEM 16",
      "originalName": "Incendiary Situation",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Quemaduras por la explosión incendiaria.",
      "clearCondition": "Trata las quemaduras con primeros auxilios.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 17",
    "name": "PROBLEM 17 — Persecución en Coche (Car Chase)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-17.webp",
    "description": "Tuviste que esquivar a la policía checa a toda velocidad para no perder de vista la furgoneta.",
    "flags": {
      "code": "PROBLEM 17",
      "originalName": "Car Chase",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Conducción temeraria registrada por las patrullas de Praga.",
      "clearCondition": "Deshazte del vehículo o despista a las patrullas.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 18",
    "name": "PROBLEM 18 — Choque Brutal (Car Crash)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-18.webp",
    "description": "De acuerdo, necesitas ver a un médico de inmediato para que atienda estas heridas.",
    "flags": {
      "code": "PROBLEM 18",
      "originalName": "Car Crash",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY): Traumatismo severo por colisión.",
      "clearCondition": "Tómate tu Tiempo (Take Time) para recibir Atención Médica.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 19",
    "name": "PROBLEM 19 — Podría Haberte Matado (It Could Have Killed You)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-19.webp",
    "description": "El monstruo de la cripta te tuvo a su merced. Podría haberte matado. No lo hizo... y eso te inquieta profundamente.",
    "flags": {
      "code": "PROBLEM 19",
      "originalName": "It Could Have Killed You",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): La criatura de la cripta te perdonó la vida por algún motivo desconocido.",
      "clearCondition": "Descubre la naturaleza del Glog o resuelve tu vínculo con él.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 20",
    "name": "PROBLEM 20 — Una Espina Clavada (Thorn In Your Side)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-20.webp",
    "description": "Los malos te han localizado.",
    "flags": {
      "code": "PROBLEM 20",
      "originalName": "Thorn In Your Side",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Terrence Thorn y sus hombres siguen tus pasos.",
      "clearCondition": "Anúlala despistándolos y desapareciendo de su vista.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 21",
    "name": "PROBLEM 21 — Velocidad Vampírica (Vampiric Speed)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-21.webp",
    "description": "Thorn se mueve con una velocidad inhumana.",
    "flags": {
      "code": "PROBLEM 21",
      "originalName": "Vampiric Speed",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "VAMPIRO: No puedes obtener más que un Éxito Estándar (Hold) en cualquier enfrentamiento Físico contra él a menos que encuentres una forma de contrarrestar su velocidad.",
      "clearCondition": "Inmovilízalo, tiéndele una trampa o anula su ventaja de velocidad.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 22",
    "name": "PROBLEM 22 — Frío de la Tumba (Chill of the Grave)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-22.webp",
    "description": "Esa cosa de la cripta sigue ahí fuera, y es un asunto pendiente.",
    "flags": {
      "code": "PROBLEM 22",
      "originalName": "Chill of the Grave",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK), SOMBRA (SHADOW): El Glog sigue suelto.",
      "clearCondition": "Rastrea y resuelve el asunto de la criatura de la cripta.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 23",
    "name": "PROBLEM 23 — Rata en un Laberinto (Rat In A Maze)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-23.webp",
    "description": "Los vampiros captaron tu rastro en el aeropuerto. Cualquiera aquí podría ser un esclavo suyo...",
    "flags": {
      "code": "PROBLEM 23",
      "originalName": "Rat In A Maze",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Vigilancia vampírica en tu llegada a Malta.",
      "clearCondition": "Escapa del cerco de observadores del aeropuerto.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 24",
    "name": "PROBLEM 24 — Desarmada (Disarmed)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-24.webp",
    "description": "Estás sin arma de fuego.",
    "flags": {
      "code": "PROBLEM 24",
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
      "mechanicalEffect": "No puedes realizar enfrentamientos de Disparo (Shooting) hasta que encuentres un arma.",
      "clearCondition": "Consigue una pistola o arma de fuego.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 25",
    "name": "PROBLEM 25 — Acoso Policial (Police Harassment)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-25.webp",
    "description": "La policía local te está poniendo trabas y vigilando tus pasos.",
    "flags": {
      "code": "PROBLEM 25",
      "originalName": "Police Harassment",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "ALERTA (HEAT): Presión policial directa.",
      "clearCondition": "Anúlala mediante un soborno.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 26",
    "name": "PROBLEM 26 — Apuñalada (Stabbed)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-26.webp",
    "description": "Algún bastardo te alcanzó con una daga sacrificial. Necesitarás la antitetánica si se parece en algo a la última vez que te apuñalaron con una daga ritual...",
    "flags": {
      "code": "PROBLEM 26",
      "originalName": "Stabbed",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Puñalada con daga ritual.",
      "clearCondition": "Cura y venda la herida.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 27",
    "name": "PROBLEM 27 — El Cuchillo del Padre Pisani (Father Pisani’s Knife)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-27.webp",
    "description": "Hay algún tipo de veneno letal en esa hoja.",
    "flags": {
      "code": "PROBLEM 27",
      "originalName": "Father Pisani’s Knife",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY) / DOOM: Si aún conservas este problema al final del escenario, mueres.",
      "clearCondition": "Consigue un antídoto o Atención Médica especializada antes del final del escenario.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 28",
    "name": "PROBLEM 28 — Capturada (Captured)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-28.webp",
    "description": "Has caído prisionera de la secta.",
    "flags": {
      "code": "PROBLEM 28",
      "originalName": "Captured",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Estás retenida por tus enemigos.",
      "clearCondition": "Descártala logrando escapar de tu cautiverio.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 29",
    "name": "PROBLEM 29 — Recaída en la Sombra (Backsliding Into Shadow)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-29.webp",
    "description": "Corres el peligro de volver a caer bajo el dominio mental de un vampiro.",
    "flags": {
      "code": "PROBLEM 29",
      "originalName": "Backsliding Into Shadow",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "DOOM / SOMBRA: Si tu Sombra (Shadow) es de 6 o más al final de este escenario, vuelves a convertirte en una esclava vampírica y quedas fuera de juego.",
      "clearCondition": "Mantén tu Sombra por debajo de 6 o mata al vampiro antes de terminar el escenario.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": true,
        "seriousInjury": false,
        "clue": false,
        "vampire": true,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 30",
    "name": "PROBLEM 30 — Víctima Sacrificial (Sacrificial Victim)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-30.webp",
    "description": "Te han drogado para el sacrificio.",
    "flags": {
      "code": "PROBLEM 30",
      "originalName": "Sacrificial Victim",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Sufres un penalizador de -2 a todas las pruebas hasta que te Tomes tu Tiempo (Take Time) para recuperarte.",
      "clearCondition": "Tómate tu Tiempo para eliminar los efectos de la droga.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 31",
    "name": "PROBLEM 31 — Sombras Cerniéndose (Gathering Shadows)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-31.webp",
    "description": "Estás adentrándote en el corazón mismo de las tinieblas.",
    "flags": {
      "code": "PROBLEM 31",
      "originalName": "Gathering Shadows",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): La presencia sobrenatural se intensifica en las catacumbas.",
      "clearCondition": "Completa tu incursión o reduce tu Sombra.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 32",
    "name": "PROBLEM 32 — Desorientada (Disorientated)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-32.webp",
    "description": "Estás mareada y confundida.",
    "flags": {
      "code": "PROBLEM 32",
      "originalName": "Disorientated",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shock",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Cuando uses una Maniobra Especial (Stunt), resta cualquier resultado impar de tu total.",
      "clearCondition": "Descártala al final de la escena o Tomándote tu Tiempo para calmarte.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 33",
    "name": "PROBLEM 33 — Hechizada (Enchanted)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-33.webp",
    "description": "Te sientes irresistiblemente atraída hacia el vampiro Cafone y no puedes resistir sus órdenes.",
    "flags": {
      "code": "PROBLEM 33",
      "originalName": "Enchanted",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Cuenta como DOS Problemas de Sombra. No puedes desobedecer las órdenes directas de Cafone.",
      "clearCondition": "Rompe el encantamiento con Agua de Rosas o matando a Cafone.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 34",
    "name": "PROBLEM 34 — Zarpazo por la Espalda (Clawed In The Back)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-34.webp",
    "description": "¡Un ataque a traición por la espalda!",
    "flags": {
      "code": "PROBLEM 34",
      "originalName": "Clawed In The Back",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Desgarro doloroso en la espalda.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 35",
    "name": "PROBLEM 35 — Desangrándose (Bleeding Out)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-35.webp",
    "description": "Tu herida no deja de manar sangre.",
    "flags": {
      "code": "PROBLEM 35",
      "originalName": "Bleeding Out",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY) / DOOM: Cada vez que tires un dado, la penalización de esta carta aumenta en -1 (empezando en 0). Si llega a -10, o si aún tienes esta carta al final del escenario, mueres.",
      "clearCondition": "Recibe Atención Médica de urgencia antes de llegar a 10 marcas.",
      "ticks": {
        "enabled": true,
        "current": 0,
        "max": 10,
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 36",
    "name": "PROBLEM 36 — De No Ser por la Tumba... (There But For The Grave...)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-36.webp",
    "description": "No puedes evitar sentir una extraña afinidad con el Glog.",
    "flags": {
      "code": "PROBLEM 36",
      "originalName": "There But For The Grave...",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA (SHADOW): Te ves reflejada en el destino monstruoso del Glog.",
      "clearCondition": "Anúlala matando a un vampiro.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 37",
    "name": "PROBLEM 37 — Apaleada y Ensangrentada (Beaten And Bloodied)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-37.webp",
    "description": "Como si hubieras disputado dieciséis asaltos contra un oso pardo.",
    "flags": {
      "code": "PROBLEM 37",
      "originalName": "Beaten And Bloodied",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Múltiples contusiones y cortes por todo el cuerpo.",
      "clearCondition": "Descansa o recibe atención médica.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 38",
    "name": "PROBLEM 38 — Ahogándose (Drowning)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-38.webp",
    "description": "Caíste al agua con fuerza y te hundes.",
    "flags": {
      "code": "PROBLEM 38",
      "originalName": "Drowning",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "DOOM: Haz una prueba rápida de Atletismo (Dificultad 8). Si fallas, mueres. Si tienes éxito, descarta esta carta.",
      "clearCondition": "Supera la prueba de Atletismo (Dificultad 8) para salir a la superficie.",
      "ticks": {
        "enabled": false,
        "current": 0,
        "max": 3,
        "penaltyPerTick": false
      },
      "tags": {
        "continuity": false,
        "doom": true,
        "seriousInjury": false,
        "clue": false,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 39",
    "name": "PROBLEM 39 — Marcada por el Demonio (Demon-Marked)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-39.webp",
    "description": "Cafone te ha dejado una extraña marca ocultista. Probablemente no sea nada... tampoco es que vayas a tener que encontrar la forma de exorcizar a un demonio, ¿verdad?",
    "flags": {
      "code": "PROBLEM 39",
      "originalName": "Demon-Marked",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Estigma ocultista dejado por Siro Cafone.",
      "clearCondition": "Encuentra un ritual o experto ocultista capaz de purgar la marca.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 40",
    "name": "PROBLEM 40 — A Través del Infierno (Through Hell)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-40.webp",
    "description": "Te abriste paso luchando a través de las defensas ocultistas de Cafone, y dejó huella en tu mente.",
    "flags": {
      "code": "PROBLEM 40",
      "originalName": "Through Hell",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD, SOMBRA (SHADOW): Al final del próximo escenario, haz una prueba rápida de Frialdad (Cool, Dificultad 8); si tienes éxito, puedes descartar esta carta.",
      "clearCondition": "Supera una prueba de Frialdad (Dificultad 8) al final del siguiente escenario.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 41",
    "name": "PROBLEM 41 — Algo No Cuadra... (Something Feels Off...)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-41.webp",
    "description": "Cafone está muerto... pero hay algo que no encaja.",
    "flags": {
      "code": "PROBLEM 41",
      "originalName": "Something Feels Off...",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Hay un cabo suelto oculto tras la muerte de Cafone.",
      "clearCondition": "Anúlala descubriendo qué está pasando realmente.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 42",
    "name": "PROBLEM 42 — Cuenta Atrás (Ticking Clock)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-42.webp",
    "description": "El tiempo corre en tu contra.",
    "flags": {
      "code": "PROBLEM 42",
      "originalName": "Ticking Clock",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "trouble",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "REPRESALIA (BLOWBACK): Pon 1 marca en esta carta cada vez que tires un dado. Si acumula 6 marcas, informa al GM. Puedes quitar 1 marca descartando cualquier Ventaja (Edge).",
      "clearCondition": "Descarta Ventajas para reducir las marcas o resuelve la amenaza antes de llegar a 6.",
      "ticks": {
        "enabled": true,
        "current": 0,
        "max": 6,
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 43",
    "name": "PROBLEM 43 — Carnicería en Alta Mar (Carnage On The Seas)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-43.webp",
    "description": "Cortes, moratones, nudillos despellejados y un par de heridas de bala superficiales. Pero deberías ver cómo quedaron los otros...",
    "flags": {
      "code": "PROBLEM 43",
      "originalName": "Carnage On The Seas",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Heridas de combate tras el asalto en el yate.",
      "clearCondition": "Recibe curas o descansa tras el combate.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 44",
    "name": "PROBLEM 44 — Enjambre de Ratas (Rat Swarm)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-44.webp",
    "description": "Te sigue un enjambre de ratas que informa de cada uno de tus movimientos a Thorn.",
    "flags": {
      "code": "PROBLEM 44",
      "originalName": "Rat Swarm",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "VAMPIRO: No puedes usar maniobras (Stunts) de Infiltración, Evasión ni Preparación mientras tengas esta carta.",
      "clearCondition": "Anúlala deshaciéndote de las ratas espía.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 45",
    "name": "PROBLEM 45 — Sonada (Punch-Drunk)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-45.webp",
    "description": "Estás aturdida y tambaleándote por los golpes.",
    "flags": {
      "code": "PROBLEM 45",
      "originalName": "Punch-Drunk",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -1,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA (INJURY): Aturdimiento físico por impactos.",
      "clearCondition": "Recupérate o descansa.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 1",
    "name": "EDGE 1 — Como la Palma de una Mano Muerta (Like The Back Of A Dead Hand)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-01.webp",
    "description": "Has reconocido a fondo la Necrópolis de Olšany con antelación.",
    "flags": {
      "code": "EDGE 1",
      "originalName": "Like The Back Of A Dead Hand",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para lograr un Avance (Advance) automático en cualquier reto que no sea de combate, o para anular cualquier problema (que no sea Herida) en el cementerio.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 2",
    "name": "EDGE 2 — Recuerdos de la Cosa de la Cripta (Memories Of The Crypt Thing)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-02.webp",
    "description": "Tienes vagos recuerdos de un monstruo mata-vampiros encerrado en una cripta.",
    "flags": {
      "code": "EDGE 2",
      "originalName": "Memories Of The Crypt Thing",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en cualquier pelea contra la criatura.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 46",
    "name": "PROBLEM 46 — La Que Escapó (The One That Got Away)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-46.webp",
    "description": "Lady Escadi logró escapar: tienes otro vampiro más al que dar caza.",
    "flags": {
      "code": "PROBLEM 46",
      "originalName": "The One That Got Away",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "shadow",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: La poderosa vampira Lady Escadi sigue con vida y te tiene en su lista negra.",
      "clearCondition": "Da caza y destruye a Lady Escadi en una futura operación.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 47",
    "name": "PROBLEM 47 — Con tu Último Aliento (With Your Last Breath)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-47.webp",
    "description": "Lo has dado todo en este combate.",
    "flags": {
      "code": "PROBLEM 47",
      "originalName": "With Your Last Breath",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "injury",
      "duration": "ongoing",
      "modifier": -2,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "HERIDA GRAVE (SERIOUS INJURY) / DOOM: Si no puedes anular este problema antes del final de la escena, mueres.",
      "clearCondition": "Recibe auxilio médico inmediato antes de que termine la escena.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 3",
    "name": "EDGE 3 — Coche Sospechoso (Suspicious Car)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-03.webp",
    "description": "Hay un coche caro patrullando despacio por la calle cerca del cementerio. Algo en él no encaja y te pone en guardia.",
    "flags": {
      "code": "EDGE 3",
      "originalName": "Suspicious Car",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PISTA (CLUE): Vehículo de vigilancia detectado junto al cementerio.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 4",
    "name": "EDGE 4 — Primera Sangre (First Blood)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-04.webp",
    "description": "Lograste herir a la criatura de la Cripta.",
    "flags": {
      "code": "EDGE 4",
      "originalName": "First Blood",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en una pelea futura contra la criatura, o para anular un Problema de Sombra (Shadow).",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "PROBLEM 48",
    "name": "PROBLEM 48 — Gravemente Quemada (Badly Burned)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/problem-48.webp",
    "description": "Has quedado expuesta públicamente como traficante de personas y asesina múltiple: todos tus crímenes bajo el control de Jovitzo han salido a la luz.",
    "flags": {
      "code": "PROBLEM 48",
      "originalName": "Badly Burned",
      "renderMode": "parametric",
      "cardType": "problem",
      "category": "heat",
      "duration": "ongoing",
      "modifier": -3,
      "dicePenalty": 0,
      "bonusDice": 0,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD, ALERTA (HEAT): Cuenta como TRES Problemas de Alerta (Heat).",
      "clearCondition": "Anúlala creando una identidad completamente nueva para ti y «matando» oficialmente a Leyla Khan.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 5",
    "name": "EDGE 5 — El Sendero de las Cabras (The Goat Path)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-05.webp",
    "description": "Has leído un libro perturbador, aunque incoherente, sobre demonios e iluminación vampírica escrito por un ocultista llamado Siro Cafone.",
    "flags": {
      "code": "EDGE 5",
      "originalName": "The Goat Path",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PISTA (CLUE): El tratado ocultista de Siro Cafone conecta con tu sueño del castillo.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 6",
    "name": "EDGE 6 — La Ventana de Oportunidad (The Window)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-06.webp",
    "description": "Conoces el momento exacto para infiltrarte en Musil & Sons.",
    "flags": {
      "code": "EDGE 6",
      "originalName": "The Window",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Ventaja táctica para el allanamiento en Musil & Sons (+1d6).",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 7",
    "name": "EDGE 7 — La Lista de Clientes (The Client List)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-07.webp",
    "description": "Tienes un alijo de documentos relacionados con las operaciones financieras de la Conspiración.",
    "flags": {
      "code": "EDGE 7",
      "originalName": "The Client List",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Archivos financieros comprometedores de la Conspiración.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 8",
    "name": "EDGE 8 — Los Papeles Malteses (The Maltese Papers)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-08.webp",
    "description": "Musil & Sons está canalizando dinero hacia la Iglesia de San Silvestre en Malta.",
    "flags": {
      "code": "EDGE 8",
      "originalName": "The Maltese Papers",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "PISTA (CLUE): Rastro de dinero que conduce a la Iglesia de San Silvestre en Malta.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 9",
    "name": "EDGE 9 — El Teléfono del Bombardero (The Bomber’s Phone)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-09.webp",
    "description": "Tienes el teléfono utilizado para activar el artefacto incendiario. Cuando llamen para detonarlo, podrás rastrear la llamada.",
    "flags": {
      "code": "EDGE 9",
      "originalName": "The Bomber’s Phone",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Permite rastrear al responsable del artefacto incendiario.",
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
        "clue": true,
        "vampire": false,
        "blowback": false,
        "counterTarget": ""
      },
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 10",
    "name": "EDGE 10 — Segunda Sangre (Second Blood)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-10.webp",
    "description": "Volviste a herir a la criatura de la Cripta.",
    "flags": {
      "code": "EDGE 10",
      "originalName": "Second Blood",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en una pelea futura contra la criatura, o para anular un Problema de Sombra (Shadow).",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 11",
    "name": "EDGE 11 — Un Sobre Lleno de Dinero (An Envelope Full Of Money)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-11.webp",
    "description": "Es un sobre repleto de billetes. Euros, en su mayoría.",
    "flags": {
      "code": "EDGE 11",
      "originalName": "An Envelope Full Of Money",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Dinero en efectivo listo para sobornos, compras o emergencias (+1d6).",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 12",
    "name": "EDGE 12 — La Poción de Agua de Rosas (The Rosewater Potion)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-12.webp",
    "description": "Este elixir bloquea la influencia mental vampírica durante un breve periodo.",
    "flags": {
      "code": "EDGE 12",
      "originalName": "The Rosewater Potion",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para tener éxito automático (Hold) en pruebas de Frialdad (Cool) contra control mental vampírico durante toda una escena.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 13",
    "name": "EDGE 13 — El Glog Vivo (Living Glog)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-13.webp",
    "description": "Has conservado el cuerpo letárgico y cadavérico del Glog, un ex-vampiro. ¿Qué secretos podría guardar si encuentras la forma de comunicarte con él?",
    "flags": {
      "code": "EDGE 13",
      "originalName": "Living Glog",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: El cuerpo en letargo del Glog permanece bajo tu custodia.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 14",
    "name": "EDGE 14 — El Glog Muerto (Dead Glog)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-14.webp",
    "description": "Destruiste definitivamente a la criatura de la cripta.",
    "flags": {
      "code": "EDGE 14",
      "originalName": "Dead Glog",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Al final del escenario, descártala para anular cualquier Problema.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 15",
    "name": "EDGE 15 — Un Paso por Delante (Ahead Of The Game)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-15.webp",
    "description": "Vas un paso por delante de tus enemigos.",
    "flags": {
      "code": "EDGE 15",
      "originalName": "Ahead Of The Game",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para reducir tu puntuación de Sombra (Shadow) en 2 durante una escena.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 16",
    "name": "EDGE 16 — Ventaja: Khan (Advantage: Khan)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-16.webp",
    "description": "Has mirado a Thorn a los ojos y sabes que puedes con él.",
    "flags": {
      "code": "EDGE 16",
      "originalName": "Advantage: Khan",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en cualquier enfrentamiento que involucre a Thorn.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 17",
    "name": "EDGE 17 — Como un Fantasma (Like A Ghost)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-17.webp",
    "description": "Llegaste a Malta sin ser detectada.",
    "flags": {
      "code": "EDGE 17",
      "originalName": "Like A Ghost",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para suprimir toda tu Sombra (Shadow) o Alerta (Heat) durante una escena.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 18",
    "name": "EDGE 18 — Entrada Secreta (Secret Entrance)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-18.webp",
    "description": "Has encontrado un acceso secreto a las catacumbas bajo San Silvestre.",
    "flags": {
      "code": "EDGE 18",
      "originalName": "Secret Entrance",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para lograr un Avance (Advance) automático en cualquier prueba de Infiltración en las catacumbas. Si sales de la iglesia sin haberla usado, ganas 1 Push.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 19",
    "name": "EDGE 19 — Disfraz Perfecto (Perfect Disguise)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-19.webp",
    "description": "Has encontrado la forma de disfrazarte para colarte en la iglesia.",
    "flags": {
      "code": "EDGE 19",
      "originalName": "Perfect Disguise",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para lograr un Avance (Advance) automático en cualquier prueba de Tapadera (Cover) en las catacumbas. Si sales de la iglesia sin haberla usado, ganas 1 Push.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 20",
    "name": "EDGE 20 — Diezmando el Rebaño (Thinning The Herd)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-20.webp",
    "description": "Ya has eliminado a un buen grupo de sectarios.",
    "flags": {
      "code": "EDGE 20",
      "originalName": "Thinning The Herd",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en cualquier enfrentamiento Físico en las catacumbas. Si sales de la iglesia sin haberla usado, ganas 1 Push.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 21",
    "name": "EDGE 21 — El Factor Sorpresa (The Element Of Surprise)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-21.webp",
    "description": "Atacas desde donde menos lo esperan.",
    "flags": {
      "code": "EDGE 21",
      "originalName": "The Element Of Surprise",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala por +1d6 en cualquier enfrentamiento (debes usarla como el primer dado que tires).",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 22",
    "name": "EDGE 22 — Mi Amigo el Glog (My Buddy The Glog)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-22.webp",
    "description": "De acuerdo, formas equipo con un monstruo mata-vampiros.",
    "flags": {
      "code": "EDGE 22",
      "originalName": "My Buddy The Glog",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA: Gasta 1 Push para ganar +2d6 en cualquier reto Físico. Descártala para anular cualquier Problema, o al final del escenario.",
      "clearCondition": "Continua durante el escenario.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 23",
    "name": "EDGE 23 — El Cuchillo Rojo (The Red Knife)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-23.webp",
    "description": "Un cuchillo ritual impregnado de poder oscuro.",
    "flags": {
      "code": "EDGE 23",
      "originalName": "The Red Knife",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 2,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "SOMBRA: Otorga +2 a cualquier tirada de Pelea (Fighting). Al final del escenario, haz una prueba de Frialdad (Cool) contra dificultad igual a tu Sombra actual; si fallas, el espíritu del cuchillo te posee.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 24",
    "name": "EDGE 24 — Arma Oculta (Holdout Weapon)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-24.webp",
    "description": "Llevas un arma escondida de reserva.",
    "flags": {
      "code": "EDGE 24",
      "originalName": "Holdout Weapon",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "mastery",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 2,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Puedes hacer una maniobra (Stunt) con Preparación (Preparedness) en un enfrentamiento de Pelea (Fighting) y duplicar el resultado del dado. Descártala tras usarla.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 25",
    "name": "EDGE 25 — El Legado de Cafone (Cafone’s Legacy)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-25.webp",
    "description": "Te has hecho con el control de una extensa biblioteca ocultista.",
    "flags": {
      "code": "EDGE 25",
      "originalName": "Cafone’s Legacy",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "generic",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Mientras tengas esta carta, posees la habilidad de investigación Estudios Ocultistas (Occult Studies).",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 26",
    "name": "EDGE 26 — Apuesta de Redención (Redemption Gamble)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-26.webp",
    "description": "Liberaste a Terrence Thorn del control vampírico, igual que tú te liberaste en Budapest. ¿Será un aliado o volverá a caer bajo el influjo de los No-Muertos?",
    "flags": {
      "code": "EDGE 26",
      "originalName": "Redemption Gamble",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "luck",
      "duration": "ongoing",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "CONTINUIDAD: Terrence Thorn está libre y en deuda contigo.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 27",
    "name": "EDGE 27 — La Última Línea (The Last Line)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-27.webp",
    "description": "Has roto la última línea de defensa de Lady Escadi.",
    "flags": {
      "code": "EDGE 27",
      "originalName": "The Last Line",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 4,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para obtener un bonificador de +4 en cualquier enfrentamiento contra ella, o para anular cualquier Problema.",
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
      "sceneRef": "The Best of Intentions"
    }
  },
  {
    "code": "EDGE 28",
    "name": "EDGE 28 — Sin Cuartel (No Quarter)",
    "img": "modules/gumshoe-one-to-one-cards/assets/cards/the-best-of-intentions/edge-28.webp",
    "description": "Nada te apartará de tu misión de venganza.",
    "flags": {
      "code": "EDGE 28",
      "originalName": "No Quarter",
      "renderMode": "parametric",
      "cardType": "edge",
      "category": "counter",
      "duration": "single",
      "modifier": 0,
      "dicePenalty": 0,
      "bonusDice": 1,
      "investigativeAbilities": "",
      "generalAbilities": "",
      "mechanicalEffect": "Descártala para anular y descartar cualquier Problema de Sombra (Shadow).",
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
      "sceneRef": "The Best of Intentions"
    }
  }
];
