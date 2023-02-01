import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  components: false,
  plugins: [],
  modules: [
    '@nuxt/image-edge',
  ],
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/ajaydevofficial'
    },
    domains: [
      "cdn.pixabay.com",
      "filesamples.com"
    ]
  },
  imports: {
    autoImport: true,
  },
  ssr: true
});
