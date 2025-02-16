export const useSystemStore = defineStore("system", {
    state()
    {
        return {
            // 需要登录提示框
            loginAlertShow: false,
            // 签到提示框
            signDialogShow: false,
        }
    },

    actions: {
        toLogin()
        {
            this.loginAlertShow = false;
            navigateTo("/login");
        }
    }
})
