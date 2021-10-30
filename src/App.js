/**
 * メインコンポーネント
 */
import React,{ useRef, useState, useEffect } from "react";
import "./styles.css";
 
/**
 * Sampleコンポーネント
 */
const SampleComponent = () => {
   // ステート変数
   const [ text, setText ] = useState("");
   const inputRefObject = useRef(null);

   /**
    * 副作用関数
    */
  useEffect(() => {
    console.log("レンダリング！");
  });



   /**
    * クリックした時の関数
    */
  const handleClick = () => {
    setText(inputRefObject.current.value);
  };

  /**
   * 初期値を設定する関数
   */
  const textReset = () => {
    setText("");
    inputRefObject.current.value = "";
  }

  return (
    <>
      <input ref={inputRefObject} type="text" />
      <button onclick={handleClick}>set text</button>
      <button onClick={textReset}>reset</button>
      <p>text: {text}</p>
    </>
  );
}
 
 export default function App() {
   return <SampleComponent />;
 };
 