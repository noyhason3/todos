import { FunctionComponent } from "react";
import { ITodo } from "../../../models/todo.model";
import { TodoPreview } from "../TodoPreview/TodoPreview";
import './TodoList.scss'

interface ITodoListProps {
    todos: ITodo[]
}

export const TodoList: FunctionComponent<ITodoListProps> = ({ todos }) => {

    return (
        <ul className="todo-list">
            {!!todos.length ? todos.map(todo => {
                return (
                    <li className="" key={todo.id}>
                        <TodoPreview todo={todo} />
                    </li>
                )
            }) : <h2>No Todos to show</h2>
            }
        </ul>
    )
}