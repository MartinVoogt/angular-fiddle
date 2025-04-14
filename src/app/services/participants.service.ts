import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IParticipant } from '../participants/types/participant.types';
import { catchError, map, Observable, of, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ageInYears } from '../shared/utils/date-time';
@Injectable({
    providedIn: 'root',
})
export class ParticipantsService {
    private url = '/api/participants';

    private readonly http = inject(HttpClient);

    public allParticipants = toSignal(
        this.http.get<IParticipant[]>(this.url).pipe(
            map(ageOfParticipants),
            catchError((err) => {
                console.error(err);
                return of([]);
            })
        ),
        {
            initialValue: [],
        }
    );
}

const ageOfParticipants = (participants: IParticipant[]): IParticipant[] => {
    return participants.map((participant) => {
        const birthDate = new Date(participant.birthDate);
        participant.age = ageInYears(birthDate);
        return participant;
    });
};
