<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :width="size"
        :height="size"
        :color="color"
        fill="none">
        <path
            d="M16 2V5M6 2V5"
            stroke="currentColor"
            :stroke-width="strokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M20 13V11.5C20 7.72876 20 5.84315 18.8284 4.67157C17.6569 3.5 15.7712 3.5 12 3.5H10C6.22876 3.5 4.34315 3.5 3.17157 4.67157C2 5.84315 2 7.72876 2 11.5V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H11.5"
            stroke="currentColor"
            :stroke-width="strokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M14 19.5C14 19.5 15.3485 20.0067 16 22C16 22 19.1765 17 22 16"
            stroke="currentColor"
            :stroke-width="strokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M2.5 8.5H19.5"
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
