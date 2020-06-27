import * as React from 'react';
import Name from './Name';

function App(): React.ReactElement {
    return (
        <div>
            <p>Hello World!</p>
            {[
                { firstName: 'Kim', lastName: 'Minsu' },
                { firstName: 'Kang', lastName: 'Dongheon' },
            ].map((name, idx) => (
                <Name
                    key={idx}
                    firstName={name.firstName}
                    lastName={name.lastName}
                />
            ))}
        </div>
    );
}

export default App;
