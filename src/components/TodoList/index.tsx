import IconClose from '/icon-cross.svg'

type Todos = {
    id: number
    title: string
}

type TodoListProps = {
    todos: Todos[]
    onDelete: (id: number) => void
}

export const TodoList = ({ todos, onDelete }: TodoListProps) => (
    <ul>
        {todos.map(todo => (
            <li>
                <label>
                    <input type='checkbox' value={todo.id} />
                    {todo.title}
                    <button onClick={() => onDelete(todo.id)}>
                        <img src={IconClose} alt='Delete' />
                    </button>
                </label>
            </li>
        ))}
    </ul>
)
