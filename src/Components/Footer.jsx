import React from 'react';
import '../index.css'

let currentDate = new Date();
let CURRENTYEAR = currentDate.getFullYear();

function Footer() {
  return (
    <div className="footerStyle">
      <footer>

      <p>Amy Sofia Photography</p>
      <p>Copyright {CURRENTYEAR}</p>

      </footer>
    </div>
  );
}

export default Footer;
