import React from 'react';
import '../index.css'


function Home() {
  return (
  <div>

{/* The below title fades in and then fades out. Then the rest of the code runs per below.
<div class="AmySofia">
  <h1> Amy Sofia </h1>
  <h1> Photography </h1>
</div>
*/}


  <div class="row">
    <div class="col-7">
    <h2>Projects</h2>

      <div id="photoCarosel" class="carousel slide carousel-fade " data-ride="carousel">
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img src="./stylingPhotos/DSC_0686.jpg" class="d-block w-100" alt="..." />
            <p class="caption"> Visions of East Asia </p>
          </div>
          <div class="carousel-item">
            <img src="./stylingPhotos/DSC_0009.jpg" class="d-block w-100" alt="..." />
            <p class="caption"> Products and Advertising </p>
          </div>
          <div class="carousel-item">
            <img src="./stylingPhotos/Porto-Norte.jpg" class="d-block w-100" alt="..." />
            <p class="caption"> Love in Portugal & Greater Europe </p>
          </div>
          <div class="carousel-item">
            <img src="./stylingPhotos/DSC_0334_1.jpg" class="d-block w-100" alt="..." />
            <p class="caption"> American Tales </p>
          </div>
        </div>


        {/* The below doesn't seem to work---
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
              */}

    </div>

    </div>
<div class="col-5">
  <h2> Contact </h2>
</div>



</div>





</div>
);
}

export default Home;
