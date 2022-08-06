import { FunctionComponent, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { ITodo, ITodoForm } from "../../../models/todo.model";
import { Input } from 'antd';
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

    const { TextArea } = Input;
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
                    <Input addonBefore='title:' {...field} />
                }
                name="title"
                control={todoForm.control}
                defaultValue=""
            />
            <Controller
                render={({ field }) => <TextArea placeholder="body" {...field} />}
                name="body"
                control={todoForm.control}
                defaultValue=""
            />
            <button type="submit">{todoToEdit ? 'Save' : 'Submit'}</button>
        </form>

    )
}