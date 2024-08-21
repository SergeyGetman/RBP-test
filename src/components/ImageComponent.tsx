import React from 'react';

const ImageComponent = (images: any, text: string) => {
  return (
    <>
      <img src={images} alt={text} />
    </>
  );
};

export default ImageComponent;