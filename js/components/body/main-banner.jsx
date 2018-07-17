import React from 'react';

class MainBanner extends React.Component {
    render() {
        return <div className="main-banner">
            <div className="banner-filter">
                <div className="container">
                    <h1>Witaj na <br/>SłodkaNitka</h1>
                    <p>Poznaj nasze <a>słodkości</a>, <a>wytrawności</a><br/> oraz <a>nitki</a></p>
                </div>
            </div>
        </div>
    }
}

export {MainBanner}