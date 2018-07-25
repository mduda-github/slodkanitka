import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }


    render() {
        console.log(this.state.active);
        return <header className="page-header">
            <div className="header-bar"/>
            <nav className="container">
                <div className="header-nav">
                    <div data-aos="fade-left"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-sine"
                         className="header-nav-left">
                        <ul className="header-nav-list">
                            <li><Link to="/slodkosci">Słodkości</Link>
                                <div className='linkUnderline'/>
                            </li>
                            <li><Link to="/wytrawnosci">Wytrawności</Link>
                                <div className='linkUnderline'/>
                            </li>
                        </ul>
                    </div>
                    <div className="header-nav-center">
                        <div className="logo"><Link to='/'><img src="./images/logo.png"/></Link></div>
                        <div className="hamburgerMenu">
                            <span onClick={() => {
                                this.setState({active: !this.state.active})
                            }}>
                                <img src={this.state.active ? './images/hamburger2.png' : './images/hamburger.png'}/>
                            </span>
                        </div>
                    </div>
                    <div className="header-nav-right">
                        <ul data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className="header-nav-list">
                            <li><Link to="/nitka">Nitka</Link>
                                <div className='linkUnderline'/>
                            </li>
                            <li><Link to="/diy">DIY</Link>
                                <div className='linkUnderline'/>
                            </li>
                            <li><Link to="/lifestyle">Lifestyle</Link>
                                <div className='linkUnderline'/>
                            </li>
                            <li><Link to="/blog">Blog</Link>
                                <div className='linkUnderline'/>
                            </li>
                        </ul>
                    </div>
                    <div className="header-nav-mobile"
                         style={this.state.active ? {display: 'block'} : {display: 'none'}}>
                        <ul>
                            <li><Link onClick={() => {
                                this.setState({active: !this.state.active})
                            }} to="/slodkosci">Słodkości</Link></li>
                            <li><Link onClick={() => {
                                this.setState({active: !this.state.active})
                            }} to="/wytrawnosci">Wytrawności</Link></li>
                            <li><Link onClick={() => {
                                this.setState({active: !this.state.active})
                            }} to="/nitka">Nitka</Link></li>
                            <li><Link onClick={() => {
                                this.setState({active: !this.state.active})
                            }} to="/diy">DIY</Link></li>
                            <li><Link onClick={() => {
                                this.setState({active: !this.state.active})
                            }} to="/lifestyle">Lifestyle</Link></li>
                            <li><Link onClick={() => {
                                this.setState({active: !this.state.active})
                            }} to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    }
}

export {Header}