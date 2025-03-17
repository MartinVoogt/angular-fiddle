export interface ITodo {
    id: number;
    name: string;
    description: string;
    createAtDate?: string;
    completeAtDate?: string;
    priority: string;
}

export interface ITodoPrio {
    value: string;
    name: string;
}
