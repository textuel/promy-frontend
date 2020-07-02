export const INCREASE = 'INCREASE' as const;
export const DECREASE = 'DECREASE' as const;
export const INCREASE_BY = 'INCREASE_BY' as const;

export function increase() {
    return { type: INCREASE };
}

export function decrease() {
    return { type: DECREASE };
}

export function increaseBy(diff: number) {
    return { type: INCREASE_BY, payload: diff };
}
