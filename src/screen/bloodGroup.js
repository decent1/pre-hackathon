import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {linear} from 'react-native/Libraries/Animated/src/Easing';
import LinearGradient from 'react-native-linear-gradient';

var logo = require('../images/splash.png');

export default function bloodGroup({navigation}) {
  return (
    <Container>
      <Image source={logo} style={styles.logo} />
      <ScrollView>
        <Card>
          <CardItem>
            <Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <LinearGradient
                colors={['lightblue', '#FFD700', 'orange']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.bloodGroupBtn}>
                  <Text style={styles.bloodText}> A+ </Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['#FFD700', 'red', 'lightblue']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.bloodGroupBtn}>
                  <Text style={styles.bloodText}> A- </Text>
                </TouchableOpacity>
              </LinearGradient>
            </Body>
          </CardItem>
          <CardItem>
            <Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <LinearGradient
                colors={['#FFD700', 'red', 'lightblue']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.bloodGroupBtn}>
                  <Text style={styles.bloodText}> B+ </Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['lightblue', '#FFD700', 'orange']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.bloodGroupBtn}>
                  <Text style={styles.bloodText}> B- </Text>
                </TouchableOpacity>
              </LinearGradient>
            </Body>
          </CardItem>
          <CardItem>
            <Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <LinearGradient
                colors={['lightblue', '#FFD700', 'orange']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.bloodGroupBtn}>
                  <Text style={styles.bloodText}> AB+ </Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['#FFD700', 'red', 'lightblue']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.bloodGroupBtn}>
                  <Text style={styles.bloodText}> AB- </Text>
                </TouchableOpacity>
              </LinearGradient>
            </Body>
          </CardItem>
          <CardItem>
            <Body
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <LinearGradient
                colors={['#FFD700', 'red', 'lightblue']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.bloodGroupBtn}>
                  <Text style={styles.bloodText}> O+ </Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['lightblue', '#FFD700', 'orange']}
                style={styles.linearGradient}>
                <TouchableOpacity style={styles.bloodGroupBtn}>
                  <Text style={styles.bloodText}> O- </Text>
                </TouchableOpacity>
              </LinearGradient>
            </Body>
          </CardItem>
          <Button
              transparent
              dark
              style={styles.Login}
              onPress={() => navigation.navigate('medicalReport')} >
              <Text style={styles.loginBtn}>Next</Text>
            </Button>
        </Card>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    alignSelf: 'center',
  },

  bloodGroupBtn: {
    borderWidth: 2,
    width: 150,
    height: 150,
    borderTopEndRadius: 10,
    borderRightColor: '#FFD700',
    borderLeftColor: 'red',
    borderTopColor: 'orange',
    borderBottomColor: 'lightblue',
    borderBottomLeftRadius: 10
  },
  bloodText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingTop: 50,
  },
  linearGradient: {
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  Login: {
    justifyContent: 'center',
    width: '90%',
    // marginTop: 20,
    borderRadius: 10,
    margin: 20,
  },
  loginBtn: {
    color: '#FFD700',
  },
});
