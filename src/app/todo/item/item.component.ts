import { Component, computed, EventEmitter, inject, input, output } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { ITodo } from '../ITodo';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'tdf-todo-item',
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [DatePipe, TitleCasePipe, RouterLink],
})
export class ItemComponent {
    router = inject(Router);
    item = input.required<ITodo>();
    removeTodo = output();
    completeTodo = output();

    setComplete = () => {
        let today = new Date();
        this.item().completedAtDate = today.toString();
        this.completeTodo.emit();
    };

    setRemove = () => {
        this.removeTodo.emit();
    };
}
