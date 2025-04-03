import { Component, inject, WritableSignal, computed, Signal, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../todo.service';
import { ItemComponent } from '../item/item.component';
import { ITodo } from '../ITodo';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'tdf-todo-ist',
    imports: [ItemComponent, RouterLink],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
    private todoService = inject(TodoService);
    private limit = signal<number>(5);
    private toastr = inject(ToastrService);

    public list = signal<ITodo[]>([]);

    ngOnInit() {
        this.todoService.getAll$().subscribe((todos) => {
            this.list.set(todos);
        });
    }

    limitChange(event: any) {
        let value: number = event.currentTarget.value;
        this.limit.set(value);
    }

    deleteTodo(todo: ITodo) {
        this.todoService.remove$(todo).subscribe(() => {
            this.toastr.success('Is succesvol verwijderd', `${todo.id} - ${todo.name}`);
        });
    }

    updateTodo(todo: ITodo) {
        this.todoService.update$(todo).subscribe(() => {
            this.toastr.success('Is succesvol geupdate', `${todo.id} - ${todo.name}`);

            this.todoService.getAll$().subscribe((todos) => {
                this.list.set(todos);
            });
        });
    }
}
