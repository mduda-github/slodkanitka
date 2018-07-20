import React from 'react';
import ReadMoreReact from 'read-more-react';


class BlogSection extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const posts = this.props.data.length > 0 &&
            this.props.data.map( (elem, i) => {
                return <div data-aos="zoom-in"
                            data-aos-easing="ease-in-sine"
                            className="blog-section-post" key={i}>
                    <h1>{elem.content.title_post}</h1>
                    <hr/>
                    <p>{elem.content.tags}</p>
                    <img src={elem.content.image}/>
                    <ReadMoreReact text={elem.content.text_post}
                                      max={400} />
                </div>
            });
        return <section className="blog">
            <h1 className="blog-title" >Nasz Blog</h1>
            <div className="blog-section">
                {posts}
            </div>
        </section>
    }
}

export {BlogSection}


