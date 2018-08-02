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
        var myform = $("form#myform");
        console.log(myform);
        myform.submit(function(event){
            event.preventDefault();

            // Change to your service ID, or keep using the default service
            var service_id = "default_service";
            var template_id = "slodkanitka_kontakt";

            myform.find(".form-input-submit").val("Wysyłanie...");
            emailjs.sendForm(service_id,template_id,"myform")
                .then(function(){
                    myform.find(".form-input-submit").val("Wiadomość wysłana");
                    setTimeout(() => myform.find(".form-input-submit").val("Wyślij"), 4000)
                }, function(err) {
                    alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                    myform.find(".form-input-submit").val("Wiadomość niewysłana");
                });
            return false;
        });
    }



    render() {
        return <section>
            <div className="form-container">
                <h1>Kontakt</h1>
                <p>Prosimy o wypełnienie danych poniżej. Odpowiemy tak szybko, jak to możliwe.</p>
                <p>Tel. 700-800-900</p>
                <form id="myform" method="post">
                    <div className="row">
                        <label> Imię *
                            <input id="name" type="text" name="senderName"/>
                        </label>
                        <label> Nazwisko *
                            <input id="surname" type="text" name="senderSurname"/>
                        </label>
                    </div>
                    <label> Numer telefonu *
                        <input id="tel" type="tel" name="senderTel"/>
                    </label>
                    <label> E-mail *
                        <input id="email" type="email" name="senderEmail"/>
                    </label>
                    {/*<label className="form-checkbox-container"> Produkt **/}
                        {/*<p>Proszę zaznaczyć interesujące Państwa produkty.</p>*/}
                        {/*<input type="checkbox" name="product" value="Słodkości"/>Słodkości<br/>*/}
                        {/*<input type="checkbox" name="product" value="Wytrawności"/>Wytrawności<br/>*/}
                        {/*<input type="checkbox" name="product" value="Nitka"/>Nitka<br/>*/}
                        {/*<input type="checkbox" name="product" value="DIY"/>DIY<br/>*/}
                        {/*<input type="checkbox" name="product" value="Inne"/>Inne<br/>*/}
                    {/*</label>*/}
                    <label> Wiadomość *
                        <p>Proszę podać dalsze informacje dotyczące wybranych produktów i wymagań.</p>
                        <textarea name="senderMessage" rows="5"/>
                    </label>
                    <input className="form-input-submit" type="submit" value="Wyślij"/>
                </form>
            </div>
        </section>
    }
}

export {ContactSection}