/**
 * メインコンポーネント
 */

import React, { useRef } from "react";
import { addTodosData } from "../apis/todo";
import { useTodo } from "../hooks/useTodo";
import { TodoTitle } from './TodoTitle';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { Container } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';


/**
 * Appコンポーネント
 */
function App() {
  // カスタムフックを利用してTodoリストを取得する。
  const { todoList, addTodoListItem, toggleTodoListItemStatus, deleteTodoListItem } = useTodo();
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
    <Container centerContent p={{ base: "4", md: "6" }} maxWidth="3xl">
      <TodoTitle title="ToDo進捗管理" as="h1" fontSize={{ base: "2xl", md: "3xl" }} />
      <TodoAdd 
        placeholder="ADD Todo"
        leftIcon = {<AddIcon />}
        buttonText= "Todoを追加"
        inputEl={inputEl} 
        handleAddTodoListItem={handleAddTodoListItem} 
      />
      
      <TodoList 
        todoList={inCompletedList} 
        toggleTodoListItemStatus={toggleTodoListItemStatus} 
        deleteTodoListItem={deleteTodoListItem} 
        title="未完了ToDoリスト" 
        as="h2"
        fontSize={{ base: "xl", md: "2xl" }}
      />

      <TodoList 
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus} 
        deleteTodoListItem={deleteTodoListItem} 
        title="完了ToDoリスト" 
        as="h2" 
        fontSize={{ base: "xl", md: "2xl" }}
      />
    </Container>
  );
}

export default App;
