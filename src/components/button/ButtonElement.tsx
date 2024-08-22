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
  type,
  customStyle,
}) => {
  return (
    <>
      <Button
        type={type}
        className={`d-flex align-items-center justify-content-center ${className} ${bgColor} `}
        variant={variant}
        style={{ backgroundColor: bgColor, borderColor: bgColor, ...customStyle }}
        onClick={handleClick}
      >
        {showIcon && <img src={icon} height="20px" width="20px" alt={text} className="me-2" />}
        {text}
      </Button>
    </>
  );
};

export default Button;
