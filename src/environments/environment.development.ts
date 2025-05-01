const process = require('process');
import { IEnvironment } from './enviroment.type';

export const environment = {
    production: false,
    supabaseUrl: process.env.SUPABASE_API_KEY,
    supabaseKey: process.env.SUPABASE_KEY,
} as const satisfies IEnvironment;
