import { Injectable, signal, computed, inject } from '@angular/core';
import { ITodo } from './ITodo';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private httpClient = inject(HttpClient);
    private requestList$ = this.httpClient.get<ITodo[]>('http://localhost:3000/todos');

    public list = signal<ITodo[]>([]);

    constructor() {
        this.requestList$.subscribe((todos) => this.list.set(todos));
    }

    add = (newTodo: ITodo) => {
        this.list.update((currentList) => [...currentList, newTodo]);
    };

    remove = (todo: ITodo) => {
        let newList = this.list().filter((ctodo) => ctodo !== todo);
        this.list.set(newList);
    };
}
