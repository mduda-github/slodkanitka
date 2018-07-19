import React from 'react';
import StoryblokClient from 'storyblok-js-client';

var Storyblok = new StoryblokClient({
    accessToken: 'sjm4QbxjgLxrtXx3V28xawtt'
});

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        }
    }
    // componentDidMount() {
    //     Storyblok
    //         .get('cdn/spaces/46349/stories')
    //         .then( response => {
    //             this.setState({
    //                 data: response.data.stories
    //             })
    //         })
    // }

    render() {
        console.log(this.state.data);
        return <div></div>
    }
}

export {Test}