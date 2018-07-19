import React from 'react';


class LifestylePosts extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const sorted = [];
        this.props.data.length > 0 &&
        this.props.data.forEach((item) => {
            return item.content.category === 'lifestyle' ? sorted.push(item) : null
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

class LifestyleSection extends React.Component {

    render() {

        return <section className="slodkosci">
            <div className="container">
                <h1>Lifestyle</h1>
                <LifestylePosts data={this.props.data}/>
            </div>
        </section>
    }
}

export {LifestyleSection}
