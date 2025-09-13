//封装一个函数：获取一个结果：当前早上|上午|下午|晚上
const getTime = (): string => {
  let message: string = "";
  const hours = new Date().getHours();
  if(hours<=9) {
    message = "早上好";
  } else if(hours<=12) {
    message = "上午好";
  } else if(hours<=18) {
    message = "下午好";
  } else {
    message = "晚上好";
  }
  return message;
};
export default getTime; 