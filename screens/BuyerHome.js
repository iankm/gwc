import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CardView from '../components/CardView.js';

var gs = require('../styles/global_styles.js');

export default class BuyerHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
          {id: '1',
          name: "Athletes",
          people:
          [{id: '1',
          name: "Kevin Durant",
          title: "Forward, Brooklyn Nets",
          uri: "https://cdn.hoopsrumors.com/files/2019/10/Kevin-Durant-Nets-900x600.jpg",
          games: [{id: "1", name: "Madden 20", uri: "https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/04/Madden-NFL-20-Patrick-Mahomes.jpg"}],
          }]},
          {id: '2',
          name: "Musicians",
          people:
            [{id: '2',
            name: "Snoop Dogg",
            title: "Rapper",
            uri: "https://lahiphopevents.com/wp-content/uploads/2019/10/SnoopDogg_1024x683.jpg",
            games: [{id: "1", name: "Madden 20", uri: "https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/04/Madden-NFL-20-Patrick-Mahomes.jpg"}],
          }]}
      ]
    }
  }


  render() {
    return (
      <View style={gs.container}>
        <FlatList
        contentContainerStyle={gs.cardViewContainer}
        data={this.state.categories}
        renderItem={({item}) => (
          <CardView
            category={item.name}
            people={item.people}
            onPress={this.props.onPress}
        />
        )}
        keyExtractor={category => category.id}
        />
      </View>
    );
  }

}
