import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import COLORS from '../styles/colors.js';

var screenHeight = Dimensions.get('screen').height;
var screenWidth = Dimensions.get('screen').width;

export default class ProfileCard extends React.Component {

    render() {
      return (
        <View style={profileCardStyles(this.props.width, this.props.height).imageContainer}>
            <Image style={profileCardStyles().image} source={{uri: this.props.uri}} />
        </View>
      );
    }
}

const profileCardStyles = (width,height) => StyleSheet.create({
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor: COLORS.WHITE,
    borderRadius: 150,
    overflow: 'hidden',
    marginBottom: '3%',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    zIndex: 0,
  },
});
