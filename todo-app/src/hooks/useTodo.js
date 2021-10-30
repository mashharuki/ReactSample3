/**
 * Todoの状態を管理するカスタムフック
 */
import React, { useState, useEffect } from 'react';
import { ulid } from 'ulid';
// APIモジュールをインポートする(関数全てをインポート)
import * as todoData from '../apis/todo';

/**
 * useTodoカスタムフック
 */
export const useTodo = () => {
    // ステート変数
    const [ todoList, setTodoList ] = useState([]);

    /**
     * 副作用フック
     */
    useEffect(() => {
        // Todoリストを全て取得する関数
        todoData.getAllTodosData().then((todo) => {
            // ステート変数にセット
            setTodoList([...todo].reverse());
        });
    }, []);

    /**
     * Todoリストの状態を更新する関数
     */
    const toggleTodoListItemStatus = (id, done) => {
        // Todoリストからidに合致するものを探す。
        const todoItem = todoList.find((item) => item.id === id);
        // 状態を反転させたTodoを作成する。
        const newTodoItem = {...todoItem, done: !done};
        // データを更新する。
        todoData.updataTodosData(id, newTodoItem).then((updatedToDo) =>  {
            // 状態が更新されたtodoを含めて新しい配列を生成する。
            // 今回更新されたIDと合致したTodoについては新しい内容で置き換える。
            const newTodoList = todoList.map((item) =>  
                item.id !== updatedToDo.id ? item : updatedToDo
            );
            setTodoList(newTodoList);
        });
    };

    /**
     * Todoを新たに追加する関数
     */
    const addTodoListItem = (todoContent) => {
        // 新しいTodo
        const newTodoItem = {
            content : todoContent,
            id : ulid(),
            done : false
        };

        // データを追加し、TodoListの内容も更新する。
        return todoData.addTodosData(newTodoItem).then((addTodo) => {
            // TodoListを更新する。(newTodoItemを追加された状態にする。)
            setTodoList(addTodo, ...todoList);
        });
    };

    /**
     * Todoを削除する関数
     */
    const deleteTodoListItem = (id) => {
        // データを削除してtodoリストの状態も更新する。
        todoData.deleteTodosData(id).then((deletedItemId) => {
            // 新しいTodoリストの配列
            const newTodoList  = todoList.filter((item) => item.id !== deletedItemId);
            // TodoListを更新する。
            setTodoList(newTodoList);
        });
    };

    // 関数群を返す。
    return {
        todoList,
        toggleTodoListItemStatus,
        addTodoListItem,
        deleteTodoListItem
    };
};