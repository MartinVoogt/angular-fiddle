import { Component, DestroyRef, EventEmitter, inject, OnInit, output, signal, input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'tdf-search',
    imports: [ReactiveFormsModule],
    templateUrl: './search.component.html',
    styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
    private destroyRef = inject(DestroyRef);

    public minLength = input<number>(4);
    public notifyParent = output<string | null>();

    // [(ngModel)]=

    public searchInput = new FormControl('', [Validators.required, Validators.minLength(this.minLength())]);

    ngOnInit() {
        this.searchInput.valueChanges.pipe(
            debounceTime(500), // geeft de laatste waarde door.
            distinctUntilChanged(), // primitives vergelijking
            takeUntilDestroyed(this.destroyRef) // alleen binnen lifecycle methode
        );
    }

    valueChangeHandle() {
        this.notifyParent.emit(this.searchInput.value);
    }
}
