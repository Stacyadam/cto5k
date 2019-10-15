import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Button} from 'react-native-elements';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Button title="Start" />
    </View>
  );
};

export default App;
