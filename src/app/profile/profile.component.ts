import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SupabaseService, Profile } from '../services/supabase.service';
import { AuthSession, User } from '@supabase/supabase-js';
import { AvatarComponent } from './avatar/avatar.component';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    RequiredValidator,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'tdf-profile',
    imports: [ReactiveFormsModule, AvatarComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
    private readonly supabaseService = inject(SupabaseService);
    private session = this.supabaseService.session;

    profileForm = new FormGroup({
        email: new FormControl<string | null>('', [Validators.required]),
        website: new FormControl<string | null>(''),
        avatar_url: new FormControl<string | null>(''),
        full_name: new FormControl<string | null>('', [
            Validators.required,
            Validators.minLength(3),
        ]),
    });

    get avatarUrl() {
        return this.profileForm.controls.avatar_url.value as string;
    }

    ngOnInit() {
        this.supabaseService.authChanges((_, session) => {
            this.session = session;
            if (this.session?.user) {
                this.loadUserProfile(this.session?.user);
            }
        });
    }

    formValuesAsProfile(): Profile {
        const full_name = this.profileForm.controls.full_name.value as string;
        const website = this.profileForm.controls.website.value as string;
        const avatar_url = this.profileForm.controls.avatar_url.value as string;
        const profile: Profile = {
            id: this.session?.user.id,
            full_name: full_name,
            website,
            avatar_url,
        };

        return profile;
    }

    updateAvatar(event: any) {
        this.profileForm.patchValue({ avatar_url: event });
        const profile = this.formValuesAsProfile();
        this.updateProfile(profile);
    }

    onSubmit() {
        if (this.profileForm.valid) {
            const profile = this.formValuesAsProfile();
            this.updateProfile(profile);
        }
    }

    private async loadUserProfile(user: User) {
        try {
            const { data, error } = await this.getProfile(user);
            if (error) throw error;

            this.profileForm.patchValue({
                email: user.email,
                website: data?.website || '',
                full_name: data?.full_name || '',
                avatar_url: this.avatarUrl,
            });
        } catch (error) {
            console.error('Error loading profile:', error);
        }
    }

    async getProfile(user: User) {
        return await this.supabaseService.profile(user);
    }

    // TODO Dit werkend maken
    async updateProfile(profile: Profile) {
        try {
            const { error } = await this.supabaseService.updateProfile(profile);
            if (error) throw error;
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
        } finally {
        }
    }
}
