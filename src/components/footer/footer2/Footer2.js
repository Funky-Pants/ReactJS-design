import React from 'react';

const Footer2 = props => {

    return (
        <li className="slider-banner footer2-banner">
            <a href={props.href}>
                <i className="helper"></i>
                <img className="img-footer2" src={props.image}/>
            </a>
        </li>
    )
}
export default Footer2