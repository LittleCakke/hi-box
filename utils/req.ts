import axios from "axios";

const req = axios.create({
    baseURL: "/api"
});

req.interceptors.request.use(
    config =>
    {
        let token = localStorage.getItem("token");
        if (token)
            config.headers["token"] = token;
        return config;
    },

    err => Promise.reject(err)
);

req.interceptors.response.use(
    res => res.data,

    err => Promise.reject(err)
);

export default req;