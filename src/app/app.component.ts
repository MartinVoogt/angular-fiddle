import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

import { TodoService } from './todo/todo.service';
import { AdminModule } from './admin/admin.module';
import { ButtonComponent } from './shared/button/button.component';
import {
    faUserLock,
    faUser,
    faRightFromBracket,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { SupabaseService } from './services/supabase.service';
import { JsonPipe } from '@angular/common';

const imports = [RouterOutlet, NavigationComponent, AdminModule, ButtonComponent];

@Component({
    selector: 'tdf-root',
    imports: imports,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    private todoService = inject(TodoService);
    private supabaseService = inject(SupabaseService);
    session = this.supabaseService.session;
    router = inject(Router);
    count: Signal<Number> = this.todoService.getCount;
    loginIcon: IconDefinition = faUserLock;
    userIcon: IconDefinition = faUser;
    logoutIcon: IconDefinition = faRightFromBracket;
    isLoggedIn = signal(false);

    ngOnInit() {
        this.supabaseService.authChanges((_, session) => {
            this.session = session;
            this.isLoggedIn.set(session?.user ? true : false);
            console.log(this.session);
        });
    }

    handleLogin(): void {
        this.router.navigate(['login']);
    }

    handleProfile(): void {
        this.router.navigate(['profile']);
    }

    handleLogout() {
        const signout = this.supabaseService.signOut();
        signout.then(({ error }) => {
            try {
                if (error) throw new Error('Er gaat iets fout');
                this.router.navigate(['']);
            } catch (e) {
                console.error(e);
            }
        });
    }
}

// TODO route guards
// TODO requests RXjs
// TODO graphql
// TODO custom directives
// TODO custom pipe
// TODO loading spinner @empty
