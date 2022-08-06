import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { TodoForm } from "../../../cmps/Todo/TodoForm/TodoForm";
import { TodoList } from "../../../cmps/Todo/TodoList/TodoList";
import { ITodo } from "../../../models/todo.model";
import { AppDispatch, RootState } from "../../../redux/store";
import { setTodos, updateTodo } from "../../../redux/todo.store";

export const TodoPage: FunctionComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { todos } = useSelector((state: RootState) => state.todoStore)

    useEffect(() => {
        dispatch(setTodos())
    }, [])

    const handleEdit = (todo: ITodo) => {
        dispatch(updateTodo(todo))
    }

    return <section className="todo">
        <h1>Todos</h1>
        <TodoList todos={todos} handleEdit={handleEdit} />
        <TodoForm />
        <Outlet />
    </section>
}
