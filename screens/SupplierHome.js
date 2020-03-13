import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Request from '../components/Request.js';
import SupplierTopBar from '../shared/SupplierTopBar.js';

var gs = require('../styles/global_styles.js');

export default class SupplierHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        requests: [{id: "1", game: "Call of Duty: Modern Warfare", console: "PS4", from: "Ian Mukherjee", uri: "https://lh3.googleusercontent.com/proxy/aIG_oC5dOB1E4mz_SQQGfewunnPnzZ4e2Gp9Bbu5mxZ1foKTk32PEio8NYwJrzNmKj0df_VLREYA5GAHvEmmMs-ZutKPoVSwqQMTbbjkz-mBq7jv2n-jHCBIv8R2bKakpHnl338"}],
    }
  }


  render() {
    return (
      <View style={gs.container}>
        <SupplierTopBar />
        <Text style={gs.headerText}>Requests</Text>
        <FlatList
        contentContainerStyle={gs.cardViewContainer}
        data={this.state.requests}
        renderItem={({item}) => (
          <Request
            game={item.game}
            console={item.console}
            from={item.from}
            uri={item.uri}
        />
        )}
        keyExtractor={item => item.id}
        />
      </View>
    );
  }

}
