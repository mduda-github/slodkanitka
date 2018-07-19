import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class MainBanner extends React.Component {
    render() {
        return <div className="main-banner">
            <div className="banner-filter">
                <div className="container">
                    <h1>Witaj na <br/>SłodkaNitka</h1>
                    <p>Poznaj nasze <Link to="/slodkosci">słodkości</Link>, <Link to='/wytrawnosci'>wytrawności</Link><br/> oraz <Link to='nitka'>nitki</Link></p>
                </div>
            </div>
        </div>
    }
}

export {MainBanner}