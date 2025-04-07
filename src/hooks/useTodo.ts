import { useState } from "react"

type Todos = {
    id: number
    title: string
}

type IdTodos = {
    id: number
}

export const useTodo = () => {
    const [todo, setTodo] = useState<string>('')
    const [todoList, setTodoList] = useState<Todos[]>([])
    const [selectTodos, setSelectTodos] = useState<IdTodos[]>([])

    function addTodo() {
        if (!todo.trim()) {
            return
        }

        setTodoList(prev => [...prev, {
            id: Date.now(),
            title: todo
        }])
    }

    function deleteTodo(id: number) {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    function removeSelectedTodos() {
        setTodoList(todoList.filter(todo => !selectTodos.some(selectedTodo => selectedTodo.id === todo.id)))
        setSelectTodos([])
    }

    return {
       setTodo,
       addTodo,
       deleteTodo,
       removeSelectedTodos,
       todo,
       todoList,
       selectTodos
    }
}
