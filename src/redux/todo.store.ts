import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../models/todo.model";
import { v4 as uuidv4 } from 'uuid';
import { storageService } from "../util/storage.service";

interface ITodoState {
    todos: ITodo[],
    currTodo: ITodo | null
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
        todos: initialtodos,
        currTodo: null
    } as ITodoState,
    reducers: {
        setTodos: (state) => {
            const existTodos = storageService.load('todos') || [];
            state.todos = !!existTodos.length ? existTodos : initialtodos;
        },
        setCurrTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (!todo) return;
            state.currTodo = todo;
        },
        addTodo: (state, action) => {
            action.payload.id = uuidv4();
            state.todos.push(action.payload)
            storageService.store('todos', state.todos)
        },
        updateTodo: (state, action) => {
            console.log(action.payload);
            const existTodo = state.todos.find(todo => todo.id === action.payload.id)
            const existTodoIdx = state.todos.findIndex(todo => todo.id === action.payload.id)
            if (!existTodo) return;
            const updatedTodo = { ...existTodo, ...action.payload }
            state.todos[existTodoIdx] = updatedTodo;
            storageService.store('todos', state.todos)
        },
        deleteTodo: (state, action) => {
            const deleteTodoIdx = state.todos.findIndex(todo => {
                return todo.id === action.payload
            })
            if (deleteTodoIdx < 0) return;
            state.todos.splice(deleteTodoIdx, 1)
            storageService.store('todos', state.todos)
        }
    }
})

export const { setTodos, setCurrTodo, addTodo, updateTodo, deleteTodo } = todoSlice.actions;
