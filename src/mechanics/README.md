# Game Mechanics Library

A collection of reusable game mechanics built with TypeScript. Each mechanic is self-contained, well-documented, and ready to use in your projects.

## 📚 Available Mechanics

### [Slingshot](./slingshot)

Physics-based slingshot mechanic with drag-and-launch controls.

**Features:**

- Realistic physics (gravity, friction, bounce)
- Touch and mouse support
- Fully configurable
- Event callbacks for audio/particles

[View Code](https://github.com/Game-Bob/website/tree/main/src/mechanics/slingshot) | [Documentation](./slingshot/README.md)

### [Swipe Gesture](./swipe)

Swipe gesture detection system with direction and velocity tracking.

**Features:**

- 4 or 8 direction detection
- Velocity tracking
- Configurable sensitivity
- Touch and mouse support
- Event callbacks

[View Code](https://github.com/Game-Bob/website/tree/main/src/mechanics/swipe) | [Documentation](./swipe/README.md)

### [Gravity Well](./gravity-well)

Particle physics simulation where users can place gravity sources that attract floating particles.

**Features:**

- Particle system with trails
- Interactive gravity wells
- Lifetime management for wells
- Optimized performance

[View Code](https://github.com/Game-Bob/website/tree/main/src/mechanics/gravity-well) | [Documentation](./gravity-well/README.md)

### [Flocking](./flocking)

Boids simulation demonstrating emergent behavior through simple rules.

**Features:**

- Separation, Alignment, and Cohesion rules
- Mouse interaction (repulsion)
- Smooth movement
- Configurable parameters

[View Code](https://github.com/Game-Bob/website/tree/main/src/mechanics/flocking) | [Documentation](./flocking/README.md)

### [Tap & Fly](./tap-fly)

One-tap mechanic where the player must tap to fly upwards and avoid obstacles.

**Features:**

- Gravity and impulse physics
- Obstacle generation and collision
- Score tracking
- Game state management

[View Code](https://github.com/Game-Bob/website/tree/main/src/mechanics/tap-fly) | [Documentation](./tap-fly/README.md)

### [Hold to Jump](./hold-jump)

Platformer mechanic where jump height is determined by input duration.

**Features:**

- Charge-based jump force
- Parabolic arc physics
- Platform collision detection
- Visual charge feedback

[View Code](https://github.com/Game-Bob/website/tree/main/src/mechanics/hold-jump) | [Documentation](./hold-jump/README.md)

### [Clicker](./clicker)

Incremental game mechanic with resource management and upgrades.

**Features:**

- Click and auto-click income
- Upgrade system with scaling costs
- Particle effects
- Save/Load ready state structure

[View Code](https://github.com/Game-Bob/website/tree/main/src/mechanics/clicker) | [Documentation](./clicker/README.md)

### [Autorunner](./autorunner)

Infinite side-scrolling runner with procedural generation.

**Features:**

- Procedural platform generation
- Physics-based jumping
- Increasing difficulty (speed)
- Obstacle collision

[View Code](https://github.com/Game-Bob/website/tree/main/src/mechanics/autorunner) | [Documentation](./autorunner/README.md)

---

## 🚀 Quick Start

Each mechanic is in its own folder with:

- TypeScript source file
- Comprehensive README
- Usage examples
- API reference

```bash
# Copy the mechanic you need
cp -r src/mechanics/slingshot your-project/mechanics/
```

## 📄 License

MIT - All mechanics are free to use in your projects

## 🤝 Contributing

New mechanics and improvements welcome!

---

Made with ❤️ by [jjlmoya](https://github.com/Game-Bob)
