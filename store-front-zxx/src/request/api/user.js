/**
 * 用户模块的api接口列表
 */
import base from "./base";
import axios from "../http";
import qs from "qs";

const user = {
  //用户注册
  userRegist(params) {
    return axios.post(`${base.sq}/regist`, qs.stringify(params));
  },
  //用户登陆
  userLogin(params) {
    return axios.post(`${base.sq}/login`, qs.stringify(params));
  }
};

export default user;
