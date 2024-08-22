import { CustomStepperEnum } from '../enam';
import { CSSProperties, ReactNode } from 'react';

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

export interface IButtonProps {
  text: string;
  bgColor?: string;
  variant?: IVariant;
  className?: string;
  icon?: any;
  showIcon?: boolean;
  handleClick?: () => void;
  customStyle?: CSSProperties;
}
export interface IMainContain {
  children?: ReactNode;
  step: CustomStepperEnum;
}
