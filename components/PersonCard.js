import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import COLORS from '../styles/colors.js';

var screenHeight = Dimensions.get('screen').height;
var screenWidth = Dimensions.get('screen').width;

export default class PersonCard extends React.Component {

  constructor(props) {
    super(props);
    this.onPress = this.props.onPress.bind(this);
    this.person = this.props.person
  }

  render() {
    return (
      <TouchableOpacity style={personCardStyles.card} onPress = {this.props.onPress.bind(this)}>
          <View style={personCardStyles.imageContainer}>
            <View style={personCardStyles.indicator} />
            <Image style={personCardStyles.image} source={{uri: this.person.uri}} />
          </View>
          <Text style={personCardStyles.infoHeaderText} numberOfLines={1}>
            {this.person.name}
          </Text>
          <Text style={personCardStyles.infoSubheaderText} numberOfLines={1}>
            {this.person.title}
          </Text>
      </TouchableOpacity>
    );
  }
}

const personCardStyles = StyleSheet.create({
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
