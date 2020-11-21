import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const Button = ({text})=>{
    return(
        
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                
                
            </TouchableOpacity>
        
    )
}

export  {Button};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#82ada9',
        padding:20,
        borderRadius:10,
        width:Dimensions.get('window').width /2,
        alignSelf: 'center'
        
    },

    text:{
        fontWeight:'bold',
        color: 'white',
        textAlign:'center'
    }
})