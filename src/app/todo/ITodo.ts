export interface ITodo {
    id: number | null;
    name: string;
    description: string;
    createdAtDate?: string;
    completedAtDate?: string;
    priority: ITodoPrio;
}

export interface ITodoPrio {
    value: string;
    name: string;
}
