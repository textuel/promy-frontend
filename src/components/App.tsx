import * as React from 'react';
import Counter from './Counter';
import Hello from './Hello';
import Navbar from './Navbar';

function App(): React.ReactElement {
    return (
        <div>
            <Navbar></Navbar>
            <p>Hello World!</p>
            <Counter />
            <Hello name="Daniel" />
        </div>
    );
}

export default App;
