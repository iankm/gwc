import React from 'react';
import { Text, ScrollView } from 'react-native';
import Card from './Card.js'
import COLORS from '../styles/colors.js';

var gs = require('../styles/global_styles.js');

export default class CardView extends React.Component {

  render() {
    return (
      <View>
        <Text style={gs.headerText}>{this.props.category}</Text>
        <ScrollView contentContainerStyle={gs.cardContainer} horizontal={true}>
          {this.props.people.map(person => <Card name={person.name} title={person.title} uri={person.uri} />)}
        </ScrollView>
      </View>
    );
  }

}
