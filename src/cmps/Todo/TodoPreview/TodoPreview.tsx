import { FunctionComponent } from "react";
import { ITodo } from "../../../models/todo.model";
import deleteBtn from '../../../asstets/icons/close-btn.png'
import doneMark from '../../../asstets/icons/done-mark.png'
import './TodoPreview.scss'

interface ITodoPreviewProps {
    todo: ITodo,
    handleDelete: Function,
    toggleDone: Function
}



export const TodoPreview: FunctionComponent<ITodoPreviewProps> = ({ todo, handleDelete, toggleDone }) => {

    return <section className="todo-preview">
        <div className="img-container">
            <img className="done-mark" src={doneMark} alt="done-mark" onClick={(ev) => toggleDone(ev, todo)} />
            <img className="delete-btn" src={deleteBtn} alt="delete-button" onClick={(ev) => handleDelete(ev, todo.id)} />
        </div>

        <div className={todo.isDone ? "done-todo data-container" : "data-container"}>
            <h3 className="title">{todo.title}</h3>
            <p className="todo-content">{todo.content}</p>

        </div>

    </section>
}

