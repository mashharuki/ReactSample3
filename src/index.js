/**
 * メインコンポーネント
 */
import React,{ useState, useEffect } from "react";
import "./styles.css";

// 初期値
const INITIAL_COUNT = 0;

/**
 * サンプルコンポーネント
 */
const SampleComponent = () => {
  // ステート変数
  const [ count, setCount ] = useState(INITIAL_COUNT);

  /**
   * 副作用フックの宣言
   */
  useEffect(callbackFunction, [count]);

  /**
   * 副作用関数を宣言する。
   */
  const callbackFunction = () => {
    document.title = `${count}回クリックされました。`;
  };

  /**
   * カウントアップする関数
   */  
  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  /**
   * カウントをリセットするための関数
   */
  const countReset = () => {
    setCount(INITIAL_COUNT);
  };

  // レンダリングする内容
  return (
    <div className="App">
      <p>現在のカウント数：{count}</p>
      <button onClick={countIncrement}>＋ボタン</button>
      <button onClick={countReset}>リセット</button>
    </div>
  );
}

export default function App() {
  return <SampleComponent/>;
}
