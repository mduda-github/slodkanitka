import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class MainBanner2 extends React.Component {
    render() {
        return <div className="main-banner2">
            <div className="banner-filter">
                <div className="container">
                    <h1>Zobacz co <br/>uszyłyśmy...</h1>
                    <p>Poznaj nasze <Link to='/nitka'>ubranka dla dzieci</Link> i <Link to='/nitka'>akcesoria</Link></p>
                </div>
            </div>
        </div>
    }
}

export {MainBanner2}