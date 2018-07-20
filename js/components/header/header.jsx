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
                    <div data-aos="fade-left"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine"
                         className="header-nav-left">
                        <ul className="header-nav-list">
                            <li><Link to="/slodkosci">Słodkości</Link><div className='linkUnderline'></div></li>
                            <li><Link to="/wytrawnosci">Wytrawności</Link><div className='linkUnderline'></div></li>
                        </ul>
                    </div>
                    <div className="header-nav-center">
                        <div className="logo"><Link to='/'><img src="./../../../images/logo.png"/></Link></div>
                    </div>
                    <div className="header-nav-right">
                        <ul data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="header-nav-list">
                            <li><Link to="/nitka">Nitka</Link><div className='linkUnderline'></div></li>
                            <li><Link to="/diy">DIY</Link><div className='linkUnderline'></div></li>
                            <li><Link to="/lifestyle">Lifestyle</Link><div className='linkUnderline'></div></li>
                            <li><Link to="/blog">Blog</Link><div className='linkUnderline'></div></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    }
}

export {Header}