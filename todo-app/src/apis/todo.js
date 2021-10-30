/**
 * サーバーと通信するAPIを定義したファイル
 */
import axios from 'axios';
// ローカルに準備したモックサーバーのURL
const todoDataUrl = "http://localhost:3100/todos";

/**
 * GETリクエストによりToDoを取得する関数
 */
export const getAllTodosData = async () => {
    // データを取得する。
    const response = await axios.get(todoDataUrl);
    return response.data;
};

/**
 * POSTリクエストによりToDoを追加する関数
 */
export const addTodosData = async (todo) => {
    console.log("追加するtodo:",todo);
    // データを追加する。
    const response = await axios.post(todoDataUrl, todo);
    return response.data;
};

/**
 * DELETEリクエストによりToDoを削除する関数
 */
export const deleteTodosData = async (id) => {
    // データを削除する。
    await axios.delete(`${todoDataUrl}/${id}`);
    return id;
};

/**
 * PUTリクエストによりToDoを更新する関数
 */
export const updataTodosData = async (id, todo) => {
    // データを更新する。
    const response = await axios.put(`${todoDataUrl}/${id}`, todo);
    return response.data;
};