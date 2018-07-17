import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import {Header} from './header/header.jsx'
import {Body} from './body/main-page.jsx'
import {Footer} from './footer/footer.jsx'
import {ContactSection} from './body/section-contact.jsx'
import {AboutUsSection} from './body/section-aboutus.jsx'
import {SlodkosciSection} from './body/section-slodkosci.jsx'


class Main extends React.Component {
    render() {
        return <div>
            <Header />
            <Body />
            <Footer />
        </div>
    }
}

class Slodkosci extends React.Component {
    render() {
        return <div>
            <Header />
            <SlodkosciSection />
            <Footer />
        </div>;
    }
}

class AboutUs extends React.Component {
    render() {
        return <div>
            <Header />
            <AboutUsSection />
            <Footer />
        </div>;
    }
}

class Contact extends React.Component {
    render() {
        return <div>
            <Header />
            <ContactSection />
            <Footer />
        </div>;
    }
}

class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
                <Route exact path='/' component={Main} />
                <Route path='/contact' component={Contact} />
                <Route path='/aboutus' component={AboutUs} />
                <Route path='/slodkosci' component={Slodkosci} />
            </div>
        </HashRouter>
    }
}


export {App}