import React from 'react';


class MainInstagram extends React.Component {

    render() {
        return <section className="main-instagram">
            <div className="banner-filter">
                <div className="container">
                    <h1>INSTAGRAM: @slodkanitka</h1>
                    <div className="main-instagram-list">

                        <div data-aos="zoom-in" className="main-instagram-list__el"><a href="https://www.instagram.com/slodka_nitka/"><img src="./images/insta1.png"/></a></div>
                        <div data-aos="zoom-out" className="main-instagram-list__el"><a href="https://www.instagram.com/slodka_nitka/"><img src="./images/insta2.png"/></a></div>
                        <div data-aos="zoom-in" className="main-instagram-list__el"><a href="https://www.instagram.com/slodka_nitka/"><img src="./images/insta3.png"/></a></div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export {MainInstagram}