import React,{ createContext } from "react";

// Contextオブジェクトを生成する。
export const TextContext = createContext();
// テキスト
const text = "これはProviderから渡されたテキストです。";

export const TextProvider = ({ children }) => {
    return <TextContext.Provider value={text}>{children}</TextContext.Provider>;
};