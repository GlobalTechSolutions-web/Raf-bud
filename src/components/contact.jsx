import {useState} from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{name, email, message}, setState] = useState(initialState);
  const [sended, setSented] = useState(false)
  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prevState) => ({...prevState, [name]: value}));
  };
  const clearState = () => {
    setState({...initialState})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_5cl5ukc", "template_ck1b6n1", e.target, "6siq6hGaSrDT60kat")
      .then(
        (result) => {
          console.log('11111')
          setSented(true)
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );

  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Skontaktuj się!</h2>
                <p>
                  Prosze wypełnij poniższy formularz, aby wysłać do nas e-mail, a my skontaktujemy się z tobą tak
                  szybko, jak to możliwe.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Imię i nazwisko"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Twój email"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Treść wiadomości"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Wyślij wiadomość
                </button>
                {sended &&
                  <span className={'sended'}>Email sended</span>
                }
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informacje kontaktowe: </h3>
              <h5>Rafał Olechno</h5>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i>Adres
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefon
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> E-mail
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Firma zajmująca się tworzeniem stron internetowych {" "}
            <a href="https://globaltechsolution.netlify.app" rel="nofollow" target={'_blank'} className={'pointer'}>
              GlobalTech Solutions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
