/**
 * Thirdコンポーネント
 */
import React, { useContext } from "react";
import { TextContext } from "./TextProvider";

export const Third = () => {
    // Contextオブジェクトを取得する。
    const textData = useContext(TextContext);
    console.log(textData);

    return (
        <>
            <p>
                Thirdコンポーネント：<b>{textData}</b>
            </p>
        </>
    );
}