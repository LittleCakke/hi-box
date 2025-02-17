export const regexPatterns = {
    email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/,
    phone: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
    url: /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/,
    price: /^(0|([1-9][0-9]*))(\.[\d]{1,2})?$/,
    password:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
}
