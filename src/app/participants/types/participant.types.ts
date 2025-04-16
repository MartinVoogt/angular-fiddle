// types

export interface IParticipant {
    id: string;
    nameFirst: string;
    nameMiddle: string | null;
    nameLast: string;
    city: string;
    email: string;
    gender: GenderType;
    birthDate: string;
    age: number | null;
    isActive: boolean;
}

type FilterKey = keyof IParticipant;
export type FilterValue = IParticipant[FilterKey];

export type FilterType = Partial<Record<FilterKey, FilterValue[] | FilterValue>>;

export type GenderType = 'male' | 'female';
