<template>
    <van-popup
        style="background: transparent;"
        v-model:show="$systemStore.loginAlertShow"
        teleport="body">
        <div
            class="w-[80vw] h-[20vh] bg-white rounded-lg relative">
            <div
                class="w-full flex justify-center">
                <span
                    class="pt-8 text-gray-400 text-[12px]">
                    该功能需要登录后使用，是否登录？
                </span>
            </div>

            <div
                class="w-full
                px-4
                absolute
                bottom-4
                grid
                grid-cols-2
                gap-x-4">
                <span
                    @click="$systemStore.toLogin()"
                    class="w-full
                    py-2
                    bg-blue-500
                    text-gray-50
                    text-[14px]
                    rounded
                    flex
                    justify-center">
                    去登录
                </span>

                <span
                    @click="$systemStore.loginAlertShow = false"
                    class="w-full
                    py-2
                    bg-gray-200
                    text-gray-600
                    text-[14px]
                    rounded
                    flex
                    justify-center">
                    取消
                </span>
            </div>
        </div>
    </van-popup>
</template>

<script setup lang="ts">
    const { $systemStore } = useNuxtApp();
</script>
