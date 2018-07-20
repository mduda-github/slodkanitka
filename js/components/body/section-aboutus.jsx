import React from 'react';

class AboutUsSection extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return <section className="aboutus">
            <div className="container">
                <h1>Trochę o nas</h1>
                <div className="aboutus-text">
                    <img data-aos="fade-right"
                         className="aboutus-img-1"
                         src='./../../../images/about_us_1.jpg'/>
                    <p>Rasowa Kura Domowa, wieczny student, żona cudownego Męża, mama dwóch słodziaków i właścicielka
                        żółtego psa :) Poza tym pasjonatka życia, uzależniona od doświadczania go w pełnym jego wymiarze
                        z
                        wszystkim co przynosi każdy dzień. Smakująca radości, ale i smutki. Obserwatorka, realistka
                        zakochana w zwyczajności, codzienności i to w niej upatrująca prawdziwego szczęścia, lubiąca
                        jedzenie i wytwory własnych rąk, starająca się żyć tu i teraz i celebrować chwile, zwyczajnie
                        wdzięczna Bogu za dar życia - oto ja, <strong>Paulina</strong>, miło mi.</p>
                </div>
                <div className="aboutus-text">
                    <p>Wesoła i trochę roztrzepana gosposia. Żona ukochanego Męża. Właścicielka pary uroczych
                        czworonogów -
                        tego mądrego i tej ładnej. Absolwentka UW na kierunku przyrodniczym, pracownik korporacji w
                        branży
                        medycznej, miłośniczka wszelkich zadań manualnych, czyli osoba bardzo niezdecydowana. Szukająca
                        we wszystkim dobra, a szczęścia w sobie, choć to często nie lada wyzwanie. Wrażliwa na piękno
                        objawiające się w ludziach i świecie. Lubi smacznie zjeść, najchętniej z własnej kuchni. A
                        jeszcze
                        lepiej, podzielić się z bliskimi, tym czym została obdarowana. Cześć,
                        jestem <strong>Klaudyna</strong>.</p>
                    <img data-aos="fade-left"
                         className="aboutus-img-2"
                         src='./../../../images/about_us_2.png'/>
                </div>
            </div>
        </section>
    }
}

export {AboutUsSection}