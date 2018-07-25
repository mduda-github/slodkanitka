import React from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class BlogDetailedPost extends React.Component {

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

    render() {

        console.log("w details");
        console.log(this.props);
        const sorted = [];
        this.props.data.length > 0 &&
        this.props.data.forEach((item) => {
            return sorted.push(item)
        });

        const show = sorted.length > 0 &&
            <div className="blog-detailed-post">
                <div className="detailed-post-nav">
                    <div className="detailed-post-nav-left"><strong>slodkanitka</strong> &gt; <a>blog</a></div>
                    <div className="detailed-post-nav-right"/>

                </div>
                <div className="detailed-post-body">
                    <div className="detailed-post-body-left">
                        <img src={'https://' + sorted[this.state.indexClicked].content.image}/>
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

export {BlogDetailedPost}

