import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../models/todo.model";
import todos from '../todo.db.json'

interface ITodoState {
    todos: ITodo[]
}

export const todoSlice = createSlice({
    name: 'todoStore',
    initialState: {
        todos: []
    } as ITodoState,
    reducers: {
        setTodos: (state) => {
            state.todos = todos
        }
    }
})

export const { setTodos } = todoSlice.actions;
