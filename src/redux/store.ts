import { configureStore } from "@reduxjs/toolkit"
import { todoSlice } from "./todo.store"


export const store = configureStore({
    reducer: { todoStore: todoSlice.reducer }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
