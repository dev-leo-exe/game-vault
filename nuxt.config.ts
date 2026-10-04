import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: { viewport: "width=device-width, initial-scale=1, viewport-fit=cover" },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxtjs/supabase"],
  supabase: {
    // No login page yet; the module otherwise redirects every route to /login
    redirect: false,
  },
});
