import React from 'react';
import Hello from './Hello';

export default {
    title: 'Hello',
};

export const DefaultHello = (): React.ReactElement => (
    <Hello name="Daniel" enthusiasmLevel={5} />
);

DefaultHello.story = {
    name: 'Set Name',
};
