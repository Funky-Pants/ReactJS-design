import React from 'react';

const GameProviders = props => {

    return (
        <li className="slider-banner game-provider-banner mb-2">
            <a href={props.href}>
            <i class="helper"></i>
                <img className="img-game-provider" src={props.image}/>
            </a>
        </li>
    )
}
export default GameProviders