import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



class ContactSection extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return <section>
            <div className="form-container">
                <h1>Kontakt</h1>
                <p>Prosimy o wybranie interesujących Państwa produktów i wypełnienie danych poniżej. Odpowiemy tak
                   szybko, jak to możliwe.</p>
                <p>Tel. 700-800-900</p>
                <form>
                    <div className="row">
                        <label> Imię *
                            <input id="name" type="text" name="name"/>
                        </label>
                        <label> Nazwisko *
                            <input id="surname" type="text" name="surname"/>
                        </label>
                    </div>
                    <label> Numer telefonu *
                        <input id="tel" type="tel" name="tel"/>
                    </label>
                    <label> E-mail *
                        <input id="email" type="email" name="email"/>
                    </label>
                    <label className="form-checkbox-container"> Produkt *
                        <p>Proszę zaznaczyć interesujące Państwa produkty.</p>
                        <input type="checkbox" name="product" value="Słodkości"/>Słodkości<br/>
                        <input type="checkbox" name="product" value="Wytrawności"/>Wytrawności<br/>
                        <input type="checkbox" name="product" value="Nitka"/>Nitka<br/>
                        <input type="checkbox" name="product" value="DIY"/>DIY<br/>
                        <input type="checkbox" name="product" value="Inne"/>Inne<br/>
                    </label>
                    <label> Wiadomość *
                        <p>Proszę podać dalsze informacje dotyczące wybranych produktów i wymagań.</p>
                        <textarea rows="5"/>
                    </label>
                    <input className="form-input-submit" type="submit" value="Wyślij"/>
                </form>
            </div>
        </section>
    }
}

export {ContactSection}