// types

export interface IParticipant {
    id: string;
    nameFirst: string;
    nameMiddle: string | null;
    nameLast: string;
    city: string;
    email: string;
    gender: string;
    birthDate: string;
    age: number | null;
}

type FilterKey = keyof IParticipant;
type FilterValue = IParticipant[FilterKey];

export type FilterType = Partial<Record<FilterKey, FilterValue[]>>;
