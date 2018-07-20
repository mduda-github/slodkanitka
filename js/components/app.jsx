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

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
            <div>
                <Header />
            <Switch>
                <Route exact path='/' component={Body} />
                <Route path='/blog' component={(props) => <SlodkosciSection
                    routerProps={props.match}
                    data={this.state.data}/>} />

                <Route path="/blog/:id" component={ () => {
                    return <SlodkosciDetailedPost data={this.props.data} index={this.state.indexClicked} />}}/>

                <Route path='/contact' component={ContactSection} />
                <Route path='/aboutus' component={AboutUsSection} />

                <Route path='/slodkosci' component={(props) => <SlodkosciSection
                    routerProps={props.match}
                    data={this.state.data}/>} />

                <Route path="/slodkosci/:id" component={ () => {
                    return <SlodkosciDetailedPost data={this.props.data} index={this.state.indexClicked} />}}/>

                <Route path='/wytrawnosci' component={() => <WytrawnosciSection data={this.state.data}/>}/>
                <Route path='/nitka' component={() => <NitkaSection data={this.state.data}/>}/>
                <Route path='/diy' component={() => <DiySection data={this.state.data}/>}/>
                <Route path='/lifestyle' component={() => <LifestyleSection data={this.state.data}/>}/>
                <Route component={Main404} />
            </Switch>
                <Footer />
            </div>
        </HashRouter>
    }
}


export {App}