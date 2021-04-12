import React, { Component } from 'react';
import NavBar from '../components/NavBar'

class Contact extends Component {
  render() {
    return (
      <div id="contact-page">
        <NavBar />
        <header className="page-header">
          <h1>Contato</h1>
        </header>
        <main className="page-main">
          <section className="contact-list">
            <div className="contact">
              <img
                src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png"
                alt="Gmail logo"
                width="48px"
                height="48px"
              />
              <div className="info">
                <em>matheus.martino97@gmail.com</em>
                <a href="mailto:matheus.martino97@gmail.com">
                  Mande-me um email
                </a>
              </div>
            </div>
            <div className="contact">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/733/733585.svg?token=exp=1618188251~hmac=9887a3f7ceac0212b0953d55e440e5ce"
                alt="Gmail logo"
                width="48px"
                height="48px"
              />
              <div className="info">
                <em>+55 15 99130-9506</em>
                <a href="https://api.whatsapp.com/send?phone=5515991309506&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio...">
                  Mande-me uma mensagem
                </a>
              </div>
            </div>
            <div className="contact">
              <img
                src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"
                alt="Gmail logo"
                width="48px"
                height="48px"
              />
              <div className="info">
                <em>@matheusmrtno</em>
                <a
                  href="https://www.instagram.com/matheusmrtno/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visite meu instagram
                </a>
              </div>
            </div>
            <div className="contact">
              <img
                src="https://image.flaticon.com/icons/png/512/174/174857.png"
                alt="Gmail logo"
                width="48px"
                height="48px"
              />
              <div className="info">
                <em>Matheus Martino</em>
                <a
                  href="https://www.linkedin.com/in/matheus-martino/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visite meu instagram
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Contact;
