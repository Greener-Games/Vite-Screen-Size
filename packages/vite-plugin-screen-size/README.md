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

Add it to your `vite.config.ts` (or `vite.config.js`):

```typescript
import { defineConfig } from 'vite';
import screenSize from '@greener-games/vite-plugin-screen-size';

export default defineConfig({
  plugins: [
    // Simple setup with default options (Tailwind breakpoints)
    screenSize()
  ]
});
```

## Configuration

The plugin uses Tailwind CSS breakpoints by default. You can change this behavior by providing an options object to the plugin.

You can customize the breakpoints or use a different preset:

```typescript
screenSize({
  /**
   * Presets: 'tailwind' (default), 'bootstrap', or 'none'
   */
  preset: 'tailwind',

  /**
   * Custom breakpoints mapping name to pixel value.
   * Custom breakpoints will override preset values if the names overlap.
   */
  breakpoints: {
    xs: 480,
    tablet: 768,
    desktop: 1024,
    '4k': 2560
  }
})
```

**Tailwind (Default)**
```json
{
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
}
```

**Bootstrap**
```json
{
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
  "xxl": 1400
}
```

**None**
Pass `preset: 'none'` to start with a blank slate, requiring you to provide your own breakpoints object.


### Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `preset` | `'tailwind' \| 'bootstrap' \| 'none'` | `'tailwind'` | Predefined breakpoint sets. |
| `breakpoints` | `Record<string, number>` | `{}` | Custom breakpoint definitions. |

## License

MIT
