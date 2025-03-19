import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIORITIES } from '../priority.constants';
import { ITodo } from '../ITodo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
    selector: 'tdf-add-item',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './add-item.component.html',
    styleUrl: './add-item.component.scss',
})
export class AddItemComponent {
    todoService = inject(TodoService);
    router = inject(Router);

    todoForm = new FormGroup({
        name: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
        description: new FormControl<string>(''),
        priority: new FormControl<string>('', [Validators.required]),
    });

    //priorities = PRIORITIES2;

    onSubmit = (): void => {
        let today = new Date();
        let form = this.todoForm.value;

        //let [priority] = this.priorities.filter((prio) => prio.value == form.priority) ?? PRIORITIES;

        let newTodo = <ITodo>{
            id: null,
            name: form.name,
            description: form.description,
            priority: 'low',
            createdAtDate: today.toISOString(),
            completedAtDate: '',
        };
        // subscribe actie
        this.todoService
            .add(newTodo)
            .subscribe({ next: (response) => console.log(response), error: (error) => console.log('w00ps') });
        //this.router.navigate['']);
    };
}
