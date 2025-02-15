import { useSystemStore } from "~/stores/system";
import { useUserStore } from "~/stores/user";

export default defineNuxtPlugin(() =>
{
    return {
        provide: {
            systemStore: useSystemStore(),
            userStore: useUserStore(),
        }
    }
});