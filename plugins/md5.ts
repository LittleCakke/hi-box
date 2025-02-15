import { Md5 } from "ts-md5";

export default defineNuxtPlugin(() =>
{
    return {
        provide: {
            md5: Md5
        }
    }
});