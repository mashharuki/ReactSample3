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

  /**
   * 「未完了」のリストの配列
   */
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  /**
   * 「完了」のリストの配列
   */
   const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  console.log("未完了ToDoリスト：", inCompletedList);
  console.log("完了ToDoリスト：", completedList);

  return (
    <>
      <h1>ToDo進捗管理</h1>
      <textarea/>
      <button>+ ToDo追加</button>

      <h2>未完了ToDoリスト</h2>
      <ul>
        {inCompletedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>
              {todo.done ? "未完了リストへ" : "完了リストへ"}
            </button>
            <button>削除</button>
          </li>
        ))}
      </ul>

      <h2>完了ToDoリスト</h2>
      <ul>
        {completedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>
              {todo.done ? "未完了リストへ" : "完了リストへ"}
            </button>
            <button>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
