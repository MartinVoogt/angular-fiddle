import { Component, input, model, output } from '@angular/core';
import { FilterType } from '../../../../types/participant.types';

@Component({
    selector: 'tdf-filter-account-active',
    styleUrls: ['account-active.components.scss'],
    templateUrl: './account-active.component.html',
})
export class AccountActiveComponent {
    public filters = model<FilterType>({});

    onChange(event: Event) {
        const input = event.target as HTMLInputElement;
        const value = input.checked ? true : false;
        this.filters.update((current) => {
            return { ...current, isActive: value };
        });
    }
}
