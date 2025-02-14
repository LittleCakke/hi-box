<template>
    <section
        class="w-screen h-screen">
        <main
            class="w-full h-[calc(100%-50px)]">
            <nuxt-page />
        </main>

        <van-tabbar
            route>
            <van-tabbar-item
                to="/home">
                <template #icon>
                    <icon
                        :class="route.fullPath === '/home' ? 'text-blue-500' : 'text-gray-600'"
                        size="20"
                        name="home"
                    />
                </template>
                首页
            </van-tabbar-item>

            <van-tabbar-item
                to="/post">
                <div
                    class="w-[50px] h-[40px] rounded-md bg-blue-500 flex items-center justify-center">
                    <icon
                        class="text-white"
                        name="plus" />
                </div>
            </van-tabbar-item>

            <van-tabbar-item
                to="/profile">
                <template #icon>
                    <icon
                        :class="route.fullPath === '/profile' ? 'text-blue-500' : 'text-gray-600'"
                        size="20"
                        name="user"
                    />
                </template>
                个人中心
            </van-tabbar-item>
        </van-tabbar>
    </section>
</template>

<script setup lang="ts">
    import Icon from "~/components/Icon.vue";

    const route = useRoute();
</script>