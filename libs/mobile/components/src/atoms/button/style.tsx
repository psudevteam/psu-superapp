import { StyleSheet } from 'react-native';
import { TButtonStyle } from './type';

export const styles = ({ bgColor = '#DCBFFF' }: TButtonStyle) =>
  StyleSheet.create({
    NeoButtonContainer: {
      elevation: 8,
      backgroundColor: bgColor,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    NeoButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  });
