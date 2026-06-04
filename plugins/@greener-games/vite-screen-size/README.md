# @greener-games/vite-screen-size

A lightweight Vite plugin that displays the current screen dimensions and active breakpoint in a small, non-intrusive overlay during development.

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![npm version](https://img.shields.io/npm/v/@greener-games/vite-screen-size.svg)](https://www.npmjs.com/package/@greener-games/vite-screen-size)
[![npm downloads](https://img.shields.io/npm/dt/@greener-games/vite-screen-size.svg)](https://www.npmjs.com/package/@greener-games/vite-screen-size)
[![GitHub stars](https://img.shields.io/github/stars/Greener-Games/Vite-Screen-Size.svg?style=social&label=Stars)](https://github.com/Greener-Games/Vite-Screen-Size)
[![CI](https://github.com/Greener-Games/Vite-Screen-Size/actions/workflows/ci.yml/badge.svg)](https://github.com/Greener-Games/Vite-Screen-Size/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 📏 **Live Dimensions**: Shows real-time window width and height.
- 📱 **Breakpoint Detection**: Automatically identifies the active breakpoint (Tailwind, Bootstrap, or Custom).
- 🎨 **Modern UI**: Clean, semi-transparent overlay with a glassmorphism effect.
- 🛠 **Zero Config**: Works out of the box with Tailwind breakpoints.
- 🚀 **Dev-Only**: Automatically disabled in production builds.

## Installation

```bash
npm install -D @greener-games/vite-screen-size
# or
yarn add -D @greener-games/vite-screen-size
# or
pnpm add -D @greener-games/vite-screen-size
```

## Usage

Add it to your `vite.config.ts` (or `vite.config.js`):

```typescript
import { defineConfig } from 'vite';
import screenSize from '@greener-games/vite-screen-size';

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
