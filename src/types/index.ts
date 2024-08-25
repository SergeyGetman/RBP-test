import { CustomStepperEnum } from '../enam';
import { CSSProperties, ReactNode } from 'react';
import { MouseEvent } from 'react';

export interface IDataTable {
  arr?: any[];
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface AccountPagesState {
  status: number;
  count: CustomStepperEnum;
  globalArrayAccount: IProduct[];
}

export type IVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

export type IBtnType = 'submit' | 'reset' | 'button' | undefined;

export interface IButtonProps {
  text: string;
  bgColor?: string;
  type?: IBtnType;
  variant?: IVariant;
  className?: string;
  icon?: any;
  showIcon?: boolean;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  customStyle?: CSSProperties;
  disabled?: boolean;
}
export interface IMainContain {
  children?: ReactNode;
  step: CustomStepperEnum;
}
