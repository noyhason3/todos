import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../models/todo.model";

interface ITodoState {
    todos: ITodo[]
}

export const todoSlice = createSlice({
    name: 'todoStore',
    initialState: {
        todos: []
    } as ITodoState,
    reducers: {
    }
})