import React from 'react';
import '../index.css';

function PhotographyPage(props) {

  const images = props.images;









  return (
    <div>

    <h1> Photos! </h1>

    {
      images.map(image => {
        return (
          <div>
            <div>
            <img className="photoFormatting" src={image.url} alt={image.caption} />
            <p>{image.caption}</p>
            </div>
          </div>
        );
      })
    }

    </div>
  );
}

export default PhotographyPage;
