'use strict';

var React = require('react-native');

import COLORS from './colors.js';
import { Dimensions } from 'react-native';

var screenHeight = Dimensions.get('screen').height;
var screenWidth = Dimensions.get('screen').width;

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    color: '#f4f4f4',
    paddingTop: '15%',
    paddingLeft: '1%',
    paddingRight: '1%'
  },
  centeredContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242424',
    color: '#f4f4f4',
  },
  featuredContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: screenHeight * 0.4,
    width: screenWidth
  },
  cardViewContainer: {
    display: 'flex',
    flex: 1,
    width: screenWidth,
    minHeight: screenHeight,
    marginLeft: '3%',
  },
  gameContainer: {
    flex: 1,
    marginLeft: '3%',
    marginTop: '5%'
  },
  cardContainer: {
    width: screenWidth,
    marginBottom: '10%'
  },
  headerText: {
    fontSize: 27,
    color: COLORS.PINK,
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  profileHeaderText: {
    fontSize: 27,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileSubheaderText: {
    fontSize: 20,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
  subheaderText: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
    color: COLORS.WHITE,
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
  },
  mainButton: {
    backgroundColor: COLORS.PINK,
    marginTop: '3%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  mainButtonTitle: {
    fontSize: 20,
  },
  cancelButton: {
    backgroundColor: COLORS.BLACK,
    marginTop: '3%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  cancelButtonTitle: {
    fontSize: 20,
  },
  selectButton: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: COLORS.BLUE,
    marginTop: '3%',
    width: 300,
    paddingLeft: '3%',
    paddingRight: '3%',
    borderRadius: 30,
  },
  selectButtonTitle: {
    flex: 1,
    color: COLORS.BLACK,
    fontSize: 20,
  },
  returnButton: {
    backgroundColor: COLORS.ONLINEGREEN,
    marginTop: '3%',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  returnButtonTitle: {
    color: COLORS.BLACK,
    fontSize: 20,
  },
  inputStyle: {
    color: COLORS.WHITE,
  },
  inputLabelStyle: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
});
