<template>
    <component
        :is="icons[name]"
        :size="size"
        :color="color"
        :strock-width="strokeWidth" />
</template>

<script setup lang="ts">
    import ArrowLeft from "~/components/icons/ArrowLeft.vue";
    import CheckCircle from "~/components/icons/CheckCircle.vue";
    import Clear from "~/components/icons/Clear.vue";
    import Coins from "~/components/icons/Coins.vue";
    import Cross from "~/components/icons/Cross.vue";
    import Envelope from "~/components/icons/Envelope.vue";
    import Home from "~/components/icons/Home.vue";
    import Loading from "~/components/icons/Loading.vue";
    import Medal from "~/components/icons/Medal.vue";
    import Plus from "~/components/icons/Plus.vue";
    import ScheduleCompleted from "~/components/icons/ScheduleCompleted.vue";
    import ScrewDriver from "~/components/icons/ScrewDriver.vue";
    import Search from "~/components/icons/Search.vue";
    import ShoppingCart from "~/components/icons/ShoppingCart.vue";
    import Tools from "~/components/icons/Tools.vue";
    import User from "~/components/icons/User.vue";
    import Wrench from "~/components/icons/Wrench.vue";

    const icons = {
        "arrow-left": ArrowLeft,
        "check-circle": CheckCircle,
        "clear": Clear,
        "coins": Coins,
        "cross": Cross,
        "envelope": Envelope,
        "home": Home,
        "loading": Loading,
        "medal": Medal,
        "plus": Plus,
        "schedule-completed": ScheduleCompleted,
        "screw-driver": ScrewDriver,
        "search": Search,
        "shopping-cart": ShoppingCart,
        "tools": Tools,
        "user": User,
        "wrench": Wrench
    }

    interface iconName
    {
        name: "arrow-left"
            | "check-circle"
            | "clear"
            | "coins"
            | "cross"
            | "envelope"
            | "home"
            | "loading"
            | "medal"
            | "plus"
            | "schedule-completed"
            | "screw-driver"
            | "search"
            | "shopping-cart"
            | "tools"
            | "user"
            | "wrench";
    }

    defineProps({
        name: {
            type: String as () => iconName["name"],
            required: true
        },

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
