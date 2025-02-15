<template>
    <ul
        class="grid grid-cols-4 gap-x-4 px-4">
        <li
            v-for="i in 4"
            :key="i"
            :class="code?.length == (i - 1) ? 'border-blue-500' : 'border-gray-300'"
            class="size-[50px]
            rounded
            shadow-lg
            flex
            items-center
            justify-center
            border">
            <span
                class="text-gray-600 font-semibold text-[20px]">
                {{ code?.charAt(i - 1) }}
            </span>

            <span
                v-if="code?.length == (i - 1)"
                class="w-[1px] h-2/5 bg-gray-600 cursor-flashing"
            />
        </li>
    </ul>

    <van-number-keyboard
        v-model="code"
        :show="show"
    />
</template>

<script setup lang="ts">
    let code = defineModel<string>("code");
    let show = defineModel<boolean>("show");
</script>

<style scoped>
    .cursor-flashing {
        animation: cursor-flashing 750ms infinite;
    }

    @keyframes cursor-flashing {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>
