import React from 'react';

interface IImageComponent  {
  images: any;
  text: string;
}

const ImageComponent: React.FC<IImageComponent> = ({ images, text }) => {
  return (
    <>
      <img src={images} alt={text} />
    </>
  );
};

export default ImageComponent;