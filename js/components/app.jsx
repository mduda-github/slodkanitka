import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
    accessToken: 'sjm4QbxjgLxrtXx3V28xawtt'
});

import {Header} from './header/header.jsx'
import {Body} from './body/main-page.jsx'
import {Footer} from './footer/footer.jsx'
import {Main404} from './body/main-404.jsx'

import {ContactSection} from './body/section-contact.jsx'
import {AboutUsSection} from './body/section-aboutus.jsx'

import {SlodkosciSection} from './body/section-slodkosci.jsx'
import {WytrawnosciSection} from './body/section-wytrawnosci.jsx'
import {NitkaSection} from './body/section-nitka.jsx'
import {DiySection} from './body/section-diy.jsx'
import {LifestyleSection} from './body/section-lifestyle.jsx'
import {BlogSection} from './body/section-blog.jsx'

import {SlodkosciDetailedPost} from './body/section-slodkosci-post.jsx'



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
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Header />
            <SlodkosciDetailedPost data={this.props.data}/>
            <SlodkosciSection data={this.props.data}/>
            <Footer />
        </div>;
    }
}

class Wytrawnosci extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Header />
            <WytrawnosciSection data={this.props.data}/>
            <Footer />
        </div>;
    }
}

class Nitka extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Header />
            <NitkaSection data={this.props.data}/>
            <Footer />
        </div>;
    }
}

class Diy extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Header />
            <DiySection data={this.props.data}/>
            <Footer />
        </div>;
    }
}

class Lifestyle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Header />
            <LifestyleSection data={this.props.data}/>
            <Footer />
        </div>;
    }
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <Header />
            <SlodkosciDetailedPost data={this.props.data}/>
            <BlogSection data={this.props.data}/>
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

class NotFound extends React.Component {
    render() {
        return <div>
            <Header />
            <Main404 />
            <Footer />
        </div>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Storyblok
            .get('cdn/spaces/46349/stories')
            .then( response => {
                this.setState({
                    data: response.data.stories
                })
            })
    }
    render() {
        // console.log(this.state.data);
        return <HashRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/blog' component={() => <Blog data={this.state.data}/>} />
                <Route path='/contact' component={Contact} />
                <Route path='/aboutus' component={AboutUs} />
                <Route path='/slodkosci' component={() => <Slodkosci data={this.state.data}/>} />
                <Route path='/slodkosci/:postId' compoment={Contact}/>
                <Route path='/wytrawnosci' component={() => <Wytrawnosci data={this.state.data}/>}/>
                <Route path='/nitka' component={() => <Nitka data={this.state.data}/>}/>
                <Route path='/diy' component={() => <Diy data={this.state.data}/>}/>
                <Route path='/lifestyle' component={() => <Lifestyle data={this.state.data}/>}/>
                <Route component={NotFound} />
            </Switch>
        </HashRouter>
    }
}


export {App}