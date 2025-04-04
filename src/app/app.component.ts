import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './shared/button/button.component';

import { TodoService } from './todo/todo.service';
 
const imports = [
    RouterOutlet,
    NavigationComponent,
    ButtonComponent
];

@Component({
    selector: 'tdf-root',
    imports: imports,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    todoService = inject(TodoService);

    count = signal<number>(0); 

    count = this.todoService.getCount;
}
