//创建用户相关的小仓库
import { defineStore } from "pinia";
import { reqLogin } from "../../api/user";
//引入数据类型
import type { loginForm } from "../../api/user/type";
const useUserStore = defineStore("user", {
    state: () => {
        return {
            
        }
    },
    actions: {
       async userLogin(data:loginForm) {
            const res = await reqLogin(data)
            console.log(res)
        }
    },
    getters: { 

    }
});
export default useUserStore;