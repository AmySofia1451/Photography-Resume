import React from 'react';
import '../index.css';

function About() {
  return (
  <div>

    <div class="row meetYourPhotographer">
      <div class="col-6">
        <h2>Meet Your Photographer!</h2>
          <p> Born and raised in Colorado, I've always had a passion for exploration.
    I believe that beauty can be found anywhere, from Pike's Peak in the Rockies
    to the streets of Kyoto to my own backyard. My goal is to bring out the beauty in every one of my subjects,
    from people to places to products.</p>
        <p> I've been taking photos for over 5 years now and I still love the challenge of finding the perfect shot.
        I got my start at the local hospital for mother's and their newborns (omitted from the portfolio
       due to hospital policy) in addition to taking travel photos for leisure. </p>
       <p>Shortly after, I started taking photos for upscale restaurants in the city at night,
    which was particularly challenging due to it's low light and fast paced environment.</p>
        <p> More recently, my focus has shifted to product photography, which has ranged anywhere from neuvo art pieces,
      to etsy shop advertising, to Amazon photography- all of them providing their own unique challenges and rewards.</p>
        <p> While my focus is still in product photography, my passion for photography takes me anywhere!</p>
        <p>Feel free to contact me, whatever the request and we will make art together!</p>

      </div>

      {/* Replace the below photo at some point with
        a new professional photo of me- laughing with a camera*/}
      <div class="col-6">
      <img class="aboutSelfie" src="./stylingPhotos/aboutSelfie.jpg" alt="Photographer's profile." />
      </div>
    </div>


  </div>
  );
}

export default About;
