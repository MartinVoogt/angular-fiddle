import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './shared/button/button.component';

import { TodoService } from './todo/todo.service';

const imports = [RouterOutlet, NavigationComponent];

@Component({
    selector: 'tdf-root',
    imports: imports,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    todoService = inject(TodoService);
    count: Signal<Number> = this.todoService.getCount;
}
