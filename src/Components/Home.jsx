import React from 'react';
import '../index.css'


function Home(props) {
  return (
  <div>

{/* The below title fades in and then fades out. Then the rest of the code runs per below.
<div className="AmySofia">
  <h1> Amy Sofia </h1>
  <h1> Photography </h1>
</div>
*/}


  <div className="row">
    <div className="col-7">
      <div id="photoCarosel" className="carousel slide carousel-fade " data-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="./stylingPhotos/DSC_0686.jpg" className="d-block w-100" alt="..." />
            <p className="caption"> Visions of East Asia </p>
          </div>
          <div className="carousel-item">
            <img src="./stylingPhotos/DSC_0009.jpg" className="d-block w-100" alt="..." />
            <p className="caption"> Products and Advertising </p>
          </div>
          <div className="carousel-item">
            <img src="./stylingPhotos/Porto-Norte.jpg" className="d-block w-100" alt="..." />
            <p className="caption"> Love in Portugal & Greater Europe </p>
          </div>
          <div className="carousel-item">
            <img src="./stylingPhotos/DSC_0334_1.jpg" className="d-block w-100" alt="..." />
            <p className="caption"> American Tales </p>
          </div>
        </div>


        {/* The below doesn't seem to work---
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

        Also, I want the carosel more narrow (like a theatre widespreed) so the footer is visible.
              */}

    </div>

    </div>
<div className="col-5 Welcome">
  <h3> Welcome! </h3>
  <a className="camera-icon"> <i className="fas fa-camera-retro camera-icon"></i> </a>
  <h2>Showcased Projects:</h2>
  <p onClick={props.onFoodClick}>Food</p>
  <p onClick={props.onAdvertClick}>Advertising</p>
  <p>Portraits</p>
  <p>Art</p>
  <p>Travel - Asia</p>
  <p>Travel - Europe</p>
  <p>Travel - North America</p>

</div>



</div>





</div>
);
}

export default Home;
