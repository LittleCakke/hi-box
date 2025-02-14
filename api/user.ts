import req from "~/utils/req";

export const userApi = {
    login: (user: any) => req({
        url: "/user/login",
        method: "POST",
        data: user
    })
}