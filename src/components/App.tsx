import * as React from 'react';
import Name from './Name';

function App() {
    return (
        <div>
            <p>Hello World!</p>
            {[
                { firstName: 'Kim', lastName: 'Minsu' },
                { firstName: 'Kang', lastName: 'Dongheon' },
            ].map((name) => (
                <Name firstName={name.firstName} lastName={name.lastName} />
            ))}
        </div>
    );
}

export default App;
