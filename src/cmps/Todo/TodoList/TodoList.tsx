import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ITodo } from "../../../models/todo.model";
import { TodoPreview } from "../TodoPreview/TodoPreview";
import './TodoList.scss'

interface ITodoListProps {
    todos: ITodo[],
    handleDelete: Function,
    toggleDone: Function
}

export const TodoList: FunctionComponent<ITodoListProps> = ({ todos, handleDelete, toggleDone }) => {

    return (
        <ul className="todo-list">
            {!!todos.length ? todos.map(todo => {
                return (
                    <li className="list-item" key={todo.id}>
                        <Link to={todo.id} className='link' >
                            <TodoPreview todo={todo} handleDelete={handleDelete} toggleDone={toggleDone} />
                        </Link>
                    </li>
                )
            }) : <h2>No Todos to show</h2>
            }
        </ul>
    )
}