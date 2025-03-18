import { Injectable, signal, computed, inject } from '@angular/core';
import { ITodo } from './ITodo';
import { listData } from './MOCK_TODO';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private httpClient = inject(HttpClient);

    list = signal<ITodo[]>(listData);

    add = (newTodo: ITodo) => {
        this.list.update((currentList) => [...currentList, newTodo]);
    };

    remove = (todo: ITodo) => {
        let newList = this.list().filter((ctodo) => ctodo !== todo);

        this.list.set(newList);
    };

    getList = () => {
        return this.httpClient.get('/api/todos');
    };
}
