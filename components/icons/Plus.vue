<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :width="size"
        :height="size"
        :color="color"
        fill="none">
        <path
            d="M12 4V20M20 12H4"
            stroke="currentColor"
            :stroke-width="strokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
    defineProps({
        size: {
            type: String,
            default: "24"
        },

        color: {
            type: String,
            default: "#000000"
        },

        strokeWidth: {
            type: String,
            default: "1.5"
        }
    });
</script>
