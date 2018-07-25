import React from "react";

class DiyDetailedPost extends React.Component {
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
        this.props.action()
    }

    render() {
        const sorted = [];
        this.props.data.length > 0 &&
        this.props.data.forEach((item) => {
            return item.content.category === 'diy' ? sorted.push(item) : null
        });

        const show = sorted.length > 0 &&
            <div data-aos="zoom-out"
                 data-aos-easing="ease-in-sine"
                 className="slodkosci-detailed-post">
                <div className="detailed-post-nav">
                    <div className="detailed-post-nav-left"><strong>slodkanitka</strong> &gt; <a>DIY</a></div>
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

export {DiyDetailedPost}

