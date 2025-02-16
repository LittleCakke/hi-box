<template>
    <div
        v-if="hasToken"
        class="w-full h-full bg-white p-4">
        <header
            class="w-full flex justify-end mb-4">
            <a-badge dot>
                <icon
                    size="20"
                    name="envelope"
                />
            </a-badge>
        </header>

        <!-- 用户信息 -->
        <div
            class="w-full flex gap-x-4">
            <img
                class="size-[75px] rounded-full"
                src="https://placehold.co/75"
                alt="avatar"
            />

            <div
                class="w-[calc(100%-91px)] flex flex-col gap-y-1">
                <span
                    class="text-gray-600 text-[20px] font-semibold">
                    {{ $userStore.loggedUser?.username }}
                </span>
                <!-- TODO 用户等级 -->

                <span
                    class="text-gray-400 text-[14px]">
                    这个人很懒，什么都没有写
                </span>
            </div>
        </div>

        <!-- 关注、粉丝、收藏、历史浏览 -->
        <ul
            class="w-full py-4 grid grid-cols-4 border-b border-gray-200">
            <li
                class="flex flex-col gap-y-1 items-center">
                <span
                    class="text-gray-600 text-[18px] font-semibold">
                    22
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    关注
                </span>
            </li>

            <li
                class="flex flex-col gap-y-1 items-center">
                <span
                    class="text-gray-600 text-[18px] font-semibold">
                    5
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    粉丝
                </span>
            </li>

            <li
                class="flex flex-col gap-y-1 items-center">
                <span
                    class="text-gray-600 text-[18px] font-semibold">
                    8
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    收藏
                </span>
            </li>

            <li
                class="flex flex-col gap-y-1 items-center">
                <span
                    class="text-gray-600 text-[18px] font-semibold">
                    13
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    历史浏览
                </span>
            </li>
        </ul>

        <!-- 任务、积分商城 -->
        <ul
            class="w-full grid grid-cols-2 py-2 divide-x-[1px] divide-gray-200">
            <li
                @click="navigateTo('/mission')"
                class="w-full flex flex-row gap-x-2">
                <div
                    class="size-[50px] flex items-center justify-center">
                    <icon
                        size="26"
                        class="text-gray-600"
                        name="schedule-completed"
                    />
                </div>

                <div
                    class="grow flex flex-col justify-center">
                    <span
                        class="text-gray-600 font-semibold text-[14px]">
                        我的任务
                    </span>

                    <span
                        class="text-gray-400 text-[12px]">
                        3个任务待完成
                    </span>
                </div>
            </li>

            <li
                class="w-full flex flex-row gap-x-2">
                <div
                    class="size-[50px] flex items-center justify-center">
                    <icon
                        size="26"
                        class="text-gray-600"
                        name="shopping-cart"
                    />
                </div>

                <div
                    class="grow flex items-center">
                    <span
                        class="text-gray-600 font-semibold text-[14px]">
                        积分商城
                    </span>
                </div>
            </li>
        </ul>

        <!-- 动态卡滑 -->
        <div
            class="py-2 w-full">
            <ul
                class="w-full p-1 rounded bg-blue-50 grid grid-cols-2">
                <li
                    @click="cardActive = 1"
                    :class="cardActive == 1 ? 'bg-white' : 'bg-transparent'"
                    class="py-1 rounded text-gray-600 text-[12px] flex items-center justify-center duration-300">
                    我的动态
                </li>

                <li
                    @click="cardActive = 2"
                    :class="cardActive == 2 ? 'bg-white' : 'bg-transparent'"
                    class="py-1 rounded text-gray-600 text-[12px] flex items-center justify-center duration-300">
                    关注动态
                </li>
            </ul>
        </div>
    </div>

    <div
        v-else
        class="size-full bg-white p-4">
        <div
            class="mb-4">
            <span
                class="text-[18px] text-gray-600 font-[550]">
                个人中心
            </span>
        </div>

        <div
            @click="navigateTo('/login')"
            class="flex gap-x-4">
            <div
                class="size-[75px] rounded-full bg-gray-200 flex items-center justify-center">
                <van-icon
                    class="text-gray-600"
                    size="40"
                    name="contact-o"
                />
            </div>

            <div
                class="flex flex-col gap-y-2">
                <span
                    class="text-gray-600 text-[16px] font-semibold">
                    点击登录
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    登录解锁更多精彩内容~
                </span>
            </div>
        </div>

        <ul
            @click="$systemStore.loginAlertShow = true"
            class="w-full py-4 grid grid-cols-4 border-b border-gray-100">
            <li
                class="flex flex-col gap-y-1 items-center">
                <span
                    class="text-gray-600 text-[18px] font-semibold">
                    0
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    关注
                </span>
            </li>

            <li
                class="flex flex-col gap-y-1 items-center">
                <span
                    class="text-gray-600 text-[18px] font-semibold">
                    0
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    粉丝
                </span>
            </li>

            <li
                class="flex flex-col gap-y-1 items-center">
                <span
                    class="text-gray-600 text-[18px] font-semibold">
                    0
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    收藏
                </span>
            </li>

            <li
                class="flex flex-col gap-y-1 items-center">
                <span
                    class="text-gray-600 text-[18px] font-semibold">
                    0
                </span>

                <span
                    class="text-gray-400 text-[14px]">
                    历史浏览
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import Icon from "~/components/Icon.vue";

    const { $systemStore, $userStore, $userApi } = useNuxtApp();

    let hasToken = ref(false);
    let cardActive = ref(1);

    onMounted(async () =>
    {
        let token = localStorage.getItem("token");
        hasToken.value = !!token;

        if (hasToken.value)
        {
            let result = await $userApi.info();
            $userStore.loggedUser = result.data!;
        }
    });
</script>
