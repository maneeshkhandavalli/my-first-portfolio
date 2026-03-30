# Design 3: Terminal/IDE Aesthetic

## Visual Description
A dark-themed terminal window displaying skills as command-line output. Mimics VS Code or terminal interface with:

- Fake window chrome (traffic light buttons, title bar)
- Monospace typography (JetBrains Mono, Fira Code)
- Syntax highlighting with comment colors, keyword colors
- Blinking cursor and typing animation effects
- "Running skill check..." progress with animated output
- Line numbers and scrollback aesthetic

## Animations & Interactions

| Interaction | Animation Details |
|-------------|-------------------|
| Boot Sequence | Terminal window fades in, text types out line by line |
| Cursor Blink | CSS animation blinking block cursor at 1s interval |
| Typing Effect | Characters appear one by one with 30ms delay |
| Progress Bars | ASCII-art progress bars fill from left to right |
| Hover on Lines | Line highlights with background color change |

## Preview

```
┌─────────────────────────────────────────────────┐
│ ● ● ●  developer@portfolio: ~/skills            │
├─────────────────────────────────────────────────┤
│ 1  # Initializing skill assessment module...   │
│ 2                                               │
│ 3  $ skills --list --verbose                    │
│ 4  Loading skill database...                   │
│ 5  ✓ Analysis complete!                        │
│ 6                                               │
│ 7  # FRONTEND STACK                            │
│ 8  const HtmlCss = "Expert";      [████████]  │
│ 9  const JavaScript = "Expert";   [████████]  │
│ 10 const TypeScript = "Intermed"; [██████░░]  │
│ 11 const React = "Intermed";      [██████░░]  │
│ ...                                             │
│ 25 $ █                                          │
└─────────────────────────────────────────────────┘
```

## Pros
- Fits developer portfolio theme perfectly
- Unique and memorable
- Easy to read skill levels
- Good accessibility

## Cons
- May not appeal to non-technical visitors
- Requires monospace fonts
- Lots of text to parse
