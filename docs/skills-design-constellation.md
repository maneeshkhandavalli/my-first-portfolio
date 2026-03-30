# Design 2: Orbital/Constellation Layout

## Visual Description
Skills displayed as nodes in an animated network graph. The "Full Stack Web" skill sits at the center as the primary hub, with other skills orbiting around it in concentric rings.

### Ring Structure:
- **Inner ring**: Core frontend skills (HTML, CSS, JS, React)
- **Middle ring**: Backend and database skills (Node, Express, MongoDB)
- **Outer ring**: Specialized skills (AI/ML, Python, Framer Motion)

Nodes are connected by animated SVG lines forming a constellation pattern. Related skills have stronger connections (thicker lines). The entire network gently rotates.

## Animations & Interactions

| Interaction | Animation Details |
|-------------|-------------------|
| Network Rotation | Slow continuous rotation (60s per revolution) |
| Node Pulse | Nodes pulse on staggered timeline, scale 1 to 1.1 |
| Connection Lines | Draw-in animation on load, stroke-dashoffset effect |
| Node Hover | Node scales 1.3, connected lines brighten, tooltip appears |
| Drag Nodes | Nodes can be dragged, physics-based spring back |

## Preview

```
         [Python]
            |
    [AI/ML]---|---[Framer]
       |      |      |
   [Mongo]--[HUB]--[React]
       |    /|\      |
   [Express] |    [TypeScript]
       |    |         |
    [Node] [Git]   [Tailwind]
            |
        [Full Stack]
```

## Pros
- Highly memorable and unique
- Shows relationships between skills
- Interactive and engaging
- Visual "wow" factor

## Cons
- Complex to implement
- May be harder to read specific skill levels
- Performance considerations with SVG animations
- Accessibility challenges
