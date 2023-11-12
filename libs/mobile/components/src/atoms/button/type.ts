import { ButtonProps } from 'react-native';

export type TButtonStyle = {
  bgColor?: string;
};

export type TButton = ButtonProps & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};
