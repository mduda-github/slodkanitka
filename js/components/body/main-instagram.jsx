import React from 'react';
import Instafeed from 'instafeed.js';


class MainInstagram extends React.Component {


    componentDidMount() {
        var userFeed = new Instafeed({
            get: 'user',
            userId: '623597756',
            clientId: '02b47e1b98ce4f04adc271ffbd26611d',
            accessToken: '623597756.02b47e1.3dbf3cb6dc3f4dccbc5b1b5ae8c74a72',
            resolution: 'standard_resolution',
            template: '<a data-aos="zoom-in" href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
            sortBy: 'most-recent',
            limit: 3,
            links: true
        });
        userFeed.run();
    }

    render() {
        return <section className="main-instagram">
            <div className="banner-filter">
                <div className="container">
                    <h1>INSTAGRAM: @slodkanitka</h1>
                    <div className="main-instagram-list" id="instafeed">

                        {/*<div data-aos="zoom-in" className="main-instagram-list__el"/>*/}
                        {/*<div data-aos="zoom-out" className="main-instagram-list__el"/>*/}
                        {/*<div data-aos="zoom-in" className="main-instagram-list__el"/>*/}
                    </div>
                </div>
            </div>
        </section>
    }
}

export {MainInstagram}