import React from 'react';
import '../index.css'

function Form() {
  return (
<div>

  <div class="row">
    <div class="col-6">
    <img class="formPhoto" src="./stylingPhotos/Signing-contract.jpg" alt="Signing a form." />
    </div>
    <div class="col-6">
    <h2 class="titleFonts"> Nobody wants to think about the worst case scenario. </h2>
      <p>But for both your peace of mind and mine, let's get some paperwork completed for the just in case!</p>
      <hr/>

      <h2> If you are a client, </h2><h5>please download the expectations file<a> here</a>. </h5>
      <p> This will help us stay on the same page about timeline, budget, and the quantity of photos you would like! </p>

      <h2> If you are a model, </h2><h5>please download the modeling contract<a> here</a>. </h5>
      <p> This will define expectations for the shoot and photo, merchandizing, and personal portfolio
    usage following our collaboration! </p>
    </div>
  </div>


</div>
  );
}

export default Form;
