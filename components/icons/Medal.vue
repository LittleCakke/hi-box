<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        :width="size"
        :height="size"
        :color="color"
        fill="none">
        <path
            d="M10.5 15.5C10.5 14.6716 11.1476 14 11.9464 14H12.0536C12.8524 14 13.5 14.6716 13.5 15.5C13.5 16.3284 12.8524 17 12.0536 17H11.9464C11.1476 17 10.5 16.3284 10.5 15.5Z"
            stroke="currentColor"
            :stroke-width="strokeWidth" />
        <circle
            cx="12"
            cy="15.5"
            r="6.5"
            stroke="currentColor"
            :stroke-width="strokeWidth" />
        <path
            d="M9 9.5L5.5 2"
            stroke="currentColor"
            :stroke-width="strokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M15 9.5L18.5 2"
            stroke="currentColor"
            :stroke-width="strokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M15 2L14 4.5"
            stroke="currentColor"
            :stroke-width="strokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M12.5 9L9.5 2"
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
