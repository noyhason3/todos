import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { TodoForm } from "../../../cmps/Todo/TodoForm/TodoForm";
import { TodoList } from "../../../cmps/Todo/TodoList/TodoList";
import { ITodo } from "../../../models/todo.model";
import { AppDispatch, RootState } from "../../../redux/store";
import { deleteTodo, setTodos, updateTodo } from "../../../redux/todo.store";

export const TodoPage: FunctionComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { todos } = useSelector((state: RootState) => state.todoStore)

    useEffect(() => {
        dispatch(setTodos())
    }, [])

    const handleDelete = (ev: React.FormEvent<HTMLInputElement>, id: string) => {
        ev.stopPropagation()
        ev.preventDefault()
        dispatch(deleteTodo(id))
    }

    const toggleDone = (ev: React.FormEvent<HTMLInputElement>, todo: ITodo) => {
        ev.stopPropagation()
        ev.preventDefault()
        dispatch(updateTodo({ ...todo, isDone: !todo.isDone }))
    }

    return <section className="todo">
        <h1 className="title">My Tasks:</h1>
        <TodoForm />
        <TodoList todos={todos} handleDelete={handleDelete} toggleDone={toggleDone} />
        <Outlet />
    </section>
}
