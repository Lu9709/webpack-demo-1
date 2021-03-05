import "./x.scss";
import "./y.less";
import "./c.styl";
import png from "./asset/1.png";
console.log("hello");

const div = document.getElementById("app");
div.innerHTML = `<img src =${png}>`;
const button = document.createElement("button");

button.innerText = "lazy load";

div.appendChild(button);
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      // 加载的是异步的
      const fn = module.default;
      fn();
      // 调用的是个模块，模块的默认值为一个函数
    },
    () => {
      console.log("模块加载错误");
    }
  );
};
