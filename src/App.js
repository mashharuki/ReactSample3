/**
 * メインコンポーネント
 */
import React, { useState } from "react";
import "./styles.css";

/**
 * カスタムフックを定義する。
 */
const useCounter = (initialCount) => {
  // ステート変数
  const [ count, setCount ] = useState(initialCount);
  
  /**
   * カウントアップする関数
   */
  const countAdd = () => setCount((prevCount) => prevCount + 1);

  /**
   * カウントダウンする関数
   */
  const countDown = () => setCount((prevCount) => prevCount - 1);

  /**
   * カウントリセット
   */
  const countReset = () => setCount(initialCount);

  return { count, countAdd, countDown, countReset };
};

/**
 * CountTextコンポーネント
 */
const CounterText = ({count}) => <p>現在のカウント数：{count}</p>;

/**
 * Counterコンポーネント
 */
const Counter = () => {
  // 独自フックを利用する。
  const { count, countAdd, countDown, countReset } = useCounter(0);

  return (
    <div className="counterContainer">
      <CounterText count={count} />
      <button onClick={countAdd}>ボタン +1</button>
      <button onClick={countDown}>ボタン -1</button>
      <button onClick={countReset}>リセット</button>
    </div>
  );
};

export default function App() {
  return <Counter />;
};
 