import { Component, computed, inject, input } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { ITodo } from '../ITodo';
import { TodoService } from '../todo.service';
import { Router, RouterLink } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'tdf-todo-item',
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [DatePipe, TitleCasePipe, RouterLink],
})
export class ItemComponent {
    router = inject(Router);
    item = input.required<ITodo>();
    private todoService = inject(TodoService);
    private toastr = inject(ToastrService);

    setComplete = (): void => {
        let today = new Date();
        this.item().completedAtDate = today.toString();
    };

    setRemove = (todo: ITodo): void => {
        // this.todoService.remove(todo);
        this.toastr.success('Hello world!', 'Toastr fun!');
    };
}
