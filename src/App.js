/**
 * メインコンポーネント
 */
import React,{ createContext, useContext } from "react";
import "./styles.css";
 
// Contextオブジェクトを生成
const SampleContextObject = createContext();
// メッセージ
const message = "I love React!!";

/**
 * ConsumerComponent
 */
const ConsumerComponent = () => {
  const messageText = useContext(SampleContextObject);
  console.log(messageText);
  return <p>{messageText}</p>;
};
 
export default function App() {
  return (
    <SampleContextObject.Provider value={message}>
      <ConsumerComponent/>
    </SampleContextObject.Provider>
  );
};
 