//import { PRIORITIES } from './priority.constants';

export interface ITodo {
    id: number | null;
    name: string;
    description: string;
    createdAtDate: string;
    completedAtDate?: string | null;
    isCompleted: boolean;
    hasPriority: boolean;
    priority: Priority | null;
}

// Enums
export type Priority = 'low' | 'high';

// Type that represents only one of the values from the PRIORITIES object
//type PriorityType = (typeof PRIORITIES)[keyof typeof PRIORITIES];
