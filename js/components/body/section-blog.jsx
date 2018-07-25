import React from 'react';
import ReadMoreReact from 'read-more-react';
import {BlogDetailedPost} from './section-blog-post.jsx'
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class BlogSection extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    constructor(props) {
        super(props);
        this.state = {
            indexClicked: '0',
            galleryOnOff: true
        }
    }

    handleClick = (e, index) => {
        console.log('Kliknięto:', index);
        this.setState({
            indexClicked: index,
            galleryOnOff: false
        });
        console.log(this.state.indexClicked);
        return <div/>
    };

    render() {
        const posts = this.props.data.length > 0 &&
            this.props.data.map( (elem, i) => {
                return <div data-aos="zoom-in"
                            data-aos-easing="ease-in-sine"
                            className="blog-section-post" key={i}>
                    <h1>{elem.content.title_post}</h1>
                    <hr/>
                    <p>{elem.content.tags}</p>
                    <Link to={`${this.props.routerProps.url}/${elem.content.title_post}`}>
                    <img onClick={(e) => {this.handleClick(e, i)}}
                         src={'https://' + elem.content.image}/>
                    <ReadMoreReact text={elem.content.text_post}
                                   max={400} />
                    </Link>
                </div>
            });
        return <section className="blog">
            <h1 className="blog-title" ><Link to="/blog">Nasz Blog</Link></h1>

                        {this.state.galleryOnOff ? <div className="blog-section">
                            {posts}
                        </div> : <BlogDetailedPost data={this.props.data}
                                                        index={this.state.indexClicked}
                                                        action={()=>this.setState({galleryOnOff: true})}
                        />}


        </section>
    }
}

export {BlogSection}


