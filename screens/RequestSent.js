import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import GameCard from '../components/GameCard.js';
import ProfileCard from '../components/ProfileCard.js';
import { Button } from 'react-native-elements';
import COLORS from '../styles/colors.js';

var gs = require('../styles/global_styles.js');

export default class RequestSent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        id: '1',
        name: "Kevin Durant",
        title: "Forward, Brooklyn Nets",
        uri: "https://cdn.hoopsrumors.com/files/2019/10/Kevin-Durant-Nets-900x600.jpg",
        sections: ["Games","Clips"],
        games: [{id: "1", name: "Madden 20", uri: "https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/04/Madden-NFL-20-Patrick-Mahomes.jpg"}],
    }
  }


  render() {
    return (
      <View style={styles.centeredContainer}>
        <View style={styles.bodyContainer}>
          <ProfileCard width={200} height={200} uri={this.state.uri} />
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>{"Request Sent"}</Text>
            <Text style={gs.bodyText}>{"Kevin Durant will send an invite to his game shortly."}</Text>
          </View>
          <Button
            title="Return to Browse"
            titleStyle={gs.returnButtonTitle}
            buttonStyle={gs.returnButton}
            onPress={this.props.onPressBrowse}
            />
          <Button
            title="Cancel Request"
            titleStyle={gs.cancelButtonTitle}
            buttonStyle={gs.cancelButton}
            onPress={this.props.onPressCancel}
            />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  centeredContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242424',
    color: '#f4f4f4',
  },
  bodyContainer: {
    flex: 0.55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '3%',
  },
  headerText: {
    fontSize: 27,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '3%',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
});
