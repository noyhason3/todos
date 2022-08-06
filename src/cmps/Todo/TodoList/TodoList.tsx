import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ITodo } from "../../../models/todo.model";
import { TodoPreview } from "../TodoPreview/TodoPreview";
import './TodoList.scss'

interface ITodoListProps {
    todos: ITodo[],
    handleDelete: Function
}

export const TodoList: FunctionComponent<ITodoListProps> = ({ todos, handleDelete }) => {

    return (
        <ul className="todo-list">
            {!!todos.length ? todos.map(todo => {
                return (
                    <li className="" key={todo.id}>
                        <Link to={todo.id} className='link' >
                            <TodoPreview todo={todo} handleDelete={handleDelete} />
                        </Link>
                    </li>
                )
            }) : <h2>No Todos to show</h2>
            }
        </ul>
    )
}