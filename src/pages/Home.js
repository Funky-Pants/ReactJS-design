import React from 'react';
import PartnersContainer from '../components/partners/PartnersContainer';
import UserAuthentication from '../components/authentication/UserAuthentication';
import PromoContainer from '../components/promo-banner/PromoContainer';
import SportContainer from '../components/sport-categories/SportContainer';
import PopularContainer from '../components/popular/PopularContainer';
import PromotionsContainer from '../components/promotions/PromotionsContainer';
import GameProvidersContainer from '../components/game-providers/GameProvidersContainer';

class Home extends React.Component {


    render() {
        return <>
            <div className="row mb-3">
                <div className="col-6 partners">
                    <PartnersContainer/>
                </div>
                <div className="col-6 authentication-dekstop">
                    <UserAuthentication/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <PromoContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 slider-container">
                    <h2>Sports categories</h2>
                    <SportContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 slider-container">
                    <h2>Popular</h2>
                    <PopularContainer/>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-12 slider-container">
                    <h2>Exciting promotions start here</h2>
                    <PromotionsContainer/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 slider-container">
                    <h2>Game Providers</h2>
                    <GameProvidersContainer/>
                </div>
            </div>
        </>
    }
}



export default Home;