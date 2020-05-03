import React from 'react';
import Socials from './Socials';

const SocialsContainer = props => {

    return (
        <ul className="social-links">
            <Socials
                image={"https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png"}
                href={"https://twitter.com/Sportsbetio"}>
            </Socials>
            <Socials
                image={"https://lh3.googleusercontent.com/proxy/3AGGm0f59sDOKz4cSzH5Amh8Iz062afirx-gBhGGNE-VmyOgJk7yYvLzOHN2Z4kQUF0SYSvYUg9ET1FXh6SrnLlSLco5sDPnkVVnJ0qvnJ0JpSnXZFrOCtATJts"}
                href={"https://www.facebook.com/Sportsbet.io/"}>
            </Socials>
            <Socials
                image={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"}
                href={"https://www.youtube.com/channel/UClgXWroAXKhtK9Z9-YqHfTg?sub_confirmation=1"}>
            </Socials>
            <Socials
                image={"https://sportsbet.imgix.net/2019/December/bitcoin.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100"}
                href={"https://bitcointalk.org/index.php?topic=1458034"}>
            </Socials>
            <Socials
                image={"https://cdn2.iconfinder.com/data/icons/instagram-new/512/instagram-logo-color-512.png"}
                href={"https://www.instagram.com/sportsbet.io/"}>
            </Socials>
        </ul>
    )
}
export default SocialsContainer
