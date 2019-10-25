/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from "axios";
import router from "../router";
import store from "../store";
import { Message } from "element-ui";

/**
 * 提示函数
 */
const tip = msg => {
  Message({
    message: msg,
    showClose: false,
    duration: 1500
  });
};

/**
 * 跳转登录页
 * 携带当前页面路由，在登陆页面完成登陆后返回到当前页面
 */
const toLogin = () => {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
};

/**
 * 请求失败后的错误统一处理
 */
const errHandle = (status, other) => {
  //状态码判断
  switch (status) {
    //401:未登录 跳转到登录页
    case 401:
      toLogin();
      break;
    //403:token过期
    //清除token并跳转登录页
    case 403:
      localStorage.removeItem("token");
      store.userLogin.commit("loginSuccess", null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    //404:访问的资源不存在
    case 404:
      tip("请求资源不存在!");
      break;
    default:
      console.log(other);
  }
};
//创建axios实例
var instance = axios.create({ timeout: 1000 * 30 });
//设置post请求头
instance.defaults.headers.post["Content-Type"] = "application/json";

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  config => {
    const token = store.userLogin.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error)
);

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  //请求成功
  res => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  //请求失败
  error => {
    const { response } = error;
    if (response) {
      errHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      store.common.commit("changeNetwork", false);
    }
  }
);

export default instance;
