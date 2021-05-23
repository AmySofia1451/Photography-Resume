import React from 'react';
import '../index.css'

function Header(props) {
  return (
    <div>
      <header class="headerStyle">

        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" onClick={props.onHomeClick}>Amy Sofia Photography</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" onClick={props.onHomeClick}>Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={props.onAboutClick}>About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={props.onFormClick}>Forms</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={props.onPricingClick}>Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={props.onContactClick}>Contact</a>
              </li>
            </ul>
            <span class="navbar-text">
          <i class="fab fa-github socialIcon"></i>
          <i class="fab fa-linkedin-in socialIcon"></i>
            </span>
          </div>
        </nav>


      </header>
    </div>
  );
}

export default Header;
