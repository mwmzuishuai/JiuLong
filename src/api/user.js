import request from "./request";
//登录
const postLogin = (data) => {
    return request({
        url: "/login",
        method: "post",
        data,
    });
};
export {
    postLogin
}