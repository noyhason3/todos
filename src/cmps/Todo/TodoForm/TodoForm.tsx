import { FunctionComponent, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { ITodo, ITodoForm } from "../../../models/todo.model";
import './TodoForm.scss'
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../../redux/todo.store";
import { useNavigate } from "react-router-dom";

interface ITodoFormProps {
    todoToEdit?: ITodo
}

export const TodoForm: FunctionComponent<ITodoFormProps> = ({ todoToEdit }) => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const todoForm = useForm<ITodoForm>();
    useEffect(() => {
        if (!todoToEdit) return
        todoForm.reset({ ...todoToEdit })
    }, [todoToEdit])

    const onSubmit = todoForm.handleSubmit((data) => {
        if (data.id) {
            dispatch(updateTodo(data))
            navigate('/todo')
        } else {
            dispatch(addTodo(data))
            todoForm.reset()
        }
    });

    return (
        <form onSubmit={onSubmit} className="todo-form">
            <Controller
                render={({ field }) =>
                    <input required placeholder='Title' {...field} />
                }
                name="title"
                control={todoForm.control}
                defaultValue=""
            />
            <Controller
                render={({ field }) => <textarea placeholder="Content" {...field} />}
                name="content"
                control={todoForm.control}
                defaultValue=""
            />
            <button type="submit">{todoToEdit ? 'Save' : 'Submit'}</button>
        </form>

    )
}