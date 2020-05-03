import React from 'react';
import Sports from './Sports';

const SportsContainer = props => {

    return (
        <ul className="footer-links">
            <Sports
                title={"Promotions"}
                href={"https://sportsbet.io/promotions"}>
            </Sports>
            <Sports
                title={"In play"}
                href={"https://sportsbet.io/sports/inplay"}>
            </Sports>
            <Sports
                title={"Upcoming"}
                href={"https://sportsbet.io/sports/upcoming"}>
            </Sports>
        </ul>
    )
}
export default SportsContainer
