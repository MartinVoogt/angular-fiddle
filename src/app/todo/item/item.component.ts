import { Component, inject, input, output } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { trigger, transition, useAnimation, style, state } from '@angular/animations';
import { fadeInTransition, fadeOutTransition } from '../../shared/animations';
import { ITodo } from '../ITodo';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { faCheck, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'tdf-todo-item',
    templateUrl: './item.component.html',
    styleUrl: './item.component.scss',
    imports: [DatePipe, TitleCasePipe, ButtonComponent],
    animations: [
        trigger('fadeOut', [
            state('visible', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('visible => hidden', [
                useAnimation(fadeOutTransition, { params: { duration: '250ms' } }),
            ]),
            transition('hidden => visible', [
                useAnimation(fadeInTransition, { params: { duration: '250ms' } }),
            ]),
        ]),
    ],
})
export class ItemComponent {
    private router = inject(Router);
    protected todoVisible = false;
    public readonly item = input.required<ITodo>();
    public readonly faDoneIcon = faCheck;
    public readonly faEditIcon = faPen;
    public readonly faRemoveIcon = faTimes;
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

    handleEditRoute = () => {
        this.router.navigate(['edit-item', this.item().id]);
    };
}
