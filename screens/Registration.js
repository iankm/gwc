import React from 'react';
import { Formik } from 'formik';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../styles/colors.js';

var gs = require('../styles/global_styles.js');

var screenHeight = Dimensions.get('screen').height;
var screenWidth = Dimensions.get('screen').width;

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: [
          {name: "Registration",
          people:
          [{name: "Kevin Durant",
          title: "Forward, Brooklyn Nets",
          uri: "https://cdn.hoopsrumors.com/files/2019/10/Kevin-Durant-Nets-900x600.jpg"}]},
          {name: "Musicians",
          people:
            [{name: "Snoop Dogg",
            title: "Rapper",
            uri: "https://lahiphopevents.com/wp-content/uploads/2019/10/SnoopDogg_1024x683.jpg"}]
          }]
    }
  }


  render() {
    return (
      <ScrollView style={gs.container}>
        {this.state.categories.map(category => <CardView category={category.name} people={category.people} />)}
      </ScrollView>
    );
  }
}
