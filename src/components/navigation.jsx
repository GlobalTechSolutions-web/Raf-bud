import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
         <div className={'nav-header_left'}>
           <img src="img/logo.jpeg" className="img-header" alt="" />{" "}
           <a className="navbar-brand page-scroll" href="#page-top">
             RAF-BUD
           </a>
         </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                O nas
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                USŁUGI              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                REALIZACJE
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Opinie
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Zespół
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
