import React, { Component } from 'react';
import { View,Text,StyleSheet} from 'react-native'; 

class OldTanglish extends Component{
    render(){
        return(
            <View style={styles.container} > 
                <Text> OldTanglish Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white'
    },  
}
);
export default OldTanglish; 