import { CanActivateFn } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';

export const adminGuard: CanActivateFn = (route, state) => {
    return true;
};
