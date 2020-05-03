import React from 'react';

const Socials = props => {

    return (
        <li className="item-socials">
            <a href={props.href}>
                <i class="helper"></i>
                <img src={props.image}></img>
            </a>
        </li>
    )
}
export default Socials