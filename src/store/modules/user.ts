//创建用户相关的小仓库
import { defineStore } from "pinia";
import { reqLogin } from "../../api/user";
//引入数据类型
import type { loginForm } from "../../api/user/type";
import type { userState } from "./types/types";
//引入本地操作本地存储的方法
import { SET_TOKEN, GET_TOKEN } from "../../utils/token";
const useUserStore = defineStore("user", {
  state: (): userState => {
    return {
      token: GET_TOKEN() || null, //用户唯一标识符
    };
  },
  actions: {
    async userLogin(data: loginForm) {
      interface LoginResponse {
        code: number;
        data: {
          token: string;
          message?: string;
        };
      }
      const res: LoginResponse = await reqLogin(data);
      console.log(res);
      if (res.code === 200) {
        this.token = res.data.token;
        console.log(this.token);
        SET_TOKEN(res.data.token);
      } else {
        return Promise.reject(new Error(res.data.message));
      }
    },
  },
  getters: {},
});
export default useUserStore;
