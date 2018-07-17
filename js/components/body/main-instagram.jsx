import React from 'react';

class MainInstagram extends React.Component {
    render() {
        return <section className="main-instagram">
            <div className="banner-filter">
                <div className="container">
                    <h1>INSTAGRAM: @slodkanitka</h1>
                    <div className="main-instagram-list">
                        <div className="main-instagram-list__el"><img src="~/../../images/insta1.PNG"/></div>
                        <div className="main-instagram-list__el"><img src="~/../../images/insta2.PNG"/></div>
                        <div className="main-instagram-list__el"><img src="~/../../images/insta3.PNG"/></div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export {MainInstagram}