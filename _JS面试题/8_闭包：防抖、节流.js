// 防抖： 处理用户输入场景，搜索
// 节流： 监听窗口滚动，鼠标快速点击



function fn() {
  console.log("请求接口");
}
// 防抖 （多次触发 只执行最后一次）
// 高频率触发的事件,在指定的单位时间内，只响应最后一次，如果在指定的时间内再次触发，则重新计算时间
// 防抖类似于英雄联盟回城6秒，如果回城中被打断，再次回城需要再等6秒


function debounce(func, delay) {
  let timer = null;
  return function () {
    timer && clearTimeout(timer);
    // if (timer) {
    //   clearTimeout(timer);
    // }
    timer = setTimeout(() => {
      func && func();
    }, delay);
  };
}
document.getElementById("oninput").oninput = debounce(fn, 500);

// 节流 （规定时间内 只触发一次）
// 作用： 高频率触发的事件,在指定的单位时间内，只响应第一次
// 节流类似于英雄联盟里的英雄平A   一定是内点击多次只进行攻击一次


const onscroll1 =  throttle(fn, 500)

function throttle(func, delay) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      func && func();
      flag = true;
    }, delay);
  };
}
const throttleObj = throttle(fn, 1000);

