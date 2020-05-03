import React from 'react';

const About = props => {

    return (
        <li>
            <a href={props.href}>{props.title}</a>
        </li>
    )
}
export default About