import { Component, model } from '@angular/core';
import { Form, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
/* import { AccountCreatedAtComponent } from './components/account-created-at/account-created-at.component';*/
import { AccountActiveComponent } from './components/account-active/account-active.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FilterType } from '../../types/participant.types';

const imports = [
    ReactiveFormsModule,
    /*     AccountCreatedAtComponent, */
    AccountActiveComponent,
    ButtonComponent,
];
@Component({
    selector: 'tdf-participants-filter',
    imports,
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
})
export class FilterComponent {
    public filters = model<FilterType[]>([]);
    public filterIcon = faFilter;

    // omschrijven naar [model] - input & output

    onSubmit() {
        console.log('Submitted');
        console.log(this.filters());
    }
}
