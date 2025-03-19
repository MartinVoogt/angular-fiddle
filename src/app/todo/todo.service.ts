import { Injectable, signal, computed, inject } from '@angular/core';
import { ITodo } from './ITodo';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private httpClient = inject(HttpClient);
    private requestList$ = this.httpClient.get<ITodo[]>('/api/todos');

    public list = signal<ITodo[]>([]);

    constructor() {
        // sorting ?
        this.requestList$.subscribe((todos) => {
            //todos.sort((a: ITodo, b: ITodo) => b.createdAtDate.getTime() - a.createdAtDate.getTime());
            this.list.set(todos);
        });
    }

    add = (todo: ITodo) => {
        // return iets?
        this.httpClient.post<ITodo[]>('/api/todos', todo).subscribe();
    };

    edit = (todo: ITodo) => {
        this.httpClient.get<ITodo[]>(`/api/todos/${todo.id}`).subscribe();
    };

    remove = (todo: ITodo) => {
        this.httpClient.delete<ITodo[]>(`/api/todos/${todo.id}`).subscribe();
    };
}
