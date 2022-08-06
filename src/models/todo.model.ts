export interface ITodo {
    id: string;
    title: string;
    content?: string;
    isDone: boolean;
}

export interface ITodoForm {
    id?: string;
    title: string;
    content?: string;
    isDone: boolean;
}