<template>
    <div
        class="size-full bg-white shadow-lg rounded">
        <!-- 操作 -->
        <div
            class="w-full h-[50px] flex items-center justify-around">
            <a-button
                @click="prevMonth"
                type="link">
                上一月
            </a-button>

            <span
                @click="datePickerPopup = true"
                class="py-1 px-2 rounded bg-gray-200 text-[13px] text-gray-600">
                {{ currentDate.join("-") }}
            </span>

            <a-button
                @click="nextMonth"
                type="link">
                下一月
            </a-button>
        </div>

        <!-- 日期头 -->
        <ul
            class="px-2 grid grid-cols-7">
            <li
                class="h-[50px]
                flex
                items-center
                justify-center
                text-gray-600
                font-semibold">
                一
            </li>

            <li
                class="h-[50px]
                flex
                items-center
                justify-center
                text-gray-600
                font-semibold">
                二
            </li>

            <li
                class="h-[50px]
                flex
                items-center
                justify-center
                text-gray-600
                font-semibold">
                三
            </li>

            <li
                class="h-[50px]
                flex
                items-center
                justify-center
                text-gray-600
                font-semibold">
                四
            </li>

            <li
                class="h-[50px]
                flex
                items-center
                justify-center
                text-gray-600
                font-semibold">
                五
            </li>

            <li
                class="h-[50px]
                flex
                items-center
                justify-center
                text-red-500
                font-semibold">
                六
            </li>

            <li
                class="h-[50px]
                flex
                items-center
                justify-center
                text-red-500
                font-semibold">
                七
            </li>
        </ul>

        <!-- 日期具体数据 -->
        <ul
            :class="calendar.length == 35 ? 'grid-rows-5' : 'grid-rows-6'"
            class="px-2
            pb-2
            w-full
            h-[calc(100%-100px)]
            grid
            grid-cols-7
            gap-1">
            <li
                class="rounded
                flex
                items-center
                justify-center
                relative"
                v-for="d in calendar"
                :key="d.key">
                <span
                    :class="isSigned(!!d.isSigned)"
                    class="absolute
                    h-full
                    aspect-square
                    text-[14px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    z-0">
                    {{ d.date }}
                </span>
            </li>
        </ul>
    </div>

    <van-popup
        class="h-[30vh]"
        v-model:show="datePickerPopup"
        position="bottom">
        <van-date-picker
            v-model="currentDate"
            @change="datetimePickerChange"
            title="选择年月"
            :min-date="new Date(2024, 9, 1)"
            :max-date="new Date()"
            :columns-type="['year', 'month']"
        />
    </van-popup>
</template>

<script setup lang="ts">
    import type { CalendarItem } from "~/type";

    const { $userApi } = useNuxtApp();

    let currentDate = ref<string[]>([]);
    let datePickerPopup = ref(false);
    let calendar = ref<CalendarItem[]>([]);

    const isSigned = (signed: boolean) =>
    {
        if (signed)
            return "text-white bg-blue-500 font-semibold";
        return "text-gray-600 font-normal";
    }

    const prevMonth = () =>
    {
        let month = dateUtils.getPrevMonth(currentDate.value.join("-"));
        currentDate.value = month;
    }

    const nextMonth = () =>
    {
        let month = dateUtils.getNextMonth(currentDate.value.join("-"));
        currentDate.value = month;
    }

    const datetimePickerChange = async ({ selectedValues }: { selectedValues: string[] }) =>
    {
        let date = selectedValues.join("-");
        let result = await $userApi.monthSignInfo(date);
        calendar.value = dateUtils.generateCalendar(`${result.data}`, `${selectedValues}`);
    }

    watch(() => currentDate.value, async (v, oldValue) =>
    {
        let [ year, month ] = v;
        let newDate = new Date(Number(year), Number(month) - 1);
        if (newDate.getTime() > Date.now())
        {
            message.error("查询事件超过当前时间");
            currentDate.value = oldValue;
            return;
        }

        let result = await $userApi.monthSignInfo(v.join("-"));
        calendar.value = dateUtils.generateCalendar(`${result.data}`, v.join("/"));
    });

    onMounted(async () =>
    {
        let curr = dateUtils.getCurrentDate();
        curr.pop();
        currentDate.value = curr;
        let date = curr.join("-");

        let result = await $userApi.monthSignInfo(date);

        calendar.value = dateUtils.generateCalendar(`${result.data}`);
    });
</script>
