import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { ask } from '@tauri-apps/api/dialog';
import "./App.css";
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();

window.addEventListener("contextmenu", (e) => e.preventDefault(), false);

function App() {

  const [num, setNum] = useState(0);
  const [minNum, setminNum] = useState(0);
  const [maxNum, setmaxNum] = useState(0);
  const [cnum, setcNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ 获取 min（含）和 max（含）之间的数字
    console.log(11111);
    parseInt(Math.random() * (max - min + 1) + min, 10);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleClick = (min, max) => {
    if (min >= 0 && max >= 1) {
      setNum(randomNumberInRange(min, max));
      console.log(22222);
      console.log('2' + '|||||||' + min + '|||||' + max);
      setcNum(cnum + 1);
    } else {
      ask('您似乎未输入任何内容或输入出错！','系统提示');
    }

  }

  const defaultminNum = 0;
  const defaultmaxNum = 10;

  return (
    <div className="container">
      <label>最小值：</label>
      <br />
      <input type="number" onChange={e => setminNum(e.target.value)} />
      <br />
      <label>最大值：</label>
      <br />
      <input type="number" onChange={e => setmaxNum(e.target.value)} />
      <br />
      <button onClick={() => handleClick(minNum, maxNum)}>开始！</button>
      <br />
      <div>这次的随机数是：{num}</div>
      <br />
      <div>共执行：{cnum}次</div>
      <br />
      <a target="_blank" href="https://www.alextec.icu">点我访问作者博客</a>
      <br />
      <span>软件版本：{appVersion}</span>
    </div>
  );
}

export default App;
