import { Component, computed, EventEmitter, inject, input, output } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { ITodo } from '../ITodo';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
    selector: 'tdf-todo-item',
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [DatePipe, TitleCasePipe, RouterLink, ButtonComponent],
})
export class ItemComponent {
    router = inject(Router);
    item = input.required<ITodo>();
    removeTodo = output();
    completeTodo = output();

    setComplete = () => {
        let today = new Date();
        this.item().completedAtDate = today.toString();
        this.item().isCompleted = true;
        this.completeTodo.emit();
    };

    setRemove = () => {
        this.removeTodo.emit();
    };
}
