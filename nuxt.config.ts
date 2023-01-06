import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  components: false,
  plugins: [],
  modules: [
    '@nuxt/image-edge',
  ],
  image: {
    domains: [
      "cdn.pixabay.com",
      "filesamples.com"
    ]
  },
  imports: {
    autoImport: true,
  },
});
