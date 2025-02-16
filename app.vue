<template>
    <nuxt-page />

    <login-alert />
</template>

<script setup lang="ts">
    import { LoginAlert } from "#components";

    useHead({
        htmlAttrs: {
            lang: "zh"
        }
    });

    useSeoMeta({
        title: "小嗨盒"
    });
</script>
