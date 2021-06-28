import React from 'react';
import '../index.css'

function Form() {
  return (
<div>
<h2> Nobody wants to think about the worst case scenario, </h2>
<h3 className="titleFonts">  but it's important that we are prepared for it!</h3>
  <p>
For both your peace of mind and mine, every photoshoot, no matter how small, comes with a contract.</p>
  <hr/>
  <div className="row">
    <div className="col-6">
    <h3> If you are a client, </h3><h5>please download the expectations file<a href="./ModelRelease.pdf" target="_blank"> here</a> before our shoot.</h5>
    <p> This lays out the agreed upon cost of the shoot, what is included in the price, and the method and time of payments.
This way there are no surprises, so from here on out we can just focus on creating your beautiful photos! </p>
    </div>
    <div className="col-6">
      <h3> If you are a model, </h3><h5>please download the modeling contract<a href="./PhotographyContract.pdf" target="_blank"> here</a> before our shoot</h5>
      <p> This will define expectations for the shoot and photo, merchandizing, and personal portfolio usage following our collaboration!</p>
    </div>
  </div>
  <h3>If you have any questions or would like to modify the contract, please feel free to contact me!</h3>


</div>
  );
}

export default Form;
