import * as React from 'react';
import Counter from './Counter';
import Hello from './Hello';

function App(): React.ReactElement {
    return (
        <div>
            <p>Hello World!</p>
            <Counter />
            <Hello name="Daniel" />
        </div>
    );
}

export default App;
