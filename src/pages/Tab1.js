import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native'; 

class T1 extends React.Component{
    render(){
        return(
            <View style={styles.container} > 
                <Text style={styles.text}> T1 Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white'
    },  
    text:{
        textAlign:'center',
        fontWeight:'bold'
    },
}
);
export default T1; 