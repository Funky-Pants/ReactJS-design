import React from 'react';

const PromotionsBanner = props => {

    return (
        <li className="slider-banner promotions-banner mb-2">
            <a href={props.href}>
                <div className="promotions-img-container px-0">
                    <img className="img-promotions" src={props.image}/>
                </div>
                <div className="promotions-desc-container">
                    <h2 className="promotions-title">{props.title}</h2>
                    <p className="promotions-desc">{props.description}</p>
                </div>
            </a>
        </li>
    )
}
export default PromotionsBanner