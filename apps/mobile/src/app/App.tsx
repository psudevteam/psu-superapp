import { FC, ReactElement } from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { NeoButton } from '@psu-superapp/mobile-components';

export const App: FC = (): ReactElement => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View>
          <Text>Anjay Mabar</Text>
          <NeoButton title="Login" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
