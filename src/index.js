/**
 * メインコンポーネント
 */
import React,{ useState, useEffect } from "react";
import "./styles.css";

// 初期値
const INITIAL_COUNT = 0;

/**
 * タイマーコンポーネント
 */
const Timer = () => {
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
    alert("副作用関数が実行されました。");
    // タイマー設定
    const timer = setInterval(countIncrement, 1000);
    // レンダリングする内容
    return () => {
      console.log("timerが削除されました。");
      // timerを削除
      clearInterval(timer);
    };
  };

  /**
   * カウントアップする関数
   */  
  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("カウントアップ + 1");
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
      <button onClick={countReset}>リセット</button>
    </div>
  );
}

export default function App() {
  // ステート変数
  const [ display, toggleDisplay ] = useState(false);

  /**
   * displayの状態をトグルする関数
   */
  const handleToggleDisplay = () => {
    toggleDisplay(!display);
  };

  return (
    <>
      <button onClick={handleToggleDisplay}>
        {display ? "タイマーを非表示" : "タイマーを表示"}
      </button>

      {display && <Timer/>}
    </>
  );
}
