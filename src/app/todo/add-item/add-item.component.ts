import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIORITIES } from '../priority.constants';
import { ITodo, Priority } from '../ITodo';
import { TodoService } from '../todo.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'tdf-add-item',
    imports: [FormsModule, ReactiveFormsModule, RouterLink],
    templateUrl: './add-item.component.html',
    styleUrl: './add-item.component.scss',
})
export class AddItemComponent implements OnInit {
    todoService = inject(TodoService);
    router = inject(Router);
    activatedRoute = inject(ActivatedRoute);

    todoForm = new FormGroup({
        name: new FormControl<string>('', [Validators.minLength(3), Validators.required]),
        description: new FormControl<string>(''),
        priority: new FormControl<Priority>('low', [Validators.required]),
    });

    ngOnInit() {
        const todoId = Number(this.activatedRoute.snapshot.params['todoId']);
        if (todoId) {
            this.todoService.getTodoItem(todoId).subscribe((result) => {
                const { name, priority, description } = result;
                this.todoForm.setValue({ name, priority, description });
            });
        }
    }

    onSubmit = (): void => {
        let today = new Date();
        if (this.todoForm.valid) {
            let form = this.todoForm.value;

            let newTodo = <ITodo>{
                id: null,
                name: form.name,
                description: form.description,
                priority: form.priority,
                createdAtDate: today.toISOString(),
                completedAtDate: null,
            };
            // subscribe actie
            this.todoService.add(newTodo).subscribe({
                next: (response) => {
                    this.router.navigate(['']);
                },
                error: (error) => {
                    // hier iets van een toast
                    console.log('Kan geen nieuwe todo toevoegen');
                },
            });
        }
    };
}
