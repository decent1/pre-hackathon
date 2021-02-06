import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native';
var logo = require('../images/splash.png');

export default function Logo() {
    return (
        <Image source={logo} style={styles.logo} />
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        alignSelf: 'center',
      }
})
