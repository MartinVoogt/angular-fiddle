import { Component, input, model } from '@angular/core';
import { FilterType } from '../../../../types/participant.types';

@Component({
    selector: 'tdf-filter-account-active',
    styleUrls: ['account-active.components.scss'],
    templateUrl: './account-active.component.html',
})
export class AccountActiveComponent {
    public filters = model<FilterType[]>([]);

    onChange(event: Event) {
        console.log(event);
    }
}
