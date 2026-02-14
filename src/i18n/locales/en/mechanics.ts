export default {
    description: "Explore a sandbox with a variety of game mechanics experiments. Each example is a technical demonstration ready for analysis and application in development.",
    noResults: "No mechanics found with these filters.",
    srOnly: "Game Mechanics and Prototypes Collection",
    interactiveDemo: "interactive demo",
    demoTitle: "Demo of",
    demoDescription: "This is a dynamically generated page for the mechanic:",
    demoPlaceholder: "(The canvas or iframe of the prototype would go here)",
    backLink: "Back to Mechanics",
    github: "GitHub",
    code: "Code",
    howItWorksTitle: "How it works",
    controlsTitle: "Controls",

    slingshot: {
        title: "Slingshot",
        description: "drag, stretch, and launch. slingshot physics with dynamic bounces and precise touch control.",
        tags: ["physics", "touch", "arcade"],
        instruction: "Drag and Release",
        subInstruction: "Launch the character",
        howItWorks: {
            spring: "Spring physics for launching (Hooke's Law).",
            bounce: "Bounces with energy loss (damping).",
            deformation: "Visual deformation (Squash & Stretch) based on velocity."
        },
        controls: {
            drag: "Drag",
            aim: "Tension and Aim"
        }
    },
    swipe: {
        title: "Swipe Gesture",
        description: "detects swipe gestures in 4 or 8 directions with velocity tracking and configurable sensitivity.",
        tags: ["input", "touch", "utility"]
    },
    "gravity-well": {
        title: "Gravity Well",
        description: "particle simulation with interactive gravity wells. create force fields and watch the chaos.",
        tags: ["physics", "particles", "simulation"]
    },
    flocking: {
        title: "Flocking",
        description: "flocking behavior simulation. separation, alignment, and cohesion in action.",
        tags: ["ai", "simulation", "nature"]
    },
    "tap-fly": {
        title: "Tap & Fly",
        description: "one-tap control. defy gravity and dodge obstacles with precision.",
        tags: ["arcade", "physics"]
    },
    "hold-jump": {
        title: "Hold to Jump",
        description: "charge your jump. control the force and trajectory to reach new heights.",
        tags: ["physics", "platformer", "input"]
    },
    clicker: {
        title: "Clicker",
        description: "incremental mechanics. click, earn resources, and automate your progress.",
        tags: ["idle", "incremental", "ui"]
    },
    autorunner: {
        title: "Autorunner",
        description: "infinite race. jump over obstacles and platforms in this procedural runner.",
        tags: ["arcade", "procedural", "platformer"]
    },
    platformer: {
        title: "Platformer",
        description: "fluid platformer mechanics. variable jump, double jump, and slide.",
        tags: ["platformer", "physics", "controls"]
    },
    "size-matters": {
        title: "Size Matters",
        description: "size matters. grow to break, shrink to float. variable mass physics.",
        tags: ["physics", "puzzle", "unique"]
    },
    "one-bullet-shooter": {
        title: "One Bullet Shooter",
        description: "one shot. one chance. retrieve your bullet to survive.",
        tags: ["shooter", "puzzle", "action"]
    },
    echolocation: {
        title: "Echolocation",
        description: "navigate in the dark. use sound to reveal the invisible world.",
        tags: ["puzzle", "experimental", "audio"]
    },
    "vibrator-cracker": {
        title: "Vibrator Cracker",
        description: "feel the mechanism. use vibration to find the safe combination.",
        tags: ["haptics", "experimental", "mobile"]
    },
    "magnetic-finger": {
        title: "Magnetic Finger",
        description: "magnetic control. attract or repel particles with your fingertips.",
        tags: ["physics", "particles", "input"]
    },
    "color-chameleon": {
        title: "Color Chameleon",
        description: "active camouflage. change your color to blend with the environment and survive.",
        tags: ["stealth", "colors", "action"]
    },
    "the-barrier": {
        title: "The Barrier",
        description: "flow control. draw lines to redirect a cascade of particles.",
        tags: ["physics", "drawing", "simulation"]
    },
    "finger-twister": {
        title: "Finger Twister",
        description: "multitouch chaos. use all your fingers to keep the nodes active.",
        tags: ["multitouch", "arcade", "chaos"]
    },
    "gravity-flip": {
        title: "Gravity Flip",
        description: "the floor is the ceiling. invert gravity to dodge obstacles in this psychedelic runner.",
        tags: ["arcade", "physics", "runner"]
    },
    "neon-grapple": {
        title: "Neon Grapple",
        description: "minimalist spiderman. swing through an infinite world using energy hooks.",
        tags: ["physics", "skill", "flow"]
    },
    "rhythm-jump": {
        title: "Rhythm Jump",
        description: "alternate your color to survive. cyan and magenta are your only allies in this precision runner.",
        tags: ["color", "runner", "coordination"]
    },
    "draw-the-path": {
        title: "Draw The Path",
        description: "protect the runner. draw shields against meteorites and bridges over the void.",
        tags: ["drawing", "creativity", "reflexes"]
    },
    "viewport-collision": {
        title: "Viewport Edge Collision",
        description: "dynamic collision. resize the window to hit objects and increase pressure.",
        tags: ["physics", "browser", "experimental"]
    },
    "bullet-time-painting": {
        title: "Bullet-Time Painting",
        description: "plan your movements and shots in paused time and execute them in 1-second bursts.",
        tags: ["tactics", "bullet-time", "physics"]
    },
    "momentum-transfer": {
        title: "Momentum Transfer",
        description: "you don't kill enemies by hitting them, but by transferring your speed.",
        tags: ["physics", "billiards", "arcade"]
    }
}
