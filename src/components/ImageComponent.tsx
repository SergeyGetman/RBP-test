import React from 'react';

interface IImageComponent {
  images: any;
  text: string;
  height?: string;
  width?: string;
}

const ImageComponent: React.FC<IImageComponent> = ({ images, text, height, width }) => {
  return (
    <>
      <img src={images} alt={text} height={height} width={width} />
    </>
  );
};

export default ImageComponent;
