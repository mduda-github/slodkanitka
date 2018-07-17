import React from 'react';
import {MainBanner} from './main-banner.jsx'
import {MainText} from './main-text.jsx'
import {MainInstagram} from './main-instagram.jsx'
import {MainText2} from './main-text2.jsx'
import {MainBanner2} from './main-banner2.jsx'


class Body extends React.Component {
    render() {
        return <div>
            <MainBanner />
            <MainText />
            <MainInstagram />
            <MainText2 />
            <MainBanner2 />
        </div>
    }
}

export {Body}