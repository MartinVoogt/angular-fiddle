import { Component, inject, input, output } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { ITodo } from '../ITodo';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'tdf-todo-item',
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [DatePipe, TitleCasePipe, ButtonComponent],
})
export class ItemComponent {
    router = inject(Router);
    item = input.required<ITodo>();
    removeTodo = output();
    completeTodo = output();
    faCheckIcon = faCircleCheck;

    setComplete = () => {
        let today = new Date();
        this.item().completedAtDate = today.toString();
        this.item().isCompleted = true;
        this.completeTodo.emit();
    };

    setRemove = () => {
        this.removeTodo.emit();
    };

    handleEditRoute = () => {
        this.router.navigate(['edit-item', this.item().id]);
    };
}
