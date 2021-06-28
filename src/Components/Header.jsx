import React from 'react';
import '../index.css'

function Header(props) {
  return (
    <div>
      <header className="headerStyle">

        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" onClick={props.onHomeClick}>Amy Sofia Photography</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={props.onHomeClick}>Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.onAboutClick}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.onFormClick}>Forms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.onPricingClick}>Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={props.onContactClick}>Contact</a>
              </li>
            </ul>
            <span className="navbar-text">
          <a href="https://github.com/AmySofia1451" className="socialIcon" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/amykflann/" className="socialIcon" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="amysofiaphotography.com" className="socialIcon" target="_blank" rel="noreferrer"><i className="fas fa-portrait"></i></a>
            </span>
          </div>
        </nav>


      </header>
    </div>
  );
}

export default Header;
