import React from 'react';
import '../index.css'


function Contact() {
  return (
    <div>

    <h2>Contact Me!</h2>

    <div class="row">
    <div class="col-6">
    <h4>Please contact me by emailing <strong>AmySofiaPhotography@gmail.com </strong> or by completing the form on this page.</h4>
    <p> In your message, please provide your contact information, the kind of photos you are looking for
     and their purpose (personal or commercial), your timeline expectation,
     and how many photos you would ideally like to take home.</p>
     <p> Please also note that while I have a standard price for charge
     (see my pricing page for details), I am also happy to accommodate any budgetting requests.</p>
     </div>

      <div class="col-6 contactForm">

      {/*    Contact Form    */}

    </div>

</div>

    </div>
  );
}

export default Contact;
