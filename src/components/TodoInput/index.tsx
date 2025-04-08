import './style-todo.css'

type TodoInputProps = {
    todo: string
    setTodo: (value: string) => void
    addTodo: () => void
}

export const TodoInput = ({ todo, setTodo, addTodo }: TodoInputProps) => (
    <>
        <div className='container-input'>
            <input
            className='input-todo'
                type='text'
                placeholder='Criar uma nova tarefa...'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type='button' onClick={addTodo} className="button-add-task">Adicionar Tarefa 📝</button>
        </div>
    </>
)
