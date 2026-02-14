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
        tags: ["input", "touch", "utility"],
        howItWorks: {
            velocity: "Velocity tracking for swipe intensity.",
            direction: "4 or 8 direction detection.",
            sensitivity: "Configurable sensitivity thresholds."
        },
        controls: {
            swipe: "Swipe",
            gesture: "Gesture in any direction"
        }
    },
    "gravity-well": {
        title: "Gravity Well",
        description: "particle simulation with interactive gravity wells. create force fields and watch the chaos.",
        tags: ["physics", "particles", "simulation"],
        howItWorks: {
            gravity: "Gravitational force fields attract particles.",
            nbody: "N-body simulation for realistic attraction.",
            interaction: "Create wells with click/tap."
        },
        controls: {
            click: "Click / Tap",
            create: "Create Gravity Wells"
        }
    },
    flocking: {
        title: "Flocking",
        description: "flocking behavior simulation. separation, alignment, and cohesion in action.",
        tags: ["ai", "simulation", "nature"],
        howItWorks: {
            separation: "Agents avoid crowding neighbors.",
            alignment: "Agents steer towards average heading.",
            cohesion: "Agents move towards center of mass."
        },
        controls: {
            observe: "Observe",
            simulation: "Automatic Simulation"
        }
    },
    "tap-fly": {
        title: "Tap & Fly",
        description: "one-tap control. defy gravity and dodge obstacles with precision.",
        tags: ["arcade", "physics"],
        howItWorks: {
            gravity: "Constant downward gravity force.",
            impulse: "Tap applies upward impulse.",
            collision: "Collision detection with obstacles."
        },
        controls: {
            tap: "Tap / Click",
            fly: "Flap upward"
        }
    },
    "hold-jump": {
        title: "Hold to Jump",
        description: "charge your jump. control the force and trajectory to reach new heights.",
        tags: ["physics", "platformer", "input"],
        howItWorks: {
            charge: "Hold to accumulate jump power.",
            trajectory: "Parabolic trajectory calculation.",
            variable: "Variable jump height based on charge."
        },
        controls: {
            hold: "Hold",
            release: "Release to Jump"
        }
    },
    clicker: {
        title: "Clicker",
        description: "incremental mechanics. click, earn resources, and automate your progress.",
        tags: ["idle", "incremental", "ui"],
        howItWorks: {
            accumulation: "Resource accumulation per click.",
            automation: "Automated income over time.",
            upgrades: "Upgrade system for scaling."
        },
        controls: {
            click: "Click",
            earn: "Earn Resources"
        }
    },
    autorunner: {
        title: "Autorunner",
        description: "infinite race. jump over obstacles and platforms in this procedural runner.",
        tags: ["arcade", "procedural", "platformer"],
        howItWorks: {
            procedural: "Procedural obstacle generation.",
            scrolling: "Continuous scrolling background.",
            collision: "Platform and obstacle collision."
        },
        controls: {
            jump: "Space / Tap",
            avoid: "Jump over Obstacles"
        }
    },
    platformer: {
        title: "Platformer",
        description: "fluid platformer mechanics. variable jump, double jump, and slide.",
        tags: ["platformer", "physics", "controls"],
        howItWorks: {
            variable: "Variable jump height based on input.",
            double: "Double jump for extended mobility.",
            friction: "Friction and collision detection."
        },
        controls: {
            arrows: "Arrow Keys",
            jump: "Space to Jump"
        }
    },
    "size-matters": {
        title: "Size Matters",
        description: "size matters. grow to break, shrink to float. variable mass physics.",
        tags: ["physics", "puzzle", "unique"],
        howItWorks: {
            mass: "Mass affects gravity and physics.",
            buoyancy: "Smaller = float, Larger = sink.",
            interaction: "Size determines object interaction."
        },
        controls: {
            grow: "Click",
            shrink: "Change Size"
        }
    },
    "one-bullet-shooter": {
        title: "One Bullet Shooter",
        description: "one shot. one chance. retrieve your bullet to survive.",
        tags: ["shooter", "puzzle", "action"],
        howItWorks: {
            single: "Only one bullet available at a time.",
            retrieve: "Must retrieve bullet to shoot again.",
            strategy: "Strategic shooting and positioning."
        },
        controls: {
            click: "Click",
            shoot: "Shoot / Retrieve Bullet"
        }
    },
    echolocation: {
        title: "Echolocation",
        description: "navigate in the dark. use sound to reveal the invisible world.",
        tags: ["puzzle", "experimental", "audio"],
        howItWorks: {
            pulse: "Sound pulses reveal environment.",
            fade: "Vision fades over time.",
            navigation: "Use sound to navigate darkness."
        },
        controls: {
            click: "Click",
            emit: "Emit Sound Pulse"
        }
    },
    "vibrator-cracker": {
        title: "Vibrator Cracker",
        description: "feel the mechanism. use vibration to find the safe combination.",
        tags: ["haptics", "experimental", "mobile"],
        howItWorks: {
            haptic: "Vibration intensity indicates proximity.",
            combination: "Find correct values through feedback.",
            feedback: "Haptic feedback guides the player."
        },
        controls: {
            rotate: "Drag / Rotate",
            crack: "Find the Combination"
        }
    },
    "magnetic-finger": {
        title: "Magnetic Finger",
        description: "magnetic control. attract or repel particles with your fingertips.",
        tags: ["physics", "particles", "input"],
        howItWorks: {
            polarity: "Switch between attract and repel.",
            force: "Force fields affect particles.",
            physics: "Realistic magnetic physics."
        },
        controls: {
            drag: "Click / Drag",
            control: "Attract or Repel"
        }
    },
    "color-chameleon": {
        title: "Color Chameleon",
        description: "active camouflage. change your color to blend with the environment and survive.",
        tags: ["stealth", "colors", "action"],
        howItWorks: {
            matching: "Match environment color to survive.",
            detection: "Color detection for camouflage.",
            stealth: "Invisible when colors match."
        },
        controls: {
            tap: "Tap",
            cycle: "Cycle Colors"
        }
    },
    "the-barrier": {
        title: "The Barrier",
        description: "flow control. draw lines to redirect a cascade of particles.",
        tags: ["physics", "drawing", "simulation"],
        howItWorks: {
            drawing: "Draw lines that act as barriers.",
            collision: "Particles collide with drawn lines.",
            flow: "Redirect particle flow dynamically."
        },
        controls: {
            draw: "Draw",
            redirect: "Create Barriers"
        }
    },
    "finger-twister": {
        title: "Finger Twister",
        description: "multitouch chaos. use all your fingers to keep the nodes active.",
        tags: ["multitouch", "arcade", "chaos"],
        howItWorks: {
            multitouch: "Detects multiple simultaneous touches.",
            countdown: "Nodes countdown when untouched.",
            challenge: "Keep all nodes active simultaneously."
        },
        controls: {
            fingers: "Multiple Fingers",
            touch: "Touch All Nodes"
        }
    },
    "gravity-flip": {
        title: "Gravity Flip",
        description: "the floor is the ceiling. invert gravity to dodge obstacles in this psychedelic runner.",
        tags: ["arcade", "physics", "runner"],
        howItWorks: {
            inversion: "Gravity inverts on command.",
            runner: "Infinite runner with obstacles.",
            timing: "Precise timing to avoid obstacles."
        },
        controls: {
            tap: "Tap / Space",
            flip: "Flip Gravity"
        }
    },
    "neon-grapple": {
        title: "Neon Grapple",
        description: "minimalist spiderman. swing through an infinite world using energy hooks.",
        tags: ["physics", "skill", "flow"],
        howItWorks: {
            rope: "Rope physics for realistic swinging.",
            momentum: "Momentum conservation during swing.",
            energy: "Energy-based grappling system."
        },
        controls: {
            click: "Click",
            grapple: "Grapple and Swing"
        }
    },
    "rhythm-jump": {
        title: "Rhythm Jump",
        description: "alternate your color to survive. cyan and magenta are your only allies in this precision runner.",
        tags: ["color", "runner", "coordination"],
        howItWorks: {
            matching: "Match obstacle color to pass through.",
            alternating: "Alternate between cyan and magenta.",
            timing: "Precise timing for color switches."
        },
        controls: {
            tap: "Tap",
            switch: "Switch Color"
        }
    },
    "draw-the-path": {
        title: "Draw The Path",
        description: "protect the runner. draw shields against meteorites and bridges over the void.",
        tags: ["drawing", "creativity", "reflexes"],
        howItWorks: {
            drawing: "Draw platforms and shields in real-time.",
            collision: "Drawn objects have collision physics.",
            protection: "Protect the runner from hazards."
        },
        controls: {
            draw: "Draw",
            create: "Create Shields and Bridges"
        }
    },
    "viewport-collision": {
        title: "Viewport Edge Collision",
        description: "dynamic collision. resize the window to hit objects and increase pressure.",
        tags: ["physics", "browser", "experimental"],
        howItWorks: {
            viewport: "Viewport bounds act as collision surfaces.",
            resize: "Resize window to collide with objects.",
            pressure: "Objects react to compression."
        },
        controls: {
            resize: "Resize Window",
            crush: "Crush Objects"
        }
    },
    "bullet-time-painting": {
        title: "Bullet-Time Painting",
        description: "plan your movements and shots in paused time and execute them in 1-second bursts.",
        tags: ["tactics", "bullet-time", "physics"],
        howItWorks: {
            pause: "Time pauses for planning.",
            recording: "Record actions during pause.",
            execution: "Execute all actions in bursts."
        },
        controls: {
            plan: "Plan in Pause",
            execute: "Execute Actions"
        }
    },
    "momentum-transfer": {
        title: "Momentum Transfer",
        description: "you don't kill enemies by hitting them, but by transferring your speed.",
        tags: ["physics", "billiards", "arcade"],
        howItWorks: {
            transfer: "Speed transfers on collision.",
            momentum: "Conservation of momentum physics.",
            strategy: "Strategic collision planning."
        },
        controls: {
            move: "Move",
            collide: "Transfer Momentum"
        }
    }
}
