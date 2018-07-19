import React from "react";

class SlodkosciDetailedPost extends React.Component {
    render() {

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
                        <span>&lt; poprzedni </span>
                        <span> następny &gt; </span>
                    </div>
                </div>
                <div className="detailed-post-body">
                    <div className="detailed-post-body-left">
                        <img src={sorted[0].content.image}/>
                    </div>
                    <div className="detailed-post-body-right">
                        <h1>{sorted[0].content.title_post}</h1>
                        <h3>{sorted[0].content.tags}</h3>
                        <p>{sorted[0].content.text_post}</p>
                    </div>
                </div>
            </div>;

        return <div>{show}</div>
    }

}

export {SlodkosciDetailedPost}

