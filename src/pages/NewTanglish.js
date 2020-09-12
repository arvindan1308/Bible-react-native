import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native'; 

class NewTanglish extends Component{
    render(){
        return(
            <View style={styles.container} > 
                <Text> NewTanglish Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white'
    },  

});
export default NewTanglish; 