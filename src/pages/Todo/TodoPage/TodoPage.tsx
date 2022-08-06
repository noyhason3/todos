import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { TodoForm } from "../../../cmps/Todo/TodoForm/TodoForm";
import { TodoList } from "../../../cmps/Todo/TodoList/TodoList";
import { ITodo } from "../../../models/todo.model";
import { AppDispatch, RootState } from "../../../redux/store";
import { deleteTodo, setTodos } from "../../../redux/todo.store";

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

    return <section className="todo">
        <h1>Todos</h1>
        <TodoList todos={todos} handleDelete={handleDelete} />
        <TodoForm />
        <Outlet />
    </section>
}
