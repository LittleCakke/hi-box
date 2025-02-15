export const useSystemStore = defineStore("system", {
    state()
    {
        return {
            // 需要登录提示框
            loginPopupShow: false,
            // 签到提示框
            signPopupShow: false,
        }
    },

    actions: {
        toLogin()
        {
            this.loginPopupShow = false;
            navigateTo("/login");
        }
    }
})