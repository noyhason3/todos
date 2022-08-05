import { FunctionComponent } from "react";
import { ITodo } from "../../../models/todo.model";

interface ITodoPreviewProps {
    todo: ITodo;
}

export const TodoPreview: FunctionComponent<ITodoPreviewProps> = ({ todo }) => {

    return <section className="todo-preview">
        <h2>{todo.title}</h2>
        <p>{todo.body}</p>
    </section>
}