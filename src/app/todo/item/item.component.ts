import { Component, computed, inject, input } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { ITodo } from '../ITodo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'tdf-todo-item',
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [DatePipe, TitleCasePipe],
})
export class ItemComponent {
    router = inject(Router);
    todoService = inject(TodoService);
    item = input.required<ITodo>();

    setComplete = (): void => {
        let today = new Date();
        this.item().completedAtDate = today.toString();
    };

    setRemove = (todo: ITodo): void => {
        this.todoService.remove(todo);
    };

    setEdit = (todo: ITodo): void => {
        // dit nog uitwerken
        console.log(this.todoService.edit(todo));
    };
}
