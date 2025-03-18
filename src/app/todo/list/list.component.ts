import { Component, inject, WritableSignal, computed, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../todo.service';
import { ItemComponent } from '../item/item.component';
import { ITodo } from '../ITodo';

@Component({
    selector: 'tdf-todo-ist',
    imports: [ItemComponent, RouterLink],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    todoService = inject(TodoService);
    todoItems: Signal<ITodo[]>;

    constructor() {
        this.todoItems = this.todoService.list;
    }
}
