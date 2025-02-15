<template>
    <div
        class="w-full h-full p-4 bg-white">
        <!-- 头部 -->
        <header
            class="flex items-center justify-between">
            <ul
                class="flex gap-x-6">
                <li
                    @click="isCommandActive = false"
                    :class="!isCommandActive ? 'text-gray-700 font-semibold scale-110' : 'text-gray-500 font-light'"
                    class="duration-100">
                    动态
                </li>

                <li
                    @click="isCommandActive = true"
                    :class="isCommandActive ? 'text-gray-700 font-semibold scale-110' : 'text-gray-500 font-light'"
                    class="duration-100">
                    推荐
                </li>
            </ul>

            <ul
                class="flex items-center gap-x-4">
                <li
                    class="flex items-center">
                    <icon
                        size="20"
                        name="search"
                    />
                </li>

                <li
                    class="flex items-center">
                    <a-badge dot>
                        <icon
                            size="20"
                            name="envelope"
                        />
                    </a-badge>
                </li>
            </ul>
        </header>

        <!-- 内容区 -->
        <main
            class="mt-4 h-[calc(100%-16px)] w-full">
        </main>
    </div>
</template>

<script setup lang="ts">
    import Icon from "~/components/Icon.vue";

    let isCommandActive = ref(true);
</script>