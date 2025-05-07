import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SupabaseService, Profile } from '../services/supabase.service';
import { AuthSession, User } from '@supabase/supabase-js';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    RequiredValidator,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'tdf-profile',
    imports: [ReactiveFormsModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
    private readonly supabaseService = inject(SupabaseService);
    private session = this.supabaseService.session;

    profileForm = new FormGroup({
        email: new FormControl<string | null>('', [Validators.required]),
        website: new FormControl<string | null>(''),
        fullname: new FormControl<string | null>('', [
            Validators.required,
            Validators.minLength(3),
        ]),
    });

    ngOnInit() {
        this.supabaseService.authChanges((_, session) => {
            this.session = session;
            if (this.session?.user) this.profileForm.patchValue(this.session.user);
        });
    }

    onSubmit() {
        if (this.profileForm.valid) {
            const fullname = this.profileForm.controls.fullname.value as string;
            const website = this.profileForm.controls.website.value as string;

            const update: Profile = {
                id: this.session?.user.id,
                fullname,
                website,
                avatar_url: '',
            };
        }
    }

    // TODO Dit werkend maken
    async updateProfile(update: Profile) {
        try {
            const { error } = await this.supabaseService.updateProfile(update);
        } catch {
        } finally {
        }
    }
}
