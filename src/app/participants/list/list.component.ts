import { Component, inject, computed, model, signal } from '@angular/core';
import { TitleComponent } from '../../shared/text/title/title.component';
import { ViewComponent } from './view/view.component';
import { FilterComponent } from './filter/filter.component';
import { ParticipantsService } from '../../services/participants.service';
import { ParticipantsFilters } from '../../services/participants-filter.service';
import { IParticipant, FilterType } from '../types/participant.types';

@Component({
    selector: 'tdf-list',
    imports: [TitleComponent, ViewComponent, FilterComponent],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
})
export class ListComponent {
    private participantsService = inject(ParticipantsService);
    public allParticipants = this.participantsService.allParticipants;
    public filters = model<FilterType>({});
    public participantsCount = computed(() => {
        return this.participants().length;
    });

    public participants = computed(() => {
        let filteredParticipants = this.allParticipants();

        const genderFilterValue = this.filters().gender;
        if (typeof genderFilterValue === 'string' && genderFilterValue !== 'both')
            filteredParticipants = ParticipantsFilters.gender(
                filteredParticipants,
                genderFilterValue
            );

        const isActiveFilterValue = this.filters().isActive;
        if (typeof isActiveFilterValue === 'boolean') {
            filteredParticipants = ParticipantsFilters.isActive(
                filteredParticipants,
                isActiveFilterValue
            );
        }

        filteredParticipants = ParticipantsFilters.sortByAge(filteredParticipants, 'ASC');
        return filteredParticipants;
    });
}
