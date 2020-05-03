import React from 'react';
import About from './About';

const AboutContainer = props => {

    return (
        <ul className="footer-links">
            <About
                title={"Privacy Policy"}
                href={"https://sportsbet.io/about/privacy-policy"}>
            </About>
            <About
                title={"About Us"}
                href={"https://sportsbet.io/about/privacy-policy"}>
            </About>
            <About
                title={"Terms and Conditions"}
                href={"https://sportsbet.io/about/terms-and-conditions"}>
            </About>
            <About
                title={"Affiliates"}
                href={"https://sportsbet.io/about/affiliates"}>
            </About>
            <About
                title={"Affiliate Terms and Conditions"}
                href={"https://sportsbet.io/about/affiliate-terms-and-conditions"}>
            </About>
            <About
                title={"Bug Bounty Program"}
                href={"https://sportsbet.io/about/vulnerability-disclosure-program"}>
            </About>
        </ul>
    )
}
export default AboutContainer
