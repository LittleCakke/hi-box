// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    pages: true,

    modules: [
        "@nuxtjs/tailwindcss",
        "@vant/nuxt",
        "@ant-design-vue/nuxt",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate"
    ],

    devServer: {
        port: 13579
    },

    routeRules: {
        "/": {
            redirect: "/home"
        }
    },

    nitro: {
        devProxy: {
            "/api": {
                target: `http://${process.env.HI_BOX_PROXY_TARGET_HOST}:${process.env.HI_BOX_PROXY_TARGET_PORT}`,
                changeOrigin: true
            }
        }
    }
});
