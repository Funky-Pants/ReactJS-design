import React from 'react';

const PopularBanner = props => {

    return (
        <li className="slider-banner popular-banner">
            <a href={props.href}>
                <img className="img-popular" src={props.image}/>
                <span className="popular-title">{props.title}</span>
            </a>
        </li>
    )
}
export default PopularBanner