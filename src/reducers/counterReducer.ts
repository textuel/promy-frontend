import { CounterState, CounterAction } from '../types/counterActionProps.d.';
import { INCREASE, DECREASE, INCREASE_BY } from '../actions/counter';

const initialState: CounterState = {
    count: 0,
};

function counterReducer(
    state: CounterState = initialState,
    action: CounterAction,
): CounterState {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counterReducer;
