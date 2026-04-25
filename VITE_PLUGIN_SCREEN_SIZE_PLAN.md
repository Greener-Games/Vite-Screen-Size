# Design: vite-plugin-screen-size

## Overview
A Vite plugin that injects a clean, modern screen size and breakpoint widget into the bottom right corner of the page during development.

## Project Structure
We will use NPM Workspaces to manage the plugin and the test playground.

```
/
├── package.json (root with workspaces: ["packages/*"])
├── packages/
│   └── vite-plugin-screen-size/
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts  (Plugin logic)
│           ├── client.ts (Widget client logic)
│           └── style.css (Widget styles)
├── src/ (Existing test playground)
└── vite.config.ts (Importing plugin from local workspace)
```

## Plugin Architecture
- **Vite Hook**: `transformIndexHtml` to inject the widget logic.
- **Runtime Filtering**: Use `apply: 'serve'` in the plugin definition to ensure it only runs during `vite dev`.
- **Options**:
  - `breakpoints`: An object mapping names to pixel values (e.g., `{ sm: '640px', md: '768px' }`).
  - `preset`: Standard presets like `'tailwind'`, `'bootstrap'`, or `'none'`.
- **Client Side**: Vanilla JS for zero-dependency usage. It will listen to `resize` events and update the DOM.

## Visual Design
- Fixed position: `bottom: 1rem; right: 1rem;`
- Modern look: Glassmorphism (blur + semi-transparent), rounded corners, monospace fonts.
- Information displayed: `Width x Height` and the active breakpoint name.

## Implementation Steps
1. Initialize NPM Workspaces.
2. Create the plugin package folder and configuration.
3. Implement the Vite plugin core logic.
4. Implement the client-side widget and styles.
5. Integrate with the root playground for testing.
6. Verify production builds exclude the widget.
