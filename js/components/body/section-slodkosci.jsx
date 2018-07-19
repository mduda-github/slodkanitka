import React from 'react';
import {SlodkosciDetailedPost} from './section-slodkosci-post.jsx'
import data from '../../../data/data';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';





class SlodkosciPosts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showGallery: true,
            indexClicked: ''
        }
    }

    handleClick = (e, index) => {
        console.log('Kliknięto:', index);
        this.setState({
            showGallery: false,
            indexClicked: index
        });
        return <SlodkosciDetailedPost data={this.props.data} index={index}/>
    };

    render() {
        console.log(this.props.data);
        const sorted = [];
        this.props.data.length > 0 &&
        this.props.data.forEach((item) => {
            return item.content.category === 'slodkosci' ? sorted.push(item) : null
        });
        const posts = sorted.length > 0 &&
            sorted.map( (elem, i) => {
                return <div className="slodkosci-post" key={i}>
                    <img className="slodkosci-post-img"
                         src={elem.content.image}
                         onClick={e => this.handleClick(e, i)}/>
                    <div className="slodkosci-post-title">{elem.content.title_image}</div>
                </div>
            });

        return <div className="slodkosci-posts">{posts}</div>

    }
}

class SlodkosciSection extends React.Component {

    render() {

        return <section className="slodkosci">
            <div className="container">
                <h1>Nasze słodkości</h1>
                <SlodkosciPosts data={this.props.data}/>
            </div>
        </section>
    }
}

export {SlodkosciSection}
