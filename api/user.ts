import req from "~/utils/req";
import type {
    LoginType,
    Result,
    User
} from "~/type";

export const userApi = {
    getPhoneCode: (phone: string) => req<any, Result<any>>({
        url: "/user/send-msg",
        method: "GET",
        params: { phone }
    }),

    login: (data: LoginType) => req<any, Result<string>>({
        url: data.code ? "/user/login/verifyCode": "/user/login",
        method: "POST",
        data
    }),

    info: () => req<any, Result<User>>({
        url: "/user/info",
        method: "GET"
    }),

    sign: () => req<any, Result<number>>({
        url: "/user/sign",
        method: "POST"
    }),

    monthSignInfo: (date: string) => req<any, Result<any>>({
        url: "/user/sign-info",
        method: "GET",
        params: { date }
    }),

    // 连续签到信息
    continuousSignInfo: () => req<any, Result<number>>({
        url: "/user/sign-info/continuous",
        method: "GET"
    })
}
