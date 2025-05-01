import { Injectable } from '@angular/core';
import { ICredentials } from '../shared/types/credentials.type';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLoggedIn(): boolean {
        return true;
    }

    login(credentials: ICredentials): boolean {
        return true;
    }

    logout(): boolean {
        return true;
    }
}
