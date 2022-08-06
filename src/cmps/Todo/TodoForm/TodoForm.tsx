import { FunctionComponent } from "react";
import { Controller, useForm } from "react-hook-form";
import { ITodoForm } from "../../../models/todo.model";
import { Button, Form, Input, Select } from 'antd';
import './TodoForm.scss'
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/todo.store";

export const TodoForm: FunctionComponent = () => {
    const dispatch: AppDispatch = useDispatch();

    const { TextArea } = Input;
    const { control, handleSubmit } = useForm<ITodoForm>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        dispatch(addTodo(data))

    });

    return (
        <form onSubmit={onSubmit} className="todo-form">
            <Controller
                render={({ field }) =>
                    <Input addonBefore='title:' {...field} />
                }
                name="title"
                control={control}
                defaultValue=""
            />
            <Controller
                render={({ field }) => <TextArea placeholder="body" {...field} />}
                name="body"
                control={control}
                defaultValue=""
            />
            <button type="submit">Submit</button>
        </form>
    )
}