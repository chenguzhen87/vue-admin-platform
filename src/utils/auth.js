/*
 * @Description: token操作工具
 * @Author: icony/精武陈真
 * @Date: 2019-06-19 10:33:46
 * @LastEditTime: 2019-09-10 19:09:00
 * @LastEditors: icony/精武陈真
 */
import Cookies from '@icony/vue-container/js-cookie'

const TokenKey =  process.env.VUE_APP_TOKEN

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
