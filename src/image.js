import React from 'react';

function ImageComponent() {
  return (
    <div className="row mt-4">
      {/* This creates a row with margin top. */}
      <div className="col pt-2 d-flex"></div>
      {/* This creates a column with padding top and a flex layout. */}
      <div className="col pt-2 d-flex justify-content-center">
        {/* This creates a column with padding top and centers its content. */}
        <img className="bordered-image" src="../assets/monkeyt.jpg" alt="Smart Monkey" width="150" height="150" />
        {/* This inserts an image with specified attributes. */}
      </div>
      <div className="col pt-2 pb-2"></div>
      {/* This creates a column with padding top and bottom. */}
    </div>
  );
}

export default ImageComponent;
