import { FC, ReactElement } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TButton } from './type';
import { clsx } from 'clsx';
import { styles } from './style';

export const NeoButton: FC<TButton> = (props): ReactElement => {
  const { variant = 'primary' } = props;
  const bgColor = clsx({
    '#DCBFFF': variant === 'primary',
    green: variant === 'secondary',
  });
  return (
    <TouchableOpacity
      style={styles({ bgColor }).NeoButtonContainer}
      activeOpacity={0.8}
      onPress={props.onPress}
    >
      <Text style={styles().NeoButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};
