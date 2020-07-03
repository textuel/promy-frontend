import { createAction } from 'typesafe-actions';

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const INCREASE_BY = 'INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();
