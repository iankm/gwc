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
    paddingLeft: '3%',
    paddingTop: '15%',
  },
  featuredContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: screenHeight * 0.4,
    width: screenWidth,
  },
  cardContainer: {
    flex: 1,
    width: screenWidth,
    left: 0,
    marginBottom: '10%',
  },
  headerText: {
    fontSize: 27,
    color: COLORS.PINK,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  subheaderText: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
    color: COLORS.GREY,
  },
});
