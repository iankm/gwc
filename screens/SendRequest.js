import React from 'react';
import Icon from 'react-native-vector-icons';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import GameCard from '../components/GameCard.js';
import ProfileCard from '../components/ProfileCard.js';
import { Button, Input } from 'react-native-elements';

import COLORS from '../styles/colors.js';

var gs = require('../styles/global_styles.js');

export default class SendRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        id: '1',
        name: "Kevin Durant",
        title: "Forward, Brooklyn Nets",
        uri: "https://cdn.hoopsrumors.com/files/2019/10/Kevin-Durant-Nets-900x600.jpg",
        sections: ["Games"],
        games: [{id: "1", name: "Madden 20", uri: "https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/04/Madden-NFL-20-Patrick-Mahomes.jpg"}],
    }
  }


  render() {
    return (
      <ScrollView style={gs.container}>
        <View style={gs.profileHeadingContainer}>
          <Text style={gs.profileHeaderText}>{this.state.name}</Text>
          <Text style={gs.profileSubheaderText}>{this.state.title}</Text>
        </View>
        <View style={styles.centeredContainer}>
          <ProfileCard width={200} height={200} uri={this.state.uri} />
          {/*<View style={gs.profileHeadingContainer}>
            <Text style={gs.profileSubheaderText}>{"Average Response Time: 15 min"}</Text>
          </View>*/}
          <View style={gs.gameContainer}>
            <Text style={gs.headerText}>{"Choose Game"}</Text>
            <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={gs.cardContainer}
            data={this.state.games}
            renderItem={({item}) => (
              <GameCard
                name={item.name}
                uri={item.uri}
              />
            )}
            keyExtractor={item => item.id}
            />
          </View>
          <Input
            label="PS4 Username"
            placeholder="Username"
            labelStyle={gs.inputLabelStyle}
            inputStyle={gs.inputStyle}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Send Request"
              titleStyle={gs.mainButtonTitle}
              buttonStyle={gs.mainButton}
              onPress={this.props.onPress}
              />
          </View>
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  centeredContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#242424',
    color: '#f4f4f4',
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
});
