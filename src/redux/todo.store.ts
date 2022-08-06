import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../models/todo.model";
import { v4 as uuidv4 } from 'uuid';
import { storageService } from "../util/storage.service";

interface ITodoState {
    todos: ITodo[]
}

const initialtodos = [
    {
        "id": uuidv4(),
        "title": "clean home",
        "body": "need to clean home"
    },
    {
        "id": uuidv4(),
        "title": "shopping",
        "body": "need to buy food"
    }
]

export const todoSlice = createSlice({
    name: 'todoStore',
    initialState: {
        todos: initialtodos
    } as ITodoState,
    reducers: {
        setTodos: (state) => {
            const existTodos = storageService.load('todos') || [];
            state.todos = !!existTodos.length ? existTodos : initialtodos;
        },
        addTodo: (state, action) => {
            action.payload.id = uuidv4();
            state.todos.push(action.payload)
            storageService.store('todos', state.todos)
        }
    }
})

export const { setTodos, addTodo } = todoSlice.actions;
