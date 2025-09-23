/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (() => {
  let timer:any = null
  return (callback: () => void, wait: number = 800) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(callback, wait)
  }
})()    
