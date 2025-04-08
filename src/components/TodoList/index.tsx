import IconClose from '/icon-cross.svg'
import './style-task.css'

type Todo = {
    id: number
    title: string
    completed?: boolean
}

type TodoListProps = {
    todos: Todo[]
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

export const TodoList = ({ todos, onDelete, onToggle }: TodoListProps) => {
    if (!todos.length) {
        return <p className="empty-list">Sem tarefas no momento</p>
    }

    return (
        <ul className="tasks-container" role="list">
            {todos.map(todo => (
                <li key={todo.id} className={`task-item ${todo.completed ? 'completed' : ''}`}>
                    <label className="task-label">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                            className="task-checkbox"
                        />
                        <span className="task-title">{todo.title}</span>
                        <button 
                            onClick={() => onDelete(todo.id)}
                            className="delete-button"
                            aria-label={`Delete ${todo.title}`}
                        >
                            <img src={IconClose} alt="" />
                        </button>
                    </label>
                </li>
            ))}
        </ul>
    )
}