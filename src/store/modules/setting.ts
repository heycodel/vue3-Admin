//layout组件相关配置
import { defineStore } from "pinia";
const useLayoutSettingStore  = defineStore("SettingStore",{
    state:()=>{
        return {
            fold: false
        }
    }
})
export default useLayoutSettingStore;
