import type { Plugin } from 'vite';
import { getClientScript } from './client.js';

export interface ScreenSizeOptions {
  /**
   * Custom breakpoints mapping name to pixel value.
   * e.g. { sm: 640, md: 768 }
   */
  breakpoints?: Record<string, number>;
  /**
   * Standard presets
   * @default 'tailwind'
   */
  preset?: 'tailwind' | 'bootstrap' | 'none';
}

const PRESETS = {
  tailwind: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  bootstrap: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  none: {},
};

export default function screenSize(options: ScreenSizeOptions = {}): Plugin {
  const { preset = 'tailwind', breakpoints: customBreakpoints = {} } = options;

  const combinedBreakpoints = {
    ...(PRESETS[preset] || {}),
    ...customBreakpoints,
  };

  return {
    name: 'vite-screen-size',
    apply: 'serve', // Only apply in dev mode
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          attrs: { type: 'module' },
          children: getClientScript(combinedBreakpoints),
          injectTo: 'body',
        },
      ];
    },
  };
}
