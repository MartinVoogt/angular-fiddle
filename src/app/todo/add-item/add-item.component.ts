import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ITodo, Priority } from '../ITodo';
import { TodoService } from '../todo.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
    selector: 'tdf-add-item',
    imports: [FormsModule, ReactiveFormsModule, RouterLink],
    templateUrl: './add-item.component.html',
    styleUrl: './add-item.component.scss',
})
export class AddItemComponent implements OnInit {
    todoService = inject(TodoService);
    toastrService = inject(ToastrService);
    router = inject(Router);
    activatedRoute = inject(ActivatedRoute);
    isEditForm = false;
    todo = signal<Partial<ITodo> | null>(null);

    todoForm = new FormGroup({
        id: new FormControl<number | null>(null),
        name: new FormControl<string>('', [
            Validators.minLength(3),
            Validators.required,
        ]),
        description: new FormControl<string>(''),
        priority: new FormControl<Priority>('low', [Validators.required]),
    });

    ngOnInit() {
        const todoId = Number(this.activatedRoute.snapshot.params['todoId']);
        if (todoId) {
            this.todoService.getTodo$(todoId).subscribe((todo) => {
                this.todo.set(todo);
                this.todoForm.patchValue(todo);
            });
            this.isEditForm = true;
        }
    }

    onSubmit = (): void => {
        let today = new Date();
        if (this.todoForm.valid) {
            let form = this.todoForm.value;

            let newTodo = <ITodo>{
                id: form.id,
                name: form.name,
                description: form.description,
                priority: form.priority,
                createdAtDate: today.toISOString(),
                isCompleted: false,
                completedAtDate: null,
            };

            const serviceRequestAction$ =
                this.isEditForm === true
                    ? this.todoService.update$(newTodo)
                    : this.todoService.add$(newTodo);

            // subscribe actie
            serviceRequestAction$
                .pipe(
                    finalize(() => {
                        this.router.navigate(['']);
                    })
                )
                .subscribe({
                    next: (todos) => {
                        console.log(todos);
                        // dit is crap
                        const msgText: string =
                            this.isEditForm === true
                                ? 'Is succesvol aangepast'
                                : 'Is succesvol toegevoegd';

                        this.toastrService.success(msgText, `${newTodo.name}`);
                    },
                    error: (error) => {
                        this.toastrService.error(
                            'Kon geen nieuw item aanmaken of updaten',
                            `Er gaat iets fout`
                        );
                    },
                });
        }
    };
}
