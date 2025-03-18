import { Component, computed, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITodo } from '../ITodo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'tdf-todo-item',
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [],
})
export class ItemComponent {
    todoService = inject(TodoService);
    item = input.required<ITodo>();

    setComplete = (): void => {
        let today = new Date();
        this.item().completedAtDate = today.toString();
    };

    setRemove = (todo: ITodo): void => {
        this.todoService.remove(todo);
    };
}
