'use strict';

var React = require('react-native');

import COLORS from './colors.js';

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f4f4f4'
  },
  headerText: {
    fontFamily: 'rubikb',
    fontSize: 27,
    color: COLORS.PINK,
  },
  subheaderText: {
    fontFamily: 'rubikb',
    fontSize: 20,
    backgroundColor: COLORS.WHITE,
  },
  bodyText: {
    fontFamily: 'rubikr',
    fontSize: 16,
    backgroundColor: COLORS.GREY,
  },
});
