import React from 'react';

class MainText extends React.Component {
    render() {
        return <div className="main-text">
            <div className="container">
                <div className="main-text-right">
                    <div className="logo">
                        <p>słodka <br/> nitka</p>
                    </div>
                </div>
                <div className="main-text-left">
                    <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit. Architecto asperiores
                    atque dolorum eligendi enim error facilis labore maxime provident sit. Cupiditate doloremque error
                    illo mollitia nulla odio temporibus unde voluptas? <strong>Lorem ipsum</strong> dolor sit amet,
                    consectetur adipisicing elit. Cum dolores eius inventore maiores minus, necessitatibus obcaecati
                    officia pariatur saepe tempora! Cum dolores eius inventore maiores minus, necessitatibus obcaecati
                    officia pariatur saepe tempora!
                </div>
            </div>
        </div>
    }
}

export {MainText}