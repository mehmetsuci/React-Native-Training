import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, Dimensions, Platform, KeyboardAvoidingView, ScrollView} from 'react-native';

import {Button, Input} from './components';

const Login = ()=>{
    return(
       <SafeAreaView style={{flex:1, backgroundColor:'#b2dfdb'}}>
           <KeyboardAvoidingView style={{flex:1}} behavior= {Platform.Os == 'android' ? null :"padding"}>
            <ScrollView style={{flex:1}} bounces={false}>
             <View style={{flex:1}}>
                 <Image
                    source={require('./assets/cart.png')}
                    style={styles.logoStyle}
                  />
                 <Input holder = 'Please enter your e-mail address'/>
                 <Input holder = 'Please enter your password'/>

                 <Button text= 'Enter'/>
             </View>
            </ScrollView> 
        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    logoStyle:{
        resizeMode:'contain',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height * 0.40,
        tintColor: 'black',
        marginTop:50
                
    }
})