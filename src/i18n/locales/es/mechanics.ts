export default {
    description: "Explora un sandbox con una variedad de experimentos de mecánicas de juego. Cada ejemplo es una demostración técnica lista para su análisis y aplicación en desarrollo.",
    noResults: "No se encontraron mecánicas con estos filtros.",
    srOnly: "Colección de Mecánicas de Juego y Prototipos",
    interactiveDemo: "demo interactiva",
    demoTitle: "Demo de",
    demoDescription: "Esta es una página generada dinámicamente para la mecánica:",
    demoPlaceholder: "(Aquí iría el canvas o el iframe del prototipo)",
    backLink: "Volver a Mecánicas",
    github: "GitHub",
    code: "Código",
    howItWorksTitle: "Cómo funciona",
    controlsTitle: "Controles",

    slingshot: {
        title: "Slingshot",
        description: "arrastra, estira y lanza. física de tirachinas con rebotes dinámicos y control táctil preciso.",
        tags: ["física", "táctil", "arcade"],
        instruction: "Arrastra y Suelta",
        subInstruction: "Lanza al personaje",
        howItWorks: {
            spring: "Física de muelles para el lanzamiento (Ley de Hooke).",
            bounce: "Rebotes con pérdida de energía (amortiguación).",
            deformation: "Deformación visual (Squash & Stretch) basada en la velocidad."
        },
        controls: {
            drag: "Arrastrar / Drag",
            aim: "Tensar y Apuntar"
        }
    },
    swipe: {
        title: "Swipe Gesture",
        description: "detecta gestos de deslizamiento en 4 u 8 direcciones con seguimiento de velocidad y sensibilidad configurable.",
        tags: ["input", "táctil", "utilidad"],
        howItWorks: {
            velocity: "Seguimiento de velocidad para intensidad del gesto.",
            direction: "Detección de 4 u 8 direcciones.",
            sensitivity: "Umbrales de sensibilidad configurables."
        },
        controls: {
            swipe: "Deslizar",
            gesture: "Gesto en cualquier dirección"
        }
    },
    "gravity-well": {
        title: "Gravity Well",
        description: "simulación de partículas con pozos de gravedad interactivos. crea campos de fuerza y observa el caos.",
        tags: ["física", "partículas", "simulación"],
        howItWorks: {
            gravity: "Los campos de fuerza gravitacional atraen partículas.",
            nbody: "Simulación N-body para atracción realista.",
            interaction: "Crea pozos con clic/toque."
        },
        controls: {
            click: "Clic / Toque",
            create: "Crear Pozos de Gravedad"
        }
    },
    flocking: {
        title: "Flocking",
        description: "simulación de comportamiento de bandada. separación, alineación y cohesión en acción.",
        tags: ["ia", "simulación", "naturaleza"],
        howItWorks: {
            separation: "Los agentes evitan agruparse con vecinos.",
            alignment: "Los agentes se orientan hacia la dirección promedio.",
            cohesion: "Los agentes se mueven hacia el centro de masa."
        },
        controls: {
            observe: "Observar",
            simulation: "Simulación Automática"
        }
    },
    "tap-fly": {
        title: "Tap & Fly",
        description: "control de un toque. desafía la gravedad y esquiva obstáculos con precisión.",
        tags: ["arcade", "física"],
        howItWorks: {
            gravity: "Fuerza de gravedad constante hacia abajo.",
            impulse: "El toque aplica impulso hacia arriba.",
            collision: "Detección de colisión con obstáculos."
        },
        controls: {
            tap: "Toque / Clic",
            fly: "Aletear hacia arriba"
        }
    },
    "hold-jump": {
        title: "Hold to Jump",
        description: "carga tu salto. controla la fuerza y la trayectoria para alcanzar nuevas alturas.",
        tags: ["física", "plataformas", "input"],
        howItWorks: {
            charge: "Mantén presionado para acumular poder de salto.",
            trajectory: "Cálculo de trayectoria parabólica.",
            variable: "Altura de salto variable según la carga."
        },
        controls: {
            hold: "Mantener Presionado",
            release: "Soltar para Saltar"
        }
    },
    clicker: {
        title: "Clicker",
        description: "mecánica incremental. haz clic, gana recursos y automatiza tu progreso.",
        tags: ["idle", "incremental", "ui"],
        howItWorks: {
            accumulation: "Acumulación de recursos por clic.",
            automation: "Ingresos automatizados con el tiempo.",
            upgrades: "Sistema de mejoras para escalar."
        },
        controls: {
            click: "Clic",
            earn: "Ganar Recursos"
        }
    },
    autorunner: {
        title: "Autorunner",
        description: "carrera infinita. salta obstáculos y plataformas en este runner procedural.",
        tags: ["arcade", "procedural", "plataformas"],
        howItWorks: {
            procedural: "Generación procedural de obstáculos.",
            scrolling: "Fondo de desplazamiento continuo.",
            collision: "Colisión con plataformas y obstáculos."
        },
        controls: {
            jump: "Espacio / Toque",
            avoid: "Saltar Obstáculos"
        }
    },
    platformer: {
        title: "Platformer",
        description: "mecánicas de plataformas fluidas. salto variable, doble salto y deslizamiento.",
        tags: ["plataformas", "física", "controles"],
        howItWorks: {
            variable: "Altura de salto variable según la entrada.",
            double: "Doble salto para movilidad extendida.",
            friction: "Fricción y detección de colisiones."
        },
        controls: {
            arrows: "Flechas",
            jump: "Espacio para Saltar"
        }
    },
    "size-matters": {
        title: "Size Matters",
        description: "el tamaño importa. crece para romper, encoge para flotar. física de masa variable.",
        tags: ["física", "puzzle", "único"],
        howItWorks: {
            mass: "La masa afecta la gravedad y la física.",
            buoyancy: "Más pequeño = flotar, Más grande = hundir.",
            interaction: "El tamaño determina la interacción con objetos."
        },
        controls: {
            grow: "Clic",
            shrink: "Cambiar Tamaño"
        }
    },
    "one-bullet-shooter": {
        title: "One Bullet Shooter",
        description: "un disparo. una oportunidad. recupera tu bala para sobrevivir.",
        tags: ["shooter", "puzzle", "acción"],
        howItWorks: {
            single: "Solo una bala disponible a la vez.",
            retrieve: "Debes recuperar la bala para disparar de nuevo.",
            strategy: "Disparo estratégico y posicionamiento."
        },
        controls: {
            click: "Clic",
            shoot: "Disparar / Recuperar Bala"
        }
    },
    echolocation: {
        title: "Echolocation",
        description: "navega en la oscuridad. usa el sonido para revelar el mundo invisible.",
        tags: ["puzzle", "experimental", "audio"],
        howItWorks: {
            pulse: "Los pulsos de sonido revelan el entorno.",
            fade: "La visión se desvanece con el tiempo.",
            navigation: "Usa el sonido para navegar en la oscuridad."
        },
        controls: {
            click: "Clic",
            emit: "Emitir Pulso de Sonido"
        }
    },
    "vibrator-cracker": {
        title: "Vibrator Cracker",
        description: "siente el mecanismo. usa la vibración para encontrar la combinación de la caja fuerte.",
        tags: ["haptics", "experimental", "mobile"],
        howItWorks: {
            haptic: "La intensidad de vibración indica proximidad.",
            combination: "Encuentra valores correctos mediante retroalimentación.",
            feedback: "La retroalimentación háptica guía al jugador."
        },
        controls: {
            rotate: "Arrastrar / Rotar",
            crack: "Encontrar la Combinación"
        }
    },
    "magnetic-finger": {
        title: "Magnetic Finger",
        description: "control magnético. atrae o repele partículas con la punta de tus dedos.",
        tags: ["física", "partículas", "input"],
        howItWorks: {
            polarity: "Cambia entre atraer y repeler.",
            force: "Los campos de fuerza afectan las partículas.",
            physics: "Física magnética realista."
        },
        controls: {
            drag: "Clic / Arrastrar",
            control: "Atraer o Repeler"
        }
    },
    "color-chameleon": {
        title: "Color Chameleon",
        description: "camuflaje activo. cambia tu color para fundirte con el entorno y sobrevivir.",
        tags: ["sigilo", "colores", "acción"],
        howItWorks: {
            matching: "Coincide con el color del entorno para sobrevivir.",
            detection: "Detección de color para camuflaje.",
            stealth: "Invisible cuando los colores coinciden."
        },
        controls: {
            tap: "Toque",
            cycle: "Cambiar Colores"
        }
    },
    "the-barrier": {
        title: "The Barrier",
        description: "control de flujo. dibuja líneas para redirigir una cascada de partículas.",
        tags: ["física", "dibujo", "simulación"],
        howItWorks: {
            drawing: "Dibuja líneas que actúan como barreras.",
            collision: "Las partículas colisionan con las líneas dibujadas.",
            flow: "Redirige el flujo de partículas dinámicamente."
        },
        controls: {
            draw: "Dibujar",
            redirect: "Crear Barreras"
        }
    },
    "finger-twister": {
        title: "Finger Twister",
        description: "caos multitáctil. usa todos tus dedos para mantener los nodos activos.",
        tags: ["multitouch", "arcade", "caos"],
        howItWorks: {
            multitouch: "Detecta múltiples toques simultáneos.",
            countdown: "Los nodos cuentan hacia atrás cuando no se tocan.",
            challenge: "Mantén todos los nodos activos simultáneamente."
        },
        controls: {
            fingers: "Múltiples Dedos",
            touch: "Tocar Todos los Nodos"
        }
    },
    "gravity-flip": {
        title: "Gravity Flip",
        description: "el suelo es el techo. invierte la gravedad para esquivar obstáculos en este runner psicodélico.",
        tags: ["arcade", "física", "runner"],
        howItWorks: {
            inversion: "La gravedad se invierte al comando.",
            runner: "Runner infinito con obstáculos.",
            timing: "Timing preciso para evitar obstáculos."
        },
        controls: {
            tap: "Toque / Espacio",
            flip: "Invertir Gravedad"
        }
    },
    "neon-grapple": {
        title: "Neon Grapple",
        description: "spiderman minimalista. balancéate por un mundo infinito usando ganchos de energía.",
        tags: ["física", "skill", "flow"],
        howItWorks: {
            rope: "Física de cuerda para balanceo realista.",
            momentum: "Conservación de momento durante el balanceo.",
            energy: "Sistema de gancho basado en energía."
        },
        controls: {
            click: "Clic",
            grapple: "Enganchar y Balancear"
        }
    },
    "rhythm-jump": {
        title: "Rhythm Jump",
        description: "alterna tu color para sobrevivir. cyan y magenta son tus únicos aliados en este runner de precisión.",
        tags: ["color", "runner", "coordinación"],
        howItWorks: {
            matching: "Coincide con el color del obstáculo para pasar.",
            alternating: "Alterna entre cyan y magenta.",
            timing: "Timing preciso para cambios de color."
        },
        controls: {
            tap: "Toque",
            switch: "Cambiar Color"
        }
    },
    "draw-the-path": {
        title: "Draw The Path",
        description: "protege al corredor. dibuja escudos contra meteoritos y puentes sobre el vacío.",
        tags: ["dibujo", "creatividad", "reflejos"],
        howItWorks: {
            drawing: "Dibuja plataformas y escudos en tiempo real.",
            collision: "Los objetos dibujados tienen física de colisión.",
            protection: "Protege al corredor de los peligros."
        },
        controls: {
            draw: "Dibujar",
            create: "Crear Escudos y Puentes"
        }
    },
    "viewport-collision": {
        title: "Viewport Edge Collision",
        description: "colisión dinámica. redimensiona la ventana para golpear objetos y aumentar la presión.",
        tags: ["física", "browser", "experimental"],
        howItWorks: {
            viewport: "Los límites del viewport actúan como superficies de colisión.",
            resize: "Redimensiona la ventana para colisionar con objetos.",
            pressure: "Los objetos reaccionan a la compresión."
        },
        controls: {
            resize: "Redimensionar Ventana",
            crush: "Aplastar Objetos"
        }
    },
    "bullet-time-painting": {
        title: "Bullet-Time Painting",
        description: "planifica tus movimientos y disparos en tiempo pausado y ejecútalos en ráfagas de 1 segundo.",
        tags: ["táctica", "bullet-time", "física"],
        howItWorks: {
            pause: "El tiempo se pausa para planificar.",
            recording: "Graba acciones durante la pausa.",
            execution: "Ejecuta todas las acciones en ráfagas."
        },
        controls: {
            plan: "Planificar en Pausa",
            execute: "Ejecutar Acciones"
        }
    },
    "momentum-transfer": {
        title: "Momentum Transfer",
        description: "no matas enemigos golpeándolos, sino transfiriéndoles tu velocidad.",
        tags: ["física", "billar", "arcade"],
        howItWorks: {
            transfer: "La velocidad se transfiere en colisión.",
            momentum: "Física de conservación del momento.",
            strategy: "Planificación estratégica de colisiones."
        },
        controls: {
            move: "Mover",
            collide: "Transferir Momento"
        }
    }
}
