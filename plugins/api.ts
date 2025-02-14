import { userApi } from "~/api/user";

export default defineNuxtPlugin(() =>
{
    return {
        provide: {
            userApi
        }
    }
});
