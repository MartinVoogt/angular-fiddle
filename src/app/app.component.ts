import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

import { TodoService } from './todo/todo.service';

@Component({
    selector: 'tdf-root',
    imports: [RouterOutlet, NavigationComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    todoService = inject(TodoService);

    todoList = this.todoService.list;
    count = computed(() => (this.todoList().length > 0 ? this.todoList().length : 0));
}
