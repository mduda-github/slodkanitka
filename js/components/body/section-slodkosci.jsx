import React from 'react';
import data from '../../../data/data';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class SlodkosciDetailedPost extends React.Component {
    render() {
        const index = this.props.index;
        return <div className="slodkosci-detailed-post">
            <div className="detailed-post-nav">
                <div className="detailed-post-nav-left">slodkanitka &gt; <a>słodkości</a></div>
                <div className="detailed-post-nav-right">
                    <span> &lt; poprzedni </span>
                    <span> następny &gt; </span>
                </div>
            </div>
            <div className="detailed-post-body">
                <div className="detailed-post-body-left">
                    <img src={data[index].imgUrl}/>
                </div>
                <div className="detailed-post-body-right">
                    <h1>{data[index].title}</h1>
                    <h3>#{data[index].tags.join('  #')}</h3>
                    <p>{data[index].description}</p>
                </div>

            </div>
            <div className="detailed-post-footer">


            </div>

        </div>
    }
}

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
        })
    };

    render() {
        const newData = [];
        for (let i = 0; i < data.length; i++) {
            newData.push(<div className="slodkosci-post" key={i}>
                <img className="slodkosci-post-img"
                     src={data[i].imgUrl}
                     onClick={e => this.handleClick(e, i)}/>
                <div className="slodkosci-post-title">{data[i].title}</div>
            </div>)
        }
        return this.state.showGallery ? <div className="slodkosci-posts">{newData}</div> :
            <SlodkosciDetailedPost index={this.state.indexClicked}/>
    }
}

class SlodkosciSection extends React.Component {

    render() {
        return <section className="slodkosci">
            <div className="container">
                <h1>Nasze słodkości</h1>
                <SlodkosciPosts/>
            </div>
        </section>
    }
}

export {SlodkosciSection}