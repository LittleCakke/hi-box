<template>
    <section
        class="w-screen h-screen bg-gray-100">
        <van-nav-bar
            left-arrow
            left-text="返回"
            title="我的任务"
            @click-left="navigateTo('/profile')"
        />

        <main
            class="w-full h-[55vh] p-4">
            <calendar />

            <div
                class="mt-4 bg-white p-4 rounded-lg flex flex-col gap-y-2">
                <span
                    class="text-[14px] text-gray-600 font-semibold">
                    每日任务
                </span>

                <div
                    class="flex justify-between">
                    <div
                        class="flex items-center gap-x-2">
                        <div
                            class="size-9 flex items-center justify-center">
                            <icon
                                class="text-gray-600"
                                name="schedule-completed"
                            />
                        </div>
                        <div
                            class="flex flex-col gap-y-1">
                            <span
                                class="text-gray-600 text-[14px] font-semibold">
                                签到
                                <span
                                    class="text-gray-400 text-[12px]">
                                    （连续7天以上奖励翻倍）
                                </span>
                            </span>

                            <div
                                class="flex gap-x-2">
                                <div
                                    class="flex
                                    items-center
                                    px-1
                                    py-0.5
                                    rounded-sm
                                    bg-gray-100
                                    text-gray-400
                                    text-[12px]">
                                    <icon
                                        class="text-gray-600"
                                        size="12"
                                        name="medal"
                                    />
                                    <span>
                                        +50
                                    </span>
                                </div>

                                <div
                                    class="flex
                                    items-center
                                    px-1
                                    py-0.5
                                    rounded-sm
                                    bg-gray-100
                                    text-gray-400
                                    text-[12px]">
                                    <icon
                                        class="text-gray-600"
                                        size="12"
                                        name="coins"
                                    />
                                    <span>
                                        +50
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        v-if="$userStore.isSigned"
                        class="flex
                        flex-col
                        items-center
                        bg-gray-100
                        p-2
                        rounded">
                        <span
                            class="text-[12px] text-gray-400">
                            已签到
                        </span>

                        <span
                            class="text-[18px] text-gray-600 font-semibold">
                            {{ $userStore.signCount }}天
                        </span>
                    </div>

                    <div
                        v-else
                        class="flex items-center">
                        <span
                            class="bg-blue-500
                            text-white
                            text-[12px]
                            px-4
                            py-2
                            rounded">
                            签到
                        </span>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script setup lang="ts">
    import Calendar from "~/components/mission/Calendar.vue";

    const { $userStore } = useNuxtApp();
</script>
