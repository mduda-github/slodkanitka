import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class Header extends React.Component {
    render() {
        return <header className="page-header">
            <div className="header-bar"></div>
            <nav className="container">
                <div className="header-nav">
                    <div className="header-nav-left">
                        <ul className="header-nav-list">
                            <li><Link to="/slodkosci">Słodkości</Link></li>
                            <li><a href="#">Wytrawności</a></li>
                        </ul>
                    </div>
                    <div className="header-nav-center">
                        <div className="logo"><a href="#"><p>słodka nitka</p></a></div>
                    </div>
                    <div className="header-nav-right">
                        <ul className="header-nav-list">
                            <li><a href="#">Nitka</a></li>
                            <li><a href="#">DIY</a></li>
                            <li><a href="#">Lifestyle</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    }
}

export {Header}