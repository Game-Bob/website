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
        tags: ["input", "táctil", "utilidad"]
    },
    "gravity-well": {
        title: "Gravity Well",
        description: "simulación de partículas con pozos de gravedad interactivos. crea campos de fuerza y observa el caos.",
        tags: ["física", "partículas", "simulación"]
    },
    flocking: {
        title: "Flocking",
        description: "simulación de comportamiento de bandada. separación, alineación y cohesión en acción.",
        tags: ["ia", "simulación", "naturaleza"]
    },
    "tap-fly": {
        title: "Tap & Fly",
        description: "control de un toque. desafía la gravedad y esquiva obstáculos con precisión.",
        tags: ["arcade", "física"]
    },
    "hold-jump": {
        title: "Hold to Jump",
        description: "carga tu salto. controla la fuerza y la trayectoria para alcanzar nuevas alturas.",
        tags: ["física", "plataformas", "input"]
    },
    clicker: {
        title: "Clicker",
        description: "mecánica incremental. haz clic, gana recursos y automatiza tu progreso.",
        tags: ["idle", "incremental", "ui"]
    },
    autorunner: {
        title: "Autorunner",
        description: "carrera infinita. salta obstáculos y plataformas en este runner procedural.",
        tags: ["arcade", "procedural", "plataformas"]
    },
    platformer: {
        title: "Platformer",
        description: "mecánicas de plataformas fluidas. salto variable, doble salto y deslizamiento.",
        tags: ["plataformas", "física", "controles"]
    },
    "size-matters": {
        title: "Size Matters",
        description: "el tamaño importa. crece para romper, encoge para flotar. física de masa variable.",
        tags: ["física", "puzzle", "único"]
    },
    "one-bullet-shooter": {
        title: "One Bullet Shooter",
        description: "un disparo. una oportunidad. recupera tu bala para sobrevivir.",
        tags: ["shooter", "puzzle", "acción"]
    },
    echolocation: {
        title: "Echolocation",
        description: "navega en la oscuridad. usa el sonido para revelar el mundo invisible.",
        tags: ["puzzle", "experimental", "audio"]
    },
    "vibrator-cracker": {
        title: "Vibrator Cracker",
        description: "siente el mecanismo. usa la vibración para encontrar la combinación de la caja fuerte.",
        tags: ["haptics", "experimental", "mobile"]
    },
    "magnetic-finger": {
        title: "Magnetic Finger",
        description: "control magnético. atrae o repele partículas con la punta de tus dedos.",
        tags: ["física", "partículas", "input"]
    },
    "color-chameleon": {
        title: "Color Chameleon",
        description: "camuflaje activo. cambia tu color para fundirte con el entorno y sobrevivir.",
        tags: ["sigilo", "colores", "acción"]
    },
    "the-barrier": {
        title: "The Barrier",
        description: "control de flujo. dibuja líneas para redirigir una cascada de partículas.",
        tags: ["física", "dibujo", "simulación"]
    },
    "finger-twister": {
        title: "Finger Twister",
        description: "caos multitáctil. usa todos tus dedos para mantener los nodos activos.",
        tags: ["multitouch", "arcade", "caos"]
    },
    "gravity-flip": {
        title: "Gravity Flip",
        description: "el suelo es el techo. invierte la gravedad para esquivar obstáculos en este runner psicodélico.",
        tags: ["arcade", "física", "runner"]
    },
    "neon-grapple": {
        title: "Neon Grapple",
        description: "spiderman minimalista. balancéate por un mundo infinito usando ganchos de energía.",
        tags: ["física", "skill", "flow"]
    },
    "rhythm-jump": {
        title: "Rhythm Jump",
        description: "alterna tu color para sobrevivir. cyan y magenta son tus únicos aliados en este runner de precisión.",
        tags: ["color", "runner", "coordinación"]
    },
    "draw-the-path": {
        title: "Draw The Path",
        description: "protege al corredor. dibuja escudos contra meteoritos y puentes sobre el vacío.",
        tags: ["dibujo", "creatividad", "reflejos"]
    },
    "viewport-collision": {
        title: "Viewport Edge Collision",
        description: "colisión dinámica. redimensiona la ventana para golpear objetos y aumentar la presión.",
        tags: ["física", "browser", "experimental"]
    },
    "bullet-time-painting": {
        title: "Bullet-Time Painting",
        description: "planifica tus movimientos y disparos en tiempo pausado y ejecútalos en ráfagas de 1 segundo.",
        tags: ["táctica", "bullet-time", "física"]
    },
    "momentum-transfer": {
        title: "Momentum Transfer",
        description: "no matas enemigos golpeándolos, sino transfiriéndoles tu velocidad.",
        tags: ["física", "billar", "arcade"]
    }
}
