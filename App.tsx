import React from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigator from './src/navigation';

import {ThemeProvider} from '@emotion/react';
import {Provider} from 'react-redux';

import configureStore from './src/store/configureStore';

const theme = {
  blue: '#0000ff',
  background: '#ccc',
  colors: {
    primary: 'pink',
  }
};

const store = configureStore();

const App: () => React$Node = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
