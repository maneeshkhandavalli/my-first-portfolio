# Design 1: Horizontal Scroll Carousel

## Visual Description
A sleek horizontal scroll container with skill cards arranged in a single row. Cards are organized by category (Frontend, Backend, Tools, AI/ML) with visual separators.

### Features:
- Large icon at the top
- Skill name in bold
- Animated horizontal progress bar showing proficiency
- Subtle category color coding:
  - Orange: Frontend
  - Green: Backend
  - Purple: Tools
  - Blue: AI/ML

The container has a custom scrollbar or hides the default scrollbar for a cleaner look. Navigation arrows on sides for desktop, natural swipe for mobile.

## Animations & Interactions

| Interaction | Animation Details |
|-------------|-------------------|
| Scroll | Smooth momentum scrolling with `scroll-snap-type: x mandatory` |
| Card Hover | Scale up 1.05, shadow depth increases, slight Y translate (-8px) |
| Progress Bar | Animates from 0 to value on scroll into view (1s, easeOut) |
| Category Reveal | Staggered fade-in, cards appear sequentially with 0.1s delay |
| Drag | Custom cursor changes to "grab" on hover, "grabbing" on drag |

## Preview

```
[Frontend] [Backend] [Tools] [AI/ML]

[<-]  [HTML CSS] [JavaScript] [React] [TypeScript] [...]  [->]
       95%         90%          75%      70%

      ○  ○  ○  ○  (scroll indicators)
```

## Pros
- Easy to browse all skills at once
- Clear visual hierarchy with categories
- Mobile-friendly swipe gesture
- Fast performance

## Cons
- May require horizontal scrolling (less intuitive)
- Takes up horizontal space
