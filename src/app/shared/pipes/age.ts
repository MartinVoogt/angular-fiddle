import { Pipe, PipeTransform } from '@angular/core';
import { AgeMode } from '../types/mode.type';

const ageInYears = (suppliedDate: Date, currentDate: Date): number => {
    const dateMilliSeconds = currentDate.getTime() - suppliedDate.getTime();
    const diffInYears = dateMilliSeconds / 1000 / 60 / 60 / 24 / 365.25;
    return Math.abs(Math.round(diffInYears));
};

const ageInDays = (suppliedDate: Date, currentDate: Date): number => {
    const dateMilliSeconds = currentDate.getTime() - suppliedDate.getTime();
    const diffInDays = dateMilliSeconds / 1000 / 60 / 60 / 24;
    return Math.abs(Math.round(diffInDays));
};

const ageInMonths = (suppliedDate: Date, currentDate: Date): number => {
    const yearDiff = suppliedDate.getFullYear() - currentDate.getFullYear();
    const monthDiff = suppliedDate.getMonth() - currentDate.getMonth();
    return Math.abs(yearDiff * 12 + monthDiff);
};

@Pipe({
    name: 'age',
})
export class AgePipe implements PipeTransform {
    transform(value: string, mode?: AgeMode) {
        const defaultMode = 'years';
        const date = new Date(value);
        const ageMode = mode ?? defaultMode;

        switch (ageMode) {
            case 'years':
                return ageInYears(date, new Date());
                break;
            case 'months':
                return ageInMonths(date, new Date());
                break;
            case 'days':
                return ageInDays(date, new Date());
                break;
            default:
                return ageInYears(date, new Date());
        }
    }
}
