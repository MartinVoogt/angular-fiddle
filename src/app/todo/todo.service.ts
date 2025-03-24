import { Injectable, signal, computed, inject } from '@angular/core';
import { ITodo, Priority } from './ITodo';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { setSort } from './utils/sort';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private httpClient = inject(HttpClient);
    private requestList$ = this.httpClient.get<ITodo[]>('/api/todos');

    private setPriorityValue = (todo: ITodo) => Object.assign({ priority: todo.hasPriority ? 'high' : 'low' }, todo);
    //private setSort = (todoA: ITodo, todoB: ITodo) => (todoA.createdAtDate < todoB.createdAtDate ? 1 : -1);

    public list = signal<ITodo[]>([]);

    constructor() {
        // sorting ?
        this.requestList$
            .pipe(
                map((todos) => todos.map(this.setPriorityValue)),
                map((todos) => todos.sort(setSort))
            )
            .subscribe((todos) => {
                this.list.set(todos);
            });
    }

    add = (todo: ITodo) => {
        // return iets?
        return this.httpClient.post<ITodo[]>('/api/todos', todo);
    };

    getTodoItem = (todoId: number) => {
        return this.httpClient.get<ITodo>(`/api/todos/${todoId}`);
    };

    edit = (todo: ITodo) => {
        this.httpClient.get<ITodo[]>(`/api/todos/${todo.id}`).subscribe();
    };

    // subscribe in component
    remove = (todo: ITodo) => {
        this.httpClient.delete<ITodo[]>(`/api/todos/${todo.id}`);
    };
}
