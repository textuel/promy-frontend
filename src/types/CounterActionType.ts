import { increase, decrease, increaseBy } from '../actions/counter';
import { ActionType } from 'typesafe-actions';

const actions = { increase, decrease, increaseBy };

export type CounterAction = ActionType<typeof actions>;

export type CounterState = {
    count: number;
};
