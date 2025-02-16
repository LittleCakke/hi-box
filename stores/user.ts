import type { User } from "~/type";

export const useUserStore = defineStore("user", {
    state()
    {
        return {
            loggedUser: {} as User,
            isSigned: false,
            signCount: 0
        }
    },

    persist: true
});
