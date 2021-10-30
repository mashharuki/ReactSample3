/**
 * ToDoをリスト化するコンポーネント
 */
import { TodoTitle } from './TodoTitle';
import { TodoItem } from './TodoItem';

export  const TodoList = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem, title, as }) => {
    return (
        <>
            {todoList.length !== 0 && (
                <>
                    <TodoTitle title={title} as={as} />
                    <ul>
                        {todoList.map((todo) => (
                        // TodoItemコンポーネントを使ってレンダリングする。
                        <TodoItem 
                            todo={todo} 
                            key={todo.id} 
                            toggleTodoListItemStatus = {toggleTodoListItemStatus}
                            deleteTodoListItem = {deleteTodoListItem} 
                        />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
  };