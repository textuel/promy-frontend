import { CounterState, CounterAction } from '../types/CounterActionType';
import { INCREASE, DECREASE, INCREASE_BY } from '../actions/counter';
import { createReducer } from 'typesafe-actions';

const initialState: CounterState = {
    count: 0,
};

const counterReducer = createReducer<CounterState, CounterAction>(
    initialState,
    {
        [INCREASE]: (state) => ({ count: state.count + 1 }),
        [DECREASE]: (state) => ({ count: state.count - 1 }),
        [INCREASE_BY]: (state, action) => ({
            count: state.count + action.payload,
        }),
    },
);

export default counterReducer;
