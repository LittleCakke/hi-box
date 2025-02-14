<template>
    <div
        :class="`w-[${size}px] h-[${size}px] text-[${color}]`"
        class="
        relative
        group">
        <icon
            size="size"
            name="screw-driver"
            class="absolute
            top-0
            left-0
            group-hover:-rotate-45
            duration-200
            origin-bottom-left"
        />

        <icon
            size="size"
            name="wrench"
            :class="`left-[${size}px]`"
            class="absolute
            top-0
            -rotate-90
            group-hover:-rotate-45
            duration-200
            origin-bottom-left"
        />
    </div>
</template>

<script setup lang="ts">
    import Icon from "~/components/Icon.vue";

    defineProps({
        size: {
            type: String,
            default: "24"
        },

        color: {
            type: String,
            default: "#000000"
        }
    });
</script>
