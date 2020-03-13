import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Request from '../components/Request.js';
import SwitchToggle from "react-native-switch-toggle";
import COLORS from '../styles/colors.js';

var gs = require('../styles/global_styles.js');

export default class SupplierTopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      switchOn1: false,
    };
  }

    getLeftText() {
      return this.state.switchOn1 ? "Online" : "Offline";
    }

    render() {
      return (
        <View style={styles.barContainer}>
          <SwitchToggle
            style={styles.switchToggle}
            switchOn={this.state.switchOn1}
            onPress={this.onPress1}
            duration={150}
            backgroundColorOn={COLORS.PINK}
            backgroundColorOff={COLORS.GREY}
            circleColorOn={COLORS.WHITE}
            circleColorOff={COLORS.WHITE}
            />
          <Text style={styles.switchText}>{this.getLeftText()}</Text>
        </View>
      );
    }
    onPress1 = () => {
      this.setState({ switchOn1: !this.state.switchOn1 });
    };
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 0.1,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  switchToggle: {
    flex: 1,
  },
  switchText: {
    color: COLORS.WHITE,
    flex: 1,
  },
});
