import React from 'react';

const Casino = props => {

    return (
        <li>
            <a href={props.href}>{props.title}</a>
        </li>
    )
}
export default Casino