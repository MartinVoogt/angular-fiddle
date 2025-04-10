import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IParticipant } from '../participants/models/IParticipant';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ParticipantsService {
    public allParticipants = signal<IParticipant[]>([]);
    public httpClient = inject(HttpClient);

    public participants = computed(() => {
        return this.allParticipants();
    });

    constructor() {}

    list$() {
        return this.httpClient
            .get<IParticipant[]>('/api/participants')
            .subscribe((values) => {
                console.log(values);
                this.allParticipants.set(values);
            });
    }
}
