import { Injectable, signal, computed, inject } from '@angular/core';
import { ITodo } from './ITodo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private httpClient = inject(HttpClient);

    /*     list = signal<ITodo[]>(listData); */

    add = (newTodo: ITodo) => {
        //this.list.update((currentList) => [...currentList, newTodo]);
    };

    remove = (todo: ITodo) => {
        /*         let newList = this.list().filter((ctodo) => ctodo !== todo);

        this.list.set(newList); */
    };

    private list$ = this.httpClient.get<ITodo[]>('http://localhost:3000/todos');

    // of er is een response met Todo items of er is een lege array
    public list = toSignal<ITodo[], []>(this.list$, { initialValue: [] });
}
