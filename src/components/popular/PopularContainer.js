import React from 'react';
import PopularBanner from './PopularBanner';

const PopularContainer = props => {

    return (
        <ul className="slider-content popular-content mb-3">
            <PopularBanner
                title={"Live dealer"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-livecasino.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"}
                href={"https://sportsbet.io/casino/categories/live-dealer"}>
            </PopularBanner>
            <PopularBanner
                title={"Poker"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-poker.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"}
                href={"https://sportsbet.io/sports/poker"}>
            </PopularBanner>
            <PopularBanner
                title={"Bombay Club"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-bombayclub2.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"}
                href={"https://sportsbet.io/casino/categories/bombayclub"}>
            </PopularBanner>
            <PopularBanner
                title={"Promotions"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-promotions.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"}
                href={"https://sportsbet.io/promotions"}>
            </PopularBanner>
            <PopularBanner
                title={"Support"}
                image={"https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-livechat.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"}
                href={"https://sportsbet.io/support/faq"}>
            </PopularBanner>
        </ul>
    )
}
export default PopularContainer