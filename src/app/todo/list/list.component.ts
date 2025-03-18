import { Component, inject, WritableSignal, computed, Signal, signal } from '@angular/core';
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
    limit = signal<number>(5);

    limitChange(event: any) {
        let value: number = event.currentTarget.value;
        this.limit.set(value);
    }

    todoItems = computed(() => {
        return this.todoService.list().slice(0, this.limit());
    });
}
