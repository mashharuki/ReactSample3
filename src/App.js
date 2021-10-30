/**
 * メインコンポーネント
 */
 import React,{ memo, useState, useEffect, useMemo } from "react";
 import "./styles.css";
 
 /**
  * 長方形の面積を求めるsquareコンポーネント
  */
const square = (params) => {
  // 配列を生成
  const testArea = [...Array(1000).keys()];
  // 重い処理(テスト用)
  testArea.forEach(() => {
    console.log(`「計算B+1」がボタンクリックされ、squre関数実行中, ループ処理を${testArea.length}回実行中`);
  });
  // 面積を計算
  return params * params;
};
 
 /**
  * Counterコンポーネント
  */
const Counter = () => {
   // ステート変数
   const [countStateA, setCountStateA] = useState(0);
   const [countStateB, setCountStateB] = useState(0);

   /**
    * カウントアップする関数
    */
   const countResultA = () => {
    setCountStateA((prevCountA) => prevCountA + 1);
    console.log("計算：A+1ボタンがクリックされました。");
   };

   const countResultB = () => {
    setCountStateB((prevCountB) => prevCountB + 1);
    console.log("計算：B+1ボタンがクリックされました。");
   };
 
   // 面積を求める。
   const squareArea = useMemo(() => square(countStateB), [countStateB]);

   return (
     <>
       <p><button onClick={countResultA}>計算：A + 1</button></p>
       <p><button onClick={countResultB}>計算：B + 1</button></p>
       <p>【正方形の面積】</p>
       <p>計算結果B  * 計算結果B = {squareArea}</p>
     </>
   );
 }
 
 export default function App() {
   return <Counter />;
 };
 