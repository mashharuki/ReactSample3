/**
 * ToDo単体用のコンポーネント
 */
import { ListItem, Text, Flex, Button, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const TodoItem = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {

    // todoの状態を更新する関数
    const handleToggleTodoItemStatus = ()=> toggleTodoListItemStatus(todo.id, todo.done);
    // todoを削除する関数
    const handledeleteTodoListItem = () =>  deleteTodoListItem(todo.id);
    // ラベル
    const label = todo.done ? "未完了リストへ" : "完了リストへ";
    const setColorScheme = todo.done ? "pinkd" : "blue";

    return (
        <ListItem borderWidth="1px" p="4" mt="4" bg="white" borderRadius="md" borderColor="gray.300">
            <Text mb="6">
                {todo.content}
            </Text>
            <Flex align="center" justify="flex-end" >
                <Button 
                    colorScheme={setColorScheme}
                    variant="outline"
                    size="sm"    
                    onClick ={handleToggleTodoItemStatus}
                >
                    {label}
                </Button>
                <IconButton icon={<DeleteIcon />} variant="unstyled" aria-label="delete" onClick={handledeleteTodoListItem} />
            </Flex>
        </ListItem>
    );
};