const process = require('process');
import { IEnvironment } from './enviroment.type';

console.log(process.env['SUPABASE_KEY']);

export const environment = {
    production: false,
    supabaseUrl: process.env['SUPABASE_API_KEY'],
    supabaseKey: process.env['SUPABASE_KEY'],
} as const satisfies IEnvironment;
