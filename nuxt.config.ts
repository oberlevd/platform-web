import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "oxc-nuxt"],
  css: ["./assets/css/main.css"], // относительно папки app
  vite: {
    plugins: [tailwindcss()],
  },
});