import React, { FC } from 'react';
import { IButtonProps } from '../../types';
import { Button } from 'react-bootstrap';

export const ButtonElement: FC<IButtonProps> = ({
  text,
  handleClick,
  variant,
  className,
  icon,
  showIcon = false,
  bgColor,
}) => {
  return (
    <>
      <Button
        className={`d-flex align-items-center justify-content-center ${className} ${bgColor} `}
        variant={variant}
        style={{ backgroundColor: bgColor, borderColor: bgColor }}
        onClick={handleClick}
      >
        {showIcon && <img src={icon} alt={text} className="me-2" />}
        {text}
      </Button>
    </>
  );
};

export default Button;
