type TodoInputProps = {
    todo: string
    setTodo: (value: string) => void
    addTodo: () => void
}

export const TodoInput = ({ todo, setTodo, addTodo }: TodoInputProps) => (
    <>
        <input
            placeholder='Create a new todo...'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button type='button' onClick={addTodo}>Add</button>
    </>
)
