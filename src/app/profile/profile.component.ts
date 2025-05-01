import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
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
        fullname: new FormControl<string | null>(''),
    });

    ngOnInit() {
        this.supabaseService.authChanges((_, session) => {
            this.session = session;
            if (this.session?.user) this.profileForm.patchValue(this.session.user);
        });
    }

    onSubmit() {
        if (this.profileForm.valid) {
            // update
        }
    }
}
