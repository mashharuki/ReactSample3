/**
 * メインコンポーネント
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// ローカルに準備したモックサーバーのURL
const todoDataUrl = "http://localhost:3100/todos";

/**
 * TodoTitleコンポーネント
 */
const TodoTitle = ({ title, as }) => {

  // asがh1であれば<h1>で囲む
  if (as == "h1") {
    return <h1>{title}</h1>;
  } else if (as == "h2") { // asがh2であれば<h2>で囲む
    return <h2>{title}</h2>;
  } else { // どれでもなければ <p>で囲む
    return <p>{title}</p>;
  }
};

/**
 * TodoItemコンポーネント
 */
const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.content}
      <button>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button>削除</button>
    </li>
  );
};

/**
 * TodoListコンポーネント
 */
const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        // TodoItemコンポーネントを使ってレンダリングする。
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

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
      <TodoTitle title="ToDo進捗管理" as="h1" />
      <textarea/>
      <button>+ ToDo追加</button>

      <TodoTitle title="未完了ToDoリスト" as="h2" />
      <TodoList todoList={inCompletedList} />

      <TodoTitle title="完了ToDoリスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
