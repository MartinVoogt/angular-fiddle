import { Component, model } from '@angular/core';
import { FilterType } from '../../../../types/participant.types';
import { IOption } from '../../../../../shared/types/shared.type';
import { SelectComponent } from '../../../../../shared/form/select/select.component';

const GenderOptions: IOption[] = [
    {
        label: 'Kies geslacht',
        value: 'both',
    },
    {
        label: 'Man',
        value: 'male',
    },
    {
        label: 'Vrouw',
        value: 'female',
    },
];

@Component({
    selector: 'tdf-filter-gender',
    imports: [SelectComponent],
    templateUrl: './gender.component.html',
    styleUrl: './gender.component.scss',
})
export class GenderComponent {
    public filters = model<FilterType>();
    public options = GenderOptions;

    setFilterValue(option: IOption) {
        this.filters.update((current) => {
            return { ...current, gender: option.value };
        });
    }
}
