import { Container } from './styles'

import { Header, TodoInput, TodoList } from '../../components'
import { useTodo } from '../../hooks/useTodo'

export const Todo = () => {
    const {
        addTodo,
        deleteTodo,
        removeSelectedTodos,
        setTodo,
        todo,
        todoList,
        selectTodos } = useTodo()

    return (
        <Container>
            <Header />
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
            <TodoList todos={todoList} onDelete={deleteTodo} />

            {selectTodos.length > 0 && <button type='button' onClick={removeSelectedTodos}>Remove</button>}
        </Container>
    )
}
