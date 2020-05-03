import React from 'react';
import PromotionsBanner from './PromotionsBanner';

const PromotionsContainer = props => {

    return (
        <ul className="slider-content promotions-content mb-3">
            <PromotionsBanner
                title={"Booongo's Book of Sun Tournament"}
                description={"Join this week's Booongo tournament, play Book of Sun games and get a chance to win a share of the € 30,000 prize pool"}
                image={"https://sportsbet.imgix.net/2020/April/Sportsbet_BOC1354x540.jpg?auto=compress%2Cformat&ixlib=react-9.0.1&w=282"}
                href={"https://sportsbet.io/promotions/booongo-book-of-sun-tournament"}>
            </PromotionsBanner>
            <PromotionsBanner
                title={"Multi Master 🎮 Esports Edition"}
                description={"3,000 mBTC Jackpot every weekend with 300 mBTC guaranteed payout!"}
                image={"https://sportsbet.imgix.net/2020/April/multi-master-promo.jpg?auto=compress%2Cformat&ixlib=react-9.0.1&w=282"}
                href={"https://sportsbet.io/promotions/weekend-multi-master"}>
            </PromotionsBanner>
            <PromotionsBanner
                title={"Compete in Evolution gaming’s ultimate golden week"}
                description={"Strike gold in a 2000 mBTC total prize pool tournament"}
                image={"https://sportsbet.imgix.net/2020/April/evolution-blackjack-sportsbet-mainpage1.jpg?auto=compress%2Cformat&ixlib=react-9.0.1&w=282"}
                href={"https://sportsbet.io/promotions/evolution-ultimate-golden-week"}>
            </PromotionsBanner>
            <PromotionsBanner
                title={"Grab the win with a 500 free spin payout"}
                description={"Compete in the Wazdan leaderboard and take home the top spot"}
                image={"https://sportsbet.imgix.net/2020/April/Sportsbet_1800x600_Tiger9.jpg?auto=compress%2Cformat&ixlib=react-9.0.1&w=282"}
                href={"https://sportsbet.io/promotions/9-tigers-slot-tournament"}>
            </PromotionsBanner>
            <PromotionsBanner
                title={"Multi Bet Multiplier!"}
                description={"Up to 30% odds boost on all your multis!"}
                image={"https://sportsbet.imgix.net/2020/April/multubet-multiplier-promo.jpg?auto=compress%2Cformat&ixlib=react-9.0.1&w=282"}
                href={"https://sportsbet.io/promotions/multibet-multiplier"}>
            </PromotionsBanner>
        </ul>
    )
}
export default PromotionsContainer