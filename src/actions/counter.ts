export const INCREASE = 'INCREASE' as const;
export const DECREASE = 'DECREASE' as const;
export const INCREASE_BY = 'INCREASE_BY' as const;

export const increase = () => ({
    type: INCREASE,
});

export const decrease = () => ({
    type: DECREASE,
});

export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff,
});
