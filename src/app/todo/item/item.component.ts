import { Component, computed, inject, input, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITodo } from '../ITodo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'tdf-todo-item',
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [DatePipe],
})
export class ItemComponent {
    todoService = inject(TodoService);
    item = input.required<ITodo>();

    setComplete = (): void => {
        let today = new Date();
        this.item().createAtDate = today.toString();
        console.log(today.toString());
    };

    setRemove = (todo: ITodo): void => {
        this.todoService.remove(todo);
    };
}
