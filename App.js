import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import {Button} from 'native-base';

import OldTanglish from './src/pages/OldTanglish';
import NewTanglish from './src/pages/NewTanglish';
import Tab1 from './src/pages/Tab1';
import Tab2 from './src/pages/Tab2';

class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Button onPress={()=> this.props.navigation.navigate('Tab1')}
       style={styles.button1}>
            <Text style={styles.text1}>OldTanglish</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Tab2')}
            style={styles.button2}>
            <Text style={styles.text2}>NewTanglish</Text>
            </Button>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
 }
}
const AppNavigator = createStackNavigator(
  {
    Login :{
      screen: App
    },
    OldTanglish: {
      screen: OldTanglish
    },
    NewTanglish: {
      screen: NewTanglish
    },
    Tab1:{
      screen: Tab1
    },
    Tab2:{
      screen: Tab2
    },
},
  {
    initialRouteName: 'Login',
    headerMode: 'float '
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1:{
    marginBottom:-40,
    backgroundColor:'black',
    width:110,
    height:40,
    marginLeft:80,
    borderRadius:25,
    paddingVertical:40,
    },
  button2:{
    backgroundColor:'black',
    width:110,
    height:40,
    marginLeft:240,
    borderRadius:25,
  },
  text1:{
    alignItems:'center',
    paddingLeft:20,
    fontWeight:'bold',
    color:'white',
  },
  text2:{
    textAlign:'center',
    alignContent:'center',
    paddingLeft:20,
    fontWeight:'bold',
    color:'white',
  },
});

export default createAppContainer(AppNavigator);