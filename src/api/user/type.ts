export interface loginForm{
    userName:string,
    password:string
}
interface dataType{
    token:string,
    message:string
}
export interface loginResponseData{
    code:number,
    data:dataType
}
interface userInfo{
    userId:number,
    avatar:string,
    userName:string,
    password:string,
    desc:string,
    roles:string[],
    buttons:string[],
    routes:string[],
    token:string
}
interface user{
    checkUSer:userInfo
}
export interface userResponseData{
    code:number,
    data:user
}