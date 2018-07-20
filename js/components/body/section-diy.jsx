import React from 'react';


class DiyPosts extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {
        const sorted = [];
        console.log(this.props.data);
        this.props.data.length > 0 &&
        this.props.data.forEach((item) => {
            return item.content.category === 'diy' ? sorted.push(item) : null
        });
        const posts = sorted.length > 0 &&
            sorted.map( (elem, i) => {
                return <div data-aos="zoom-in"
                            data-aos-duration={600 + i*300}
                            data-aos-easing="ease-in-sine"
                            className="slodkosci-post" key={i}>
                    <img className="slodkosci-post-img"
                         src={elem.content.image}
                         onClick={e => this.handleClick(e, i)}/>
                    <div className="slodkosci-post-title">{elem.content.title_image}</div>
                </div>
            });

        return <div className="slodkosci-posts">{posts}</div>

    }
}

class DiySection extends React.Component {

    render() {

        return <section className="slodkosci">
            <div className="container">
                <h1>Nasze DIY</h1>
                <DiyPosts data={this.props.data}/>
            </div>
        </section>
    }
}

export {DiySection}
