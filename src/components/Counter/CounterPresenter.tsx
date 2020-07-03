import React from 'react';
import { CounterProps } from './CounterPropsType';

function CounterPresenter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
}: CounterProps): React.ReactElement {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            <button onClick={() => onIncreaseBy(5)}>+5</button>
        </div>
    );
}

export default CounterPresenter;
