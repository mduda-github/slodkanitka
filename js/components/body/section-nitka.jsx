import React from 'react';


class NitkaPosts extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const sorted = [];
        this.props.data.length > 0 &&
        this.props.data.forEach((item) => {
            return item.content.category === 'nitka' ? sorted.push(item) : null
        });
        const posts = sorted.length > 0 &&
            sorted.map( (elem, i) => {
                return <div className="slodkosci-post" key={i}>
                    <img className="slodkosci-post-img"
                         src={elem.content.image}/>
                    <div className="slodkosci-post-title">{elem.content.title_image}</div>
                </div>
            });

        return <div className="slodkosci-posts">{posts}</div>

    }
}

class NitkaSection extends React.Component {

    render() {

        return <section className="slodkosci">
            <div className="container">
                <h1>Ostatnio uszyłyśmy</h1>
                <NitkaPosts data={this.props.data}/>
            </div>
        </section>
    }
}

export {NitkaSection}
