import React from 'react';

const Partners = props => {

    return (
        <div className="partners-info pull-left">
            <a href={props.link}>
                <img className="partners-img pull-left" src={props.image}/>
                <div className="partner-title">{props.title}</div>
            </a>
        </div>
    )
}
export default Partners