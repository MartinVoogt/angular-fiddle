import { IEnvironment } from './enviroment.type';

export const environment = {
    production: false,
    supabaseUrl: import.meta.env['NG_APP_SUPABASE_URL'],
    supabaseKey: import.meta.env['NG_APP_SUPABASE_API_KEY'],
} as const satisfies IEnvironment;
