import React from 'react';
import '../index.css'

function Pricing() {
  return (
    <div>

    <h2> Services and Pricing </h2>
    <h4> Currently based out of: greater Philadelphia and New Jersey.</h4>
<h4>Specialty: product photography (including advertising and lifestyle), event, and portrait. </h4>
<p>Note that prices include, in addition to the actual photoshoot, the cost of transportation to and from the event,
parking fees, set-up time, the cost of photography equipment, the cost of editing software subscriptions, time spent editing photos, and creative storyboarding.</p>
<p>Prices DO NOT include the cost of physical props purchased for the shoot nor final physical products (such as prints) requested.
"Per hour" refers to per hour of shooting. Discounts and payment plans available upon request.</p>
    <div className="row">
      <div className="col-4 pricingBoxes">
      <h3>General Events & Portrait Sessions</h3>
        <h4>$100 per hour</h4>
<p>This price includes most photography requests from corporate events to engagement announcements to newborn photography.</p>
  <hr/>
      <h3>Products and Advertising</h3>
      <h4>$75 per product</h4><h5>for multiple HD photos with the client's desired backdrop (white space, black space, lifestyle/natural, etc.)
     Additional $100 per product for copywriting (advertising captions).</h5>
      <p>I have also been highly requested for testing products. Product testing costs $50 per type of product (i.e. multiple versions of the same product from different manufacturers to compare and contrast would only cost $50.)</p>
      </div>
      <div className="col-4 pricingBoxes">
      <h2>Photo!</h2>
      </div>
      <div className="col-4 pricingBoxes">
      <h3>Weddings</h3>
      <h4>Base Package: $1,000</h4>
      <p>Includes up to 4 hours of coverage on the wedding day, with most formal photos taken before ceremony,
      car service as needed from ceremony site to the reception, photos of reception highlights (until time runs out),
      and high-resolution images via digital download. Add-on options: Second (junior) photographer for $200,
      additional hour of coverage $100 per hour, engagement photo session (one hour and 10 edited pictures) for $200.</p>
      <h4>Fairy Tale Package: $1,400</h4>
      <p>Includes up to 6 hours of wedding day photography, arrival at venue prior to preparation, first look and formal photos prior to ceremony,
      car service to reception, full coverage of reception, and high-resolution images via digital download. Add-on options: Second (junior) photographer
      for $200 or engagement photo session (one hour and 10 edited pics) for $200.</p>
      <p>**Prices vary based on products requested (digitals or physicals, canvas or frames, etc.) as well as additional costs incurred by the photographer (props, tolls, etc.) **</p>
      </div>
      </div>

    </div>
  );
}

export default Pricing;
