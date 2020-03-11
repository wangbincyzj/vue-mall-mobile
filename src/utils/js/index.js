/*
* 重置html的fontsize
* 基于iphone6plus的414px标准
* 使1rem=100px;
*/
import VueRouter from "vue-router";

function htmlResize(minSize=300, maxSize=1000) {
  let init = false;
  function resize() {
    let screenWidth = window.innerWidth;
    if (screenWidth<minSize || screenWidth>maxSize) {
      alert("当前分辨率不适配")
    }
    let radio = screenWidth / 414;
    let htmlFontSize = (100 * radio).toFixed(2) + "px";
    document.documentElement.style.fontSize = htmlFontSize;
    if (!init) {
      console.log(`%chtml fontsize完成初始适配${htmlFontSize}:${timestampUtil(+new Date())}`, "color:green;font-size:10px");
      init = true;
    }
  }
  resize();
  window.addEventListener("resize", ()=>{resize()})
}

/*
* 时间戳转格式化工具
* */
function timestampUtil(timestamp) {
  let D = new Date(timestamp);
  let y = D.getFullYear().toString();
  let M = (D.getMonth() + 1).toString().padStart(2, "0");
  let d = (D.getDate()).toString().padStart(2, "0");
  let h = (D.getHours()).toString().padStart(2, "0");
  let m = (D.getMinutes()).toString().padStart(2, "0");
  let s = (D.getSeconds()).toString().padStart(2, "0");
  return (`${y}-${M}-${d} ${h}:${m}:${s}`)
}

function resolveDupRoute() {
  const originalPush = VueRouter.prototype.push;
  VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => {
      console.log("路由重复点击")})
  };

}

export let utils = {
  htmlResize, timestampUtil, resolveDupRoute
};
