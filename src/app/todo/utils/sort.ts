export function setSort<T extends { createdAtDate?: string }>(a: T, b: T): number {
    return a.createdAtDate && b.createdAtDate
        ? new Date(b.createdAtDate).getTime() - new Date(a.createdAtDate).getTime()
        : 0;
}
