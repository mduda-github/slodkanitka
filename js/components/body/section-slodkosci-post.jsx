import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class SlodkosciDetailedPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            indexClicked: this.props.index
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidUpdate() {
        this.props.action();
    }
    handleClick() {
        return <SlodkosciDetailedPost data={this.props.data} index={this.state.indexClicked + 1} />
    }
    render() {

        console.log("w details");
        console.log(this.props);
        const sorted = [];
        this.props.data.length > 0 &&
        this.props.data.forEach((item) => {
            return item.content.category === 'slodkosci' ? sorted.push(item) : null
        });

        const show = sorted.length > 0 &&
            <div className="slodkosci-detailed-post">
                <div className="detailed-post-nav">
                    <div className="detailed-post-nav-left"><strong>slodkanitka</strong> &gt; <a>słodkości</a></div>
                    <div className="detailed-post-nav-right">
                        <span> &lt; poprzedni </span>
                        <span> następny &gt; </span>
                    </div>
                </div>
                <div className="detailed-post-body">
                    <div className="detailed-post-body-left">
                        <img src={sorted[this.state.indexClicked].content.image}/>
                    </div>
                    <div className="detailed-post-body-right">
                        <h1>{sorted[this.state.indexClicked].content.title_post}</h1>
                        <h3>{sorted[this.state.indexClicked].content.tags}</h3>
                        <p>{sorted[this.state.indexClicked].content.text_post}</p>
                    </div>
                </div>
            </div>;
        return <div>{show}</div>
    }

}

export {SlodkosciDetailedPost}

