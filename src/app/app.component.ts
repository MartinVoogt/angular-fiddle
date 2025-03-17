import { Component, inject } from '@angular/core';
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

    type: number = 123;

    count = () => {
        return this.todoService.list().length;
    };
}
