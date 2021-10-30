/**
 * メインコンポーネント
 */
 import React,{ memo, useState, useEffect } from "react";
 import "./styles.css";
 
 /**
  * CountResultコンポーネント
  */
 const CountResult = memo(({text, countState}) => {
   console.log(`${text}ボタンがクリックされました。`);
 
   return (
     <p>
       {text} : {countState}
     </p>
   );
 });
 
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
   const countIncrementA = () => {
    setCountStateA((prevCountStateA) => prevCountStateA + 1);
   };

   const countIncrementB = () => {
    setCountStateB((prevCountStateB) => prevCountStateB + 1);
   };
 
   return (
     <>
       <CountResult text="Aボタン" countState={countStateA} />
       <CountResult text="Bボタン" countState={countStateB} />
       <button onClick={countIncrementA}>Aボタン</button>
       <button onClick={countIncrementB}>Bボタン</button>
     </>
   );
 }
 
 export default function App() {
   return <Counter />;
 };
 