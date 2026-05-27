import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // When "npm run build" runs (usually mapped to "vite build"
  // inside package.json), Vite reads this config file.
  //
  // The "outDir" option tells Vite where to place
  // the final production build files.
  //
  // So instead of generating:
  //   dist/
  //
  // Vite will generate:
  //   dist-react/
  build: {
    outDir: "dist-react",
  },
});
