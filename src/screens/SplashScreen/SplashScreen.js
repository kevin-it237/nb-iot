import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation } from "react-native-navigation";
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import {mainRoot, loginRoot} from '../../routes/routes'


const SplashScreen = () => {

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 2000)
    }, [])

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('auth:token')
          if(value !== null) {
            return Navigation.setRoot(mainRoot)
          } else {
            return Navigation.setRoot(loginRoot)
        }
    } catch(e) {
        // error reading value
        return Navigation.setRoot(loginRoot)
    }
}
    
    return (
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require('../../assets/images/bg.jpg')}
          style={styles.bg} >
            <Image 
                style={styles.image}
                source={require('../../assets/images/app_icon_white.png')} />
            <Text style={styles.text}>Cameroon Internet Of</Text>
            <Text style={styles.text}>Thing Innovation</Text>
        </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    bg: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },  
    image: {
      width: 80,
      height: 80
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: 'white'
    }
});

export default SplashScreen
