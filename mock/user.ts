function createUserList(){
    return [
        {
            userId:1,
            avatar:'',
            userName:'admin',
            password:'111111',
            desc:'平台管理员',
            roles:['平台管理员'],
            buttons:['user.detail'],
            routes:['home'],
            token:'Admin Token',
        },
        {
            userId:2,
            avatar:'',
            userName:'system',
            password:'111111',
            desc:'系统管理员',
            roles:['系统管理员'],
            buttons:['user.detail','user.user'],
            routes:['home'],
            token:'System Token',
        }
    ]
}
export default[
    {
        url:'/api/user/login',
        method:'post',
        response:({body})=>{
            const {userName,password} = body
            const checkUser = createUserList().find((item)=>item.userName===userName&&item.password===password)
            if(!checkUser){
                return{code:201,data:{message:'账号或密码不正确'}}
            }
            const {token} = checkUser
            return {code:200,data:{token}}
        }
    },
    {
        url:'/api/user/info',
        method:'get',
        response:(request)=>{
            const token = request.headers.token
            const checkUser = createUserList().find((item)=>item.token===token)
            if(!checkUser){
                return{code:201,data:{message:'账号或密码不正确'}}
            }
            return {code:200,data:{checkUser}}
        }
    }
]