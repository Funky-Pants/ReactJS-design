import React from 'react';
import Partners from './Partners';

const PartnersContainer = props => {

    return (
        <div className="partners-container">
            <Partners
                url={"https://sportsbet.io/about/sportsbet-io-partnerships"}
                image={"https://sportsbet.imgix.net/2019/June/Logowat.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"}
                title={"Main Club Partner"}
            >
            </Partners>
            <Partners
                url={"https://sportsbet.io/about/sportsbet-io-partnerships"}
                image={"https://sportsbet.imgix.net/2019/Flamengo/logo-flamengo-footer.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"}
                title={"Official Shirt Sponsor"}
            >
            </Partners>
        </div>
    )
}
export default PartnersContainer