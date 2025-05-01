import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ICredentials } from '../types/credentials.type';

@Component({
    selector: 'tdf-login',
    imports: [ReactiveFormsModule, ButtonComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    supabaseService: SupabaseService = inject(SupabaseService);
    router = inject(Router);

    form = new FormGroup({
        credentials: new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.email,
            ]),
        }),
    });

    // TODO Deze auth handle netter maken
    async submitHandle(): Promise<void> {
        if (this.form.invalid) return;
        try {
            const email = this.form.value.credentials?.email as string;
            const { error } = await this.supabaseService.signIn(email);
            if (error) throw error;
            console.log('check email');
        } catch (error) {
            if (error instanceof Error) console.error(error.message);
        } finally {
            this.form.reset();
        }
    }
}
