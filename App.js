import React from 'react';
import { StyleSheet } from 'react-native';
import BuyerHome from './screens/BuyerHome.js';
import SupplierHome from './screens/SupplierHome.js';
import Registration from './screens/Registration.js';
import Profile from './screens/Profile.js';
import SendRequest from './screens/SendRequest.js';
import RequestSent from './screens/RequestSent.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var gs = require('./styles/global_styles.js');

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function BuyerHomeScreen({ navigation }) {
  return (
    <BuyerHome onPress={() => navigation.navigate('CelebProfile')} />
  );
}

function CelebProfileScreen({ navigation }) {
  return (
    <Profile onPress={() => navigation.navigate('SendRequest')} />
  );
}

function SendRequestScreen({ navigation }) {
  return (
    <SendRequest onPress={() => navigation.navigate('RequestSent')} />
  );
}

function RequestSentScreen({ navigation }) {
  return (
    <RequestSent onPressBrowse={() => navigation.navigate('BuyerHome')} onPressCancel= {() => navigation.navigate('CelebProfile')}/>
  );
}

function SupplierHomeScreen({ navigation }) {
  return (
    <SupplierHome />
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="BuyerHome">
      <MainStack.Screen name="BuyerHome" component={BuyerHomeScreen} />
      <MainStack.Screen name="CelebProfile" component={CelebProfileScreen} />
      <MainStack.Screen name="SendRequest" component={SendRequestScreen} />
    </MainStack.Navigator>
  );
}

export default function App() {

return (
  <NavigationContainer>
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={MainStackScreen} />
      <RootStack.Screen name="RequestSent" component={RequestSentScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

}
