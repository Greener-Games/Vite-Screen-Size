# @greener-games/vite-plugin-screen-size

A lightweight Vite plugin that displays the current screen dimensions and active breakpoint in a small, non-intrusive overlay during development.

![License](https://img.shields.io/github/license/greener-games/vite-screen-size)
![NPM Version](https://img.shields.io/npm/v/@greener-games/vite-plugin-screen-size)

## Features

- 📏 **Live Dimensions**: Shows real-time window width and height.
- 📱 **Breakpoint Detection**: Automatically identifies the active breakpoint (Tailwind, Bootstrap, or Custom).
- 🎨 **Modern UI**: Clean, semi-transparent overlay with a glassmorphism effect.
- 🛠 **Zero Config**: Works out of the box with Tailwind breakpoints.
- 🚀 **Dev-Only**: Automatically disabled in production builds.

## Installation

```bash
npm install -D @greener-games/vite-plugin-screen-size
# or
yarn add -D @greener-games/vite-plugin-screen-size
# or
pnpm add -D @greener-games/vite-plugin-screen-size
```

## Usage

Add it to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import screenSize from '@greener-games/vite-plugin-screen-size';

export default defineConfig({
  plugins: [
    screenSize()
  ]
});
```

## Configuration

You can customize the breakpoints or use a different preset.

```typescript
screenSize({
  /**
   * Presets: 'tailwind' (default), 'bootstrap', or 'none'
   */
  preset: 'tailwind',

  /**
   * Custom breakpoints mapping name to pixel value.
   * Overrides preset values if names overlap.
   */
  breakpoints: {
    xs: 480,
    tablet: 768,
    desktop: 1024,
    '4k': 2560
  }
})
```

### Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `preset` | `'tailwind' \| 'bootstrap' \| 'none'` | `'tailwind'` | Predefined breakpoint sets. |
| `breakpoints` | `Record<string, number>` | `{}` | Custom breakpoint definitions. |

## License

MIT
