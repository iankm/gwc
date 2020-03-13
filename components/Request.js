import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { GestureHandler } from 'expo';
import COLORS from '../styles/colors.js';

var screenHeight = Dimensions.get('screen').height;
var screenWidth = Dimensions.get('screen').width;

export default class Request extends React.Component {

    render() {
      return (
        <View style={requestStyles.card}>
          <View style={requestStyles.imageSection}>
            <Image style={requestStyles.fromImage} source={{uri: this.props.uri}} />
          </View>
          <View style={requestStyles.infoSection}>
            <Text style={requestStyles.infoHeaderText} numberOfLines={1}>
              {this.props.from}
            </Text>
            <Text style={requestStyles.gameText} numberOfLines={1}>
              {this.props.game}
            </Text>
            <Text style={requestStyles.consoleText} numberOfLines={1}>
              {this.props.console}
            </Text>
          </View>
        </View>
      );
    }
}

const requestStyles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    width: screenWidth * 0.93,
    maxHeight: screenHeight * 0.2,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: '3%',
    marginBottom: '3%',
  },
  imageSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fromImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
    zIndex: 0,
  },
  infoSection: {
    flex: 3,
    display: 'flex',
    overflow: 'hidden',
  },
  infoHeaderText: {
    flex: 1.5,
    width: '100%',
    fontSize: 25,
    color: COLORS.BLACK,
    paddingTop: '3%',
    paddingLeft: '5%',
    fontWeight: 'bold',
  },
  gameText: {
    flex: 1,
    width: '90%',
    fontSize: 18,
    color: COLORS.GREY,
    paddingLeft: '5%',
    paddingTop: '1%'
  },
  consoleText: {
    flex: 1,
    width: '90%',
    fontSize: 18,
    color: COLORS.GREY,
    paddingLeft: '5%',
    paddingBottom: '5%'
  },
});
