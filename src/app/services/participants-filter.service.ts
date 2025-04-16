import { IParticipant } from '../participants/types/participant.types';
import { FilterValue } from '../participants/types/participant.types';

export class ParticipantsFilters {
    static isActive(participants: IParticipant[], criteria: FilterValue): IParticipant[] {
        return participants.filter((participant) => participant.isActive === criteria);
    }

    static gender(participants: IParticipant[], criteria: FilterValue): IParticipant[] {
        return participants.filter((participant) => participant.gender === criteria);
    }

    // TODO Direction nog werkend maken
    static sortByAge(
        participants: IParticipant[],
        direction: 'ASC' | 'DESC'
    ): IParticipant[] {
        return participants.sort((a: IParticipant, b: IParticipant) => {
            if (a.age && b.age) return a.age > b.age ? 1 : -1;
            return 0;
        });
    }
}
