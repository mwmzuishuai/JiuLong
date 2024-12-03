import axios from "axios";
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_URL,
    timeout: 5000,
});
// 请求拦截器
request.interceptors.request.use(
    (config) => {
        // 判断是不是登录接口，如果是登录接口，不需要携带token
        if (config.url !== "/login") {
            // 携带token
            config.headers.Authorization = localStorage.getItem("token");
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
// 响应拦截器
request.interceptors.response.use(
    (response) => {
        // 没有token，跳转到登录页
        if (response.data.code === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
export default request;