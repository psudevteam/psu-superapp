/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View className="flex flex-col bg-blue-400">
          <Text className="text-3xl font-bold text-center text-blue-400">
            Anjay Mabar
          </Text>
          <Text className="text-3xl font-bold text-center text-blue-400">
            Waduh
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
