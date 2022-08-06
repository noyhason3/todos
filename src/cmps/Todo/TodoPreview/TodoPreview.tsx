import { FunctionComponent } from "react";
import { ITodo } from "../../../models/todo.model";
import deleteBtn from '../../../asstets/icons/close-btn.png'
import './TodoPreview.scss'

interface ITodoPreviewProps {
    todo: ITodo;
    handleDelete:Function
}



export const TodoPreview: FunctionComponent<ITodoPreviewProps> = ({ todo, handleDelete }) => {

    return <section className="todo-preview">
        <h2>{todo.title}</h2>
        <p>{todo.body}</p>
        <img className="delete-btn" src={deleteBtn} alt="delete-button" onClick={(ev)=>handleDelete(ev, todo.id)} />

    </section>
}