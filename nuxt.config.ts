// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Базовые настройки
  ssr: false,

  // Отключаем экспериментальные функции
  experimental: {
    scanPageMeta: false,
    payloadExtraction: false
  },

  // Настройки Vite
  vite: {
    // Увеличиваем тайм-аут
    server: {
      hmr: {
        timeout: 30000
      }
    },

    // Простая настройка SCSS
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;'
        }
      }
    }
  },

  // Отключаем devtools
  devtools: { enabled: false },

  // Настройки Nitro
  nitro: {
    experimental: {
      wasm: false
    }
  }
})
