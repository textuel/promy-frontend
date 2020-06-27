import * as React from 'react';
import nameProps from '../models/nameProps';

function Name(props: nameProps) {
    const { firstName, lastName } = props;

    return (
        <div>
            {firstName} {lastName}
        </div>
    );
}

export default Name;
