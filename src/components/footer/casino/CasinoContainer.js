import React from 'react';
import Casino from './Casino';

const CasinoContainer = props => {

    return (
        <ul className="footer-links">
            <Casino
                title={"Live Casino"}
                href={"https://sportsbet.io/casino/categories/live-dealer"}>
            </Casino>
        </ul>
    )
}
export default CasinoContainer
