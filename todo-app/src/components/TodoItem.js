/**
 * ToDo単体用のコンポーネント
 */
export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {

    // todoの状態を更新する関数
    const handleToggleTodoItemStatus = ()=> toggleTodoListItemStatus(todo.id, todo.done);
    // todoを削除する関数
    const handledeleteTodoListItem = () =>  deleteTodoListItem(todo.id);

    return (
        <li>
        {todo.content}
        <button onClick ={handleToggleTodoItemStatus}>
            {todo.done ? "未完了リストへ" : "完了リストへ"}
        </button>
        <button onClick={handledeleteTodoListItem}>
            削除
        </button>
        </li>
    );
};