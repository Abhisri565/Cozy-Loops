# Yarn Reverie Project Guidelines

## Responsiveness & Viewport Rules
- **Breakpoints**: Use `960px` as the primary tablet/mobile breakpoint. Grid layouts should collapse from 2-columns (or more) to a single column (`1fr`) at this width.
- **Horizontal Scroll Prevention**: Never allow horizontal scrolling on mobile viewports. Always maintain `overflow-x: hidden` at the body/app-container level to prevent horizontal layout leaks.
- **Dynamic Text Scaling**: Canvas headings (like `CanvasText`) must dynamically compute font sizes and character spacing gaps based on viewport width to prevent clipping (e.g. scale font size down to `2.2rem` on small mobile viewports).
- **Navigation Bar**: Maintain the state-driven hamburger menu (`.menu-toggle`) and the slide-down navigation drawer (`.mobile-nav`) on all pages under `960px` viewport width.
- **Content Alignment**: Center-align all text, buttons, dividers, cards, and list elements when screen resolution falls below `960px`.
- **Full-Width Footers**: Footers must occupy 100% of the screen width for background colors/borders, while keeping their nested content aligned inside a `.container` wrapper class (collapsing to a centered vertical stack below `600px`).
