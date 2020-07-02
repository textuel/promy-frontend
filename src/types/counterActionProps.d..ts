import { increase, decrease, increaseBy } from '../actions/counter';

export type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

export type CounterState = {
    count: number;
};
