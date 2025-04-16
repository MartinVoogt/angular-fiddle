import { IOption } from '../shared/types/shared.type';

export const FILTER_OPTIONS: Array<IOption> = [
    { label: 'Alle todos', value: '', selected: true },
    { label: 'Open todos', value: 'open' },
    { label: 'Afgeronde todos', value: 'completed' },
];

export const LIMIT_OPTIONS: Array<IOption> = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 30, value: 30 },
];

export const PRIORITY_MAP: Record<string, 'low' | 'high'> = {
    laag: 'low',
    hoog: 'high',
    low: 'low',
    high: 'high',
};
