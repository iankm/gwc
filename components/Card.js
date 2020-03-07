import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import COLORS from '../styles/colors.js';

var screenHeight = Dimensions.get('screen').height;
var screenWidth = Dimensions.get('screen').width;

export default class Card extends React.Component {

    render() {
      return (
        <View style={cardStyles.card}>
            <View style={cardStyles.imageContainer}>
              <View style={cardStyles.indicator} />
              <Image style={cardStyles.image} source={{uri: this.props.uri}} />
            </View>
            <Text style={cardStyles.infoHeaderText} numberOfLines={1}>
              {this.props.name}
            </Text>
            <Text style={cardStyles.infoSubheaderText} numberOfLines={1}>
              {this.props.title}
            </Text>
        </View>
      );
    }
}

const cardStyles = StyleSheet.create({
  card: {
    display: 'flex',
    width: screenWidth * 0.5,
    height: screenHeight * 0.3,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: '5%',
  },
  imageContainer: {
    flex: 5,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
  indicator: {
    position: 'absolute',
    height: '8%',
    width: '7%',
    bottom: '6%',
    right: '6%',
    borderRadius: 15,
    backgroundColor: COLORS.ONLINEGREEN,
    zIndex: 10,
  },
  infoHeaderText: {
    flex: 1,
    width: '100%',
    fontSize: 25,
    color: COLORS.BLACK,
    paddingTop: '5%',
    paddingLeft: '5%',
    fontWeight: 'bold',
  },
  infoSubheaderText: {
    flex: 1,
    width: '90%',
    fontSize: 18,
    color: COLORS.GREY,
    paddingLeft: '5%',
  },
});
