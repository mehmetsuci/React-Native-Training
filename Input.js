import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const Input = ({holder})=>{
    return(
        
            <View style={styles.container}>
                <TextInput placeholder={holder}/>
                     
            </View>
        
    )
}

export  {Input};

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#eceff1',
        padding:1,
        margin:15,
        borderRadius:10,
        marginVertical:20

    }
})