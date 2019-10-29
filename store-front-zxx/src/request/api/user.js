/**
 * 用户模块的api接口列表
 */
import base from "./base";
import axios from "@/request/http";
import qs from "qs";

// export const userRegist = function(params) {
//   return axios.post(`${base.sq}/regist`, qs.stringify(params));
// };

// export const userLogin = function(params) {
//   return axios.post(`${base.sq}/login`, qs.stringify(params));
// };
const user = {
  //用户注册
  userRegist(params) {
    console.log("用户注册", axios);
    return axios.post(`${base.sq}/regist`, params);
    // axios.post(`${base.sq}/regist`, params);
  },
  //用户登陆
  userLogin(params) {
    return axios.post(`${base.sq}/login`, qs.stringify(params));
  }
};

export default user;
