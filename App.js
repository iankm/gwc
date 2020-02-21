import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

var gs = require('./styles/global_styles.js');

export default function App() {
  state = {
    fontLoaded: false,
  };

  async function componentDidMount() {
    await Font.loadAsync({
      'rubikr': require('./assets/fonts/Rubik/Rubik-Regular.ttf'),
      'rubikm': require('./assets/fonts/Rubik/Rubik-Medium.ttf'),
      'rubikb': require('./assets/fonts/Rubik/Rubik-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  return (
    <View style={gs.container}>
    {
      this.state.fontLoaded ? (
        <Text style={gs.bodyText}>
          Gaming With Celebs
        </Text>
      ) : null
    }
    </View>
  );
}
