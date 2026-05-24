# vite-screen-size

A monorepo for the `vite-screen-size` plugin and its demo application.

This project is structured as a monorepo containing both the Vite plugin and a demo application at the root to test and showcase the plugin's functionality.

## Project Structure

- `/` - The root directory contains a Vue 3 + TypeScript + Vite demo application. This app is used to develop and test the plugin locally.
- `/plugins/@greener-games/vite-screen-size` - The actual source code for the `@greener-games/vite-screen-size` plugin.

## For Plugin Users

If you are looking to use the plugin in your own project, please refer to the **[Plugin User Guide & Documentation](./plugins/@greener-games/vite-screen-size/README.md)**.

## For Contributors

If you would like to contribute to the development of the plugin or run the demo application, follow these instructions.

### Prerequisites

Make sure you have Node.js and `npm` installed. The project uses npm workspaces.

### Setup and Development

1. **Install Dependencies**

   From the root of the project, run:
   ```bash
   npm install
   ```

2. **Start the Demo Application**

   To start the demo app with the plugin enabled (which runs the `dev` script in the root `package.json`), run:
   ```bash
   npm run dev
   ```
   This will start the Vite development server for the demo app, allowing you to see the plugin in action.

3. **Develop the Plugin**

   The plugin code is located in `plugins/@greener-games/vite-screen-size`. To make changes to the plugin, you might want to run its watch mode to recompile TypeScript on the fly.

   Open a new terminal, navigate to the plugin directory, and run the `dev` script:
   ```bash
   cd plugins/@greener-games/vite-screen-size
   npm run dev
   ```

   When you make changes to the plugin's source code, it will automatically rebuild. The demo app's Vite server should pick up these changes, though sometimes a restart of the Vite dev server (`npm run dev` at the root) might be necessary depending on the changes.

4. **Building**

   To build both the demo app and the plugin, you can run the build commands defined in their respective `package.json` files.

   To build the plugin:
   ```bash
   cd plugins/@greener-games/vite-screen-size
   npm run build
   ```

   To build the demo app:
   ```bash
   npm run build
   ```
