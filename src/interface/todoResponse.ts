export interface TodoResponse {
    ok:    boolean;
    total: number;
    todos: Todo[];
}

export interface Todo {
    _id:       string;
    title:     string;
    createdAt: Date;
    updatedAt: Date;
}
