import { Component, model } from '@angular/core';
import { FilterType } from '../../../../types/participant.types';

// TODO hier nog correcte typing aan toevoegen.
const GenderOptions = [
    {
        label: 'Man',
        value: 'male',
    },
];

@Component({
    selector: 'tdf-filter-gender',
    imports: [],
    templateUrl: './gender.component.html',
    styleUrl: './gender.component.scss',
})
export class GenderComponent {
    public filters = model<FilterType>();
}
