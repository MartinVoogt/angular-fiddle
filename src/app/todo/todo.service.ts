import { Injectable, signal, computed, inject, Signal, OnInit } from '@angular/core';
import { ITodo, Priority } from './ITodo';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap, take, tap } from 'rxjs';
import { setSort } from './utils/sort';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private httpClient = inject(HttpClient);
    private setPriorityValue = (todo: ITodo): ITodo => ({ ...todo, priority: todo.hasPriority ? 'high' : 'low' });

    public todos = signal<ITodo[]>([]);

    constructor() {
        this.getAll$()
            .pipe(take(1))
            .subscribe((todos) => this.todos.set(todos));
    }

    // TODO count fixen
    getCount = computed(() => {
        return this.todos().length;
    });

    getAll$ = (): Observable<ITodo[]> => {
        return this.httpClient.get<ITodo[]>('/api/todos').pipe(
            map((todos) => todos.map(this.setPriorityValue)),
            map((todos) => todos.sort(setSort)) // naar utils
        );
    };

    find = (term: string) => {
        let pattern = new RegExp(`(${term})`);
        let filtered = this.todos().filter((todo) => pattern.test(todo.name));
        return filtered;
    };

    //
    add$ = (todo: ITodo): Observable<ITodo[]> => {
        return this.httpClient.post<ITodo>('/api/todos', todo).pipe(
            switchMap(() => this.getAll$()),
            tap((todos) => this.todos.set(todos))
        );
    };

    update$ = (todo: ITodo): Observable<ITodo[]> => {
        return this.httpClient.put<ITodo>(`/api/todos/${todo.id}`, todo).pipe(
            switchMap(() => this.getAll$()),
            tap((todos) => this.todos.set(todos))
        );
    };

    getTodo$ = (todoId: number): Observable<Partial<ITodo>> => {
        return this.httpClient.get<Partial<ITodo>>(`/api/todos/${todoId}`);
    };

    // letop return types
    // subscribe in component
    remove$ = (todo: ITodo): Observable<ITodo[]> =>
        this.httpClient.delete<ITodo[]>(`/api/todos/${todo.id}`).pipe(
            switchMap(() => this.getAll$()),
            tap((todos) => this.todos.set(todos))
        );
}
