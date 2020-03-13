import React from 'react';
import { Text, ScrollView, View, FlatList } from 'react-native';
import PersonCard from './PersonCard.js'
import GameCard from './GameCard.js'
import COLORS from '../styles/colors.js';

var gs = require('../styles/global_styles.js');

export default class CardView extends React.Component {

  render() {
    return (
      <View>
        <Text style={gs.headerText}>{this.props.category}</Text>
        <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={gs.cardContainer}
        data={this.props.people}
        renderItem={({item}) => (
          <PersonCard
            person={item}
            onPress={this.props.onPress}
          />
        )}
        keyExtractor={item => item.id}
        />
      </View>
    );
  }

}
