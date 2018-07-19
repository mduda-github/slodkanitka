import React from 'react';


class MainText extends React.Component {
    render() {
        return <div className="main-text">
            <div className="container">
                <div className="main-text-right">
                    <div className="logo">
                        <img src="./../../../images/logo.png"/>
                    </div>
                </div>
                <div className="main-text-left">
                    Jest taki rodzaj szczęścia, którego nie sposób pomieścić. To satysfakcja, spełnienie, pasja, dobro
                    rozlewające się tak bardzo, że chce się o nim mówić i dzielić z innymi. Stąd właśnie <strong>Słodka
                    Nitka</strong> - blog, który ma pomieścić choć część tego, co się z nas wylewa - doświadczenia
                    płynącego z sukcesów i porażek, doznanych podczas godzin spędzonych w kuchni i przy maszynie do
                    szycia. Tu znajdziesz kawałek naszego życia, gdzie smaki przeplatają się z refleksjami nad prozą
                    życia, a spod igły i rąk wychodzą małe dzieła.
                </div>
            </div>
        </div>
    }
}

export {MainText}