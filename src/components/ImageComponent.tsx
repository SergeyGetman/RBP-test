import React from 'react';

interface IImageComponent {
  images: any;
  text: string;
  height?: string;
  width?: string;
  className?: string;
}

const ImageComponent: React.FC<IImageComponent> = ({ images, text, height, width, className }) => {
  return (
    <>
      <img src={images} alt={text} height={height} width={width} className={className} />
    </>
  );
};

export default ImageComponent;
