import React from 'react';

const SportBanner = props => {

    return (
        <li className="slider-banner sport-banner">
            <a href={props.href}>
                <div className="img-sport-container">
                    <img className="img-sport" src={props.image}/>
                </div>
                <p className="text-center">
                    {props.title}
                </p>
            </a>
        </li>
    )
}
export default SportBanner