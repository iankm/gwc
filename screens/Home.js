import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import COLORS from '../styles/colors.js';
import Card from './components/Card.js';
import CardView from './components/CardView.js';

var gs = require('../styles/global_styles.js');

var screenHeight = Dimensions.get('screen').height;
var screenWidth = Dimensions.get('screen').width;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: [
          {name: "Athletes",
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
      <ScrollView style={this.props.gs.container}>
        {this.state.categories.map(category => <CardView category={category.name} people={category.people} />)}
      </ScrollView>
    );
  }

}
