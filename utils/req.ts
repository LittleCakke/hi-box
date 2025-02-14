import axios from "axios";

const req = axios.create({
    baseURL: "/api"
});

req.interceptors.request.use(
    config =>
    {
        // TODO
        return config;
    },

    err => Promise.reject(err)
);

req.interceptors.response.use(
    res => res.data,

    err => Promise.reject(err)
);

export default req;