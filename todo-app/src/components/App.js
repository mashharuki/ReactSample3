/**
 * メインコンポーネント
 */

import React, { useRef } from "react";
import { addTodosData } from "../apis/todo";
import { useTodo } from "../hooks/useTodo";

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
 * TodoAddコンポーネント
 */
const TodoAdd = ({ inputEl, handleAddTodoListItem }) => { 
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>
        + ToDo追加
      </button>
    </>
  );
};

/**
 * Appコンポーネント
 */
function App() {
  // カスタムフックを利用してTodoリストを取得する。
  const { todoList, addTodoListItem, } = useTodo();
  // useRefフックを定義
  const inputEl = useRef(null);

  console.log("TODOリスト：", todoList);

  /**
   * 「+Todo追加」ボタンをクリックした時の処理
   */
  const handleAddTodoListItem = () => {
    // 入力されていなければ何も返さない。
    if (inputEl.current.value === "") return;
    // Todoに追加するためにaddTodoListItemを追加する。
    addTodoListItem(inputEl.current.value);
    // 入力フォームをクリアする。
    inputEl.current.value = "";
  };

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
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      
      <TodoTitle title="未完了ToDoリスト" as="h2" />
      <TodoList todoList={inCompletedList} />

      <TodoTitle title="完了ToDoリスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
