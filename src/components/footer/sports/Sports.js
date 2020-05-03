import React from 'react';

const Sports = props => {

    return (
        <li>
            <a href={props.href}>{props.title}</a>
        </li>
    )
}
export default Sports