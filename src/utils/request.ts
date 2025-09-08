//进行axios二次封装：使用请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
//第一步：利用axios对象的create方法创建axios实例
const request  = axios.create({
    //基础路径
    baseURL:import.meta.env.VITE_APP_BASE_API,//基础路径携带api
    timeout:5000,//超时时间
})
//第二步：request实例添加请求与响应拦截器
request.interceptors.request.use((config)=>{
    //返回配置对象
    return config
})
//第三步：响应拦截器
request.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
    let message = '';
    const status = error.response.status;
    switch(status){
        case 401:
            message="TOKEN过期"
            break;
        case 403:
            message="无权访问"
            break;
        case 404:
            message="请求地址错误"
            break;
        case 500:
            message="服务器出现问题"
            break;
        default:
            message="网络出现问题"
            break
    }
    ElMessage({
        type:'error',
        message
    })
    return Promise.reject(error)
})
export default request;