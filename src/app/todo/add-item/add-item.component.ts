import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIORITIES } from '../priority.constants';
import { ITodo } from '../ITodo';
import { TodoService } from '../todo.service';

@Component({
    selector: 'tdf-add-item',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './add-item.component.html',
    styleUrl: './add-item.component.scss',
})
export class AddItemComponent {
    todoService = inject(TodoService);

    todoForm = new FormGroup({
        name: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
        description: new FormControl<string>(''),
        priority: new FormControl<string>('', [Validators.required]),
    });

    priorities = PRIORITIES;

    onSubmit = (): void => {
        let today = new Date();
        let todo = <ITodo> this.todoForm.value;
        
        todo = {
            createdAtDate: today.toString(),
            completedAtDate: '0000-00-00'
        , ...todo};

        console.log(todo);
        //this.todoService.add(todo)
    };
}
