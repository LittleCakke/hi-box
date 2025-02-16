<template>
    <section
        class="w-screen h-screen p-8">
        <div
            class="size-[60px]
            bg-gray-200
            flex items-center
            justify-center
            rounded-3xl
            mb-8">
            <icon
                v-if="step == 0"
                @click="navigateTo('/home')"
                name="cross"
                size="50"
                class="text-gray-600"
            />

            <icon
                v-if="step == 1"
                @click="step = 0"
                name="arrow-left"
                size="50"
                class="text-gray-600"
            />
        </div>

        <div
            class="flex flex-col relative">
            <span
                class="text-[20px] font-bold text-gray-700">
                {{ isCodeLogin ? "验证码登录" : "密码登录" }}
            </span>

            <div
                class="absolute top-[60px] w-full">
                <div
                    v-if="step == 0"
                    class="w-full
                    flex
                    pb-2
                    border-b
                    border-b-gray-200
                    duration-300
                    focus-within:border-b-gray-400">
                    <span
                        class="w-[50px]
                        text-gray-600
                        font-semibold
                        flex
                        justify-center">
                        +86
                    </span>

                    <input
                        v-model="phone"
                        placeholder="请输入您的手机号"
                        class="outline-none
                        border-none
                        w-[calc(100%-100px)]
                        text-gray-600
                        font-semibold
                        placeholder:font-normal"
                    />

                    <div
                        class="w-[50px] flex items-center justify-end">
                        <icon
                            v-if="clearIconShow"
                            @click="phone = ''"
                            name="clear"
                            size="16"
                            class="text-gray-400"
                        />
                    </div>
                </div>

                <code-input
                    v-if="step == 1 && isCodeLogin"
                    v-model:code="code"
                    v-model:show="keyboardShow"
                />

                <div
                    v-else-if="step == 1 && !isCodeLogin"
                    class="w-full pb-2 border-b flex items-center">
                    <div
                        class="basis-4/5 flex items-center">
                        <input
                            v-model="password"
                            type="password"
                            placeholder="请输入密码"
                            class="w-4/5
                            outline-none
                            border-none
                            tracking-[4px]
                            placeholder:tracking-normal"
                        />

                        <div
                            class="w-1/5 flex items-center justify-end">
                            <icon
                                v-if="password !== ''"
                                @click="password = ''"
                                name="clear"
                                size="16"
                                class="text-gray-400"
                            />
                        </div>
                    </div>

                    <span
                        class="basis-1/5
                        text-[12px]
                        text-gray-400
                        flex
                        items-center
                        justify-center">
                        忘记密码
                    </span>
                </div>

                <span
                    :class="step == 0 ? 'opacity-50 top-0 left-[50px] font-semibold text-gray-600' : 'opacity-100 -top-[28px] left-0 text-[14px] text-gray-400'"
                    class="absolute duration-500">
                    {{ phone }}
                </span>

                <button
                    v-if="step == 0"
                    @click="nextStep"
                    :disabled="!regexPatterns.phone.test(phone)"
                    :class="regexPatterns.phone.test(phone) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'"
                    class="w-full
                    py-2
                    mt-8
                    rounded
                    text-[14px]
                    duration-300">
                    下一步
                </button>

                <button
                    v-else-if="step == 1 && isCodeLogin"
                    @click="sendMsg"
                    :disabled="btnDisabled || loading"
                    :class="btnDisabled || loading ? 'bg-gray-200 text-gray-400' : 'bg-blue-500 text-white'"
                    class="w-full py-2 mt-8 rounded text-[14px] duration-300">
                    <span
                        v-if="loading"
                        class="flex items-center justify-center gap-x-2">
                        <icon
                            size="16"
                            class="animate-spin text-gray-400"
                            name="loading"
                        />
                        正在验证中……
                    </span>

                    <span
                        v-else>
                        {{ btnText }}
                    </span>
                </button>

                <button
                    v-else-if="step == 1 && !isCodeLogin"
                    @click="pwdLogin"
                    :disabled="password == '' || loading"
                    :class="password !== '' && !loading ? 'bg-gray-200 text-white' : 'bg-gray-200 text-gray-400'"
                    class="w-full py-2 mt-8 rounded text-[14px] duration-300">
                    <span
                        v-if="loading"
                        class="flex items-center justify-center gap-x-2">
                        <icon
                            size="16"
                            class="animate-spin text-gray-400"
                            name="loading"
                        />
                        正在验证中……
                    </span>

                    <span
                        v-else>
                        登录
                    </span>
                </button>

                <div
                    class="mt-2">
                    <span
                        @click="isCodeLogin = !isCodeLogin"
                        class="text-[12px] text-gray-400">
                        {{ !isCodeLogin ? "验证码登录" : "密码登录" }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import CodeInput from "~/components/login/CodeInput.vue";
    import Icon from "~/components/Icon.vue";

    const { $userApi, $md5 } = useNuxtApp();

    let step = ref(0);
    let isCodeLogin = ref(true);
    let phone = ref("");
    let password = ref("");

    let code = ref("");

    let timer = ref<NodeJS.Timeout>();
    let btnDisabled = ref(false);
    let btnText = ref("重新发送");
    let countdown = ref(60);
    let loading = ref(false);

    let clearIconShow = computed(() => phone.value !== "");
    let keyboardShow = computed(() => step.value == 1 && isCodeLogin.value);

    const sendMsg = async () =>
    {
        if (timer.value == undefined)
        {
            btnDisabled.value = true;

            let result = await $userApi.getPhoneCode(phone.value);

            if (result.code == 200)
                message.success("验证码发送成功，请注意查收");
            else
                message.error("出错了，请稍后再试");

            timer.value = setInterval(() =>
            {
                btnText.value = `重新发送(${countdown.value}s)`;

                if (countdown.value <= 0)
                {
                    btnDisabled.value = false;
                    btnText.value = "重新发送";
                    countdown.value = 60;
                    clearInterval(timer.value);
                    timer.value = undefined;
                }

                countdown.value--;
            }, 1000);
        }
    }

    const nextStep = async () =>
    {
        if (isCodeLogin.value)
            await sendMsg();

        step.value++;
    }

    const pwdLogin = async () =>
    {
        loading.value = true;
        let result = await $userApi.login({
            phone: phone.value,
            password: $md5.hashStr(password.value)
        });
        loading.value = false;

        if (result.code == 200)
        {
            message.success("登录成功");
            localStorage.setItem("token", `${result.data}`);

            navigateTo("/home");
        }
        else
        {
            message.error(result.msg || "手机号或密码错误");
        }
    }

    watch(() => code.value, async v =>
    {
        if (v.length == 4)
        {
            loading.value = true;
            let result = await $userApi.login({
                phone: phone.value,
                code: code.value
            });
            loading.value = false;

            if (result.code == 200)
            {
                message.success("登录成功");
                localStorage.setItem("token", `${result.data}`);

                navigateTo("/home");
            }
            else
            {
                message.error(result.msg || "手机号或验证码错误");
            }
        }
        else if (v.length > 4)
        {
            code.value = v.substring(0, 4);
            message.error("验证码长度不可超过4位");
        }
    });

    watch(() => isCodeLogin.value, () =>
    {
        step.value = 0;
        code.value = "";
        password.value = "";
        loading.value = false;
    });

    onMounted(() =>
    {
        let token = localStorage.getItem("token");

        if (token) navigateTo("/home");
    });

    onBeforeUnmount(() =>
    {
        clearInterval(timer.value);
    });
</script>
