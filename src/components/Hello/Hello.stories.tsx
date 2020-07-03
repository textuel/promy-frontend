import React from 'react';
import Hello from './Hello';

export default {
    title: 'Hello',
};

export const DefaultHello: React.ReactNode = () => <Hello name="Daniel" />;

DefaultHello.story = {
    name: 'Default Hello',
};
