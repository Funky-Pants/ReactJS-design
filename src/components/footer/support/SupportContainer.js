import React from 'react';
import Support from './Support';

const CasinoContainer = props => {

    return (
        <ul className="footer-links">
            <Support
                title={"Payment Options"}
                href={"https://sportsbet.io/support/payment-options"}>
            </Support>
            <Support
                title={"Responsible Gambling"}
                href={"https://sportsbet.io/support/responsible-gambling"}>
            </Support>
            <Support
                title={"FAQ"}
                href={"https://sportsbet.io/support/faq"}>
            </Support>
            <Support
                title={"General Betting Rules"}
                href={"https://sportsbet.io/support/general-betting-rules"}>
            </Support>
            <Support
                title={"Responsible Gambling Terms and Conditions"}
                href={"https://sportsbet.io/support/responsible-gambling-terms-and-conditions"}>
            </Support>
            <Support
                title={"Affiliate FAQ"}
                href={"https://sportsbet.io/support/affiliate-faq"}>
            </Support>
            <Support
                title={"Sportsbet Market Explanations"}
                href={"https://sportsbet.io/support/sportsbet-market-explanations"}>
            </Support>
        </ul>
    )
}
export default CasinoContainer
