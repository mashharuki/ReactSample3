/**
 * メインコンポーネント
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// ローカルに準備したモックサーバーのURL
const todoDataUrl = "http://localhost:3100/todos";

/**
 * Appコンポーネント
 */
function App() {
  // ステート変数
  const [ todoList, setTodoList ] = useState([]);

  /**
   * 副作用フック
   */
  useEffect(() => {
    /**
     * データ取得関数
     */
    const fetchData = async () => {
      // モックサーバーからの取得結果
      const response = await axios.get(todoDataUrl);
      // todoリストに設定する。
      setTodoList(response.data);
    };
    // 関数呼び出し
    fetchData();
  }, []);

  console.log("TODOリスト：", todoList);

  return (
    <>
      <h1>ToDo進捗管理</h1>
      <textarea/>
      <button>+ ToDo追加</button>

      <h2>ToDoリスト</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.content}({todo.done ? "完了" : "未完了"})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
