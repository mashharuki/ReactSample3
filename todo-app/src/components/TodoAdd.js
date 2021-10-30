/**
 * TODOを新規追加するためのコンポーネント
 */
export const TodoAdd = ({ inputEl, handleAddTodoListItem }) => { 
 return (
   <>
     <textarea ref={inputEl} />
     <button onClick={handleAddTodoListItem}>
       + ToDo追加
     </button>
   </>
 );
};