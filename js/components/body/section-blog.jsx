import React from 'react';
import ReadMoreReact from 'read-more-react';

class BlogSection extends React.Component {



    render() {
        const posts = this.props.data.length > 0 &&
            this.props.data.map( (elem, i) => {
                return <div className="blog-section-post" key={i}>
                    <h1>{elem.content.title_post}</h1>
                    <hr/>
                    <span>{elem.content.tags}</span>
                    <hr/>
                    <img src={elem.content.image}/>
                    <p><ReadMoreReact text={elem.content.text_post}
                                      max={400} /></p>
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