import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "../../cmps/Todo/TodoList/TodoList";
import { AppDispatch, RootState } from "../../redux/store";
import { setTodos } from "../../redux/todo.store";

export const Todo: FunctionComponent = () => {
    const dispatch: AppDispatch = useDispatch();
    const { todos } = useSelector((state: RootState) => state.todoStore)

    useEffect(() => {
        dispatch(setTodos())
    }, [todos])

    return <section className="todo">
        <h1>Todos</h1>
        <TodoList todos={todos} />
    </section>
}
