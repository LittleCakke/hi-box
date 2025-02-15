import req from "~/utils/req";
import type { Result } from "~/type";

export const userApi = {
    getPhoneCode: (phone: string) => req<any, Result<any>>({
        url: "/user/send-msg",
        method: "GET",
        params: { phone }
    })
}
