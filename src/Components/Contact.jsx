import React from 'react';
import '../index.css'


function Contact() {
  return (
    <div>

    <div className="row">
    <div className="col-5 contactMessage">
    <a className="featherIcon"><i className="fas fa-feather-alt"></i></a>
    <h4>Please contact me by emailing <strong>AmySofiaPhotography@gmail.com </strong> or by completing the form on this page.</h4>
    <p> </p>
    <p> In your message, please provide your contact information and details for your event such as: <ul> <li>the type of event (and is it personal or commercial?)</li>
    <li>your timeline expectation</li><li>location</li> <li>estimated number of hours shooting on site</li> <li>number of expected photos</li>
    <li>additional products you would like to request (such as prints)</li></ul> </p>
     <p> Please also note that while I have a standard price for charge
     (see my pricing page for details), I am happy to discuss discounts and packages.</p>
     <a className="featherIcon"><i className="fas fa-signature"></i></a>
     </div>

      <div className="col-6 contactForm">
      <h2> Contact Me! </h2>
      <form>
      <div>
        <div>
          <input type="text" className="form-control" placeholder="First name"/>
          <input type="text" className="form-control" placeholder="Last name"/>
        </div>
      </div>

    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted">Please provide your email so I can reach you!</small>
    </div>

    <div className="form-group">
    <label for="exampleFormControlTextarea1">Please describe your event.</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <p> </p>
    <button type="submit" className="btn btn-dark">Submit</button>
  </form>

    </div>

</div>

    </div>
  );
}

export default Contact;
