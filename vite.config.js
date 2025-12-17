import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { slClient } from "./sl-client.js";

import config from "./package.json";

export default defineConfig(async ({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base:
    mode == "development"
      ? undefined
      : `https://templates.smartlink.mk/${(await slClient.user.me()).userId}/${
          config.name
        }/${config.version}/`,
}));
