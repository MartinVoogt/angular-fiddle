export function ageInYears(dateValue: Date): number {
    const dateDelta = Math.abs(Date.now() - dateValue.getTime());
    const age = Math.floor(dateDelta / (1000 * 3600 * 24) / 365);
    return age;
}
