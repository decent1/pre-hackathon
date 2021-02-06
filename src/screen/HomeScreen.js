import {Container, Content, Right, Left, Body} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Logo from '../component/logo';

var donation = require('../images/bloodDonation.jpeg');

export default function HomeScreen() {
  return (
    <Container>
      <Content>
        <Logo />
        <View style={styles.Heading}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>
              Who {''}
            </Text>
            <Text style={{color: 'green', fontWeight: 'bold', fontSize: 20}}>
              Are {''}
            </Text>
            <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 20}}>
              We?
            </Text>
          </View>
        </View>

        <View style={styles.mainView}>
          <View style={{marginTop: 10, width: '80%', alignSelf: 'center'}}>
            <Text style={styles.homeParaText}>
              Blood Donation Society Pakistan is Non Government, Non Political
              Volunteer Society and our Motto is to Seek pleasure of Almighty
              Allah by Saving Human lives via facilitating blood transfusion.
              Through our mobile app and website, we provide blood donations
              across Pakistan with few tabs on finger tips. We try our level
              best to meet 100% blood requirements voluntarily throughout
              Pakistan. We have a database of volunteers across the country
              willing to donate blood who can be reached through this app and
              our website. For this purpose, we also conduct different seminars
              and motivational sessions in colleges, universities and local
              communities. We also create awareness among youth of the country.
              We aim at ensuring access to safe and sufficient supply of blood
              and creating acceptability & accessibility in local communities
              for voluntarily donation of blood.
            </Text>
          </View>

          <View>
            <Image source={donation} style={styles.donationImage} />
          </View>
        </View>

        <View>
          <View style={styles.HeadingBlood}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text style={{color: 'red', fontWeight: 'bold', fontSize: 15}}>
                Compatible {''}
              </Text>
              <Text style={{color: 'green', fontWeight: 'bold', fontSize: 15}}>
                Blood {''}
              </Text>
              <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 15}}>
                Type {''}
              </Text>
              <Text
                style={{color: '#FFD700', fontWeight: 'bold', fontSize: 15}}>
                Donors {''}
              </Text>
            </View>
          </View>

  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 20 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'red' , width:170 , textAlign:'center' , color:'red'}}>Recipient Blood Type</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'green' , width: 170, textAlign:'center' , color:'green' }}>Matching Donor Blood Type</Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 5 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width:170 , textAlign:'center'}}>A+</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width: 170, textAlign:'center' }}>	A+, A-, O+, O</Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 5 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width:170 , textAlign:'center'}}>A-</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width: 170, textAlign:'center' }}>	A-, O-</Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 5 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width:170 , textAlign:'center'}}>B+</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width: 170, textAlign:'center' }}>	B+, B-, O+, O-</Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 5 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width:170 , textAlign:'center'}}>B-</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width: 170, textAlign:'center' }}>B-, O-</Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 5 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width:170 , textAlign:'center'}}>AB+</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width: 170, textAlign:'center' }}>Compatible with all blood types</Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 5 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width:170 , textAlign:'center'}}>AB-</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width: 170, textAlign:'center' }}>AB-, A-, B-, O-</Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 5 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width:170 , textAlign:'center'}}>O+</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width: 170, textAlign:'center' }}>O+, O-</Text>
  </View>
  <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop: 5 ,}}>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width:170 , textAlign:'center' , marginBottom: 20}}>O-</Text>
    <Text style={{borderWidth: 2 , padding: 13 , borderColor: 'lightgrey' , width: 170, textAlign:'center' , marginBottom: 20 }}>O-</Text>
  </View>


        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Heading: {
    width: '80%',
    padding: 20,
    marginTop: 10,
    borderTopLeftRadius: 20,
    alignSelf: 'center',
    borderBottomRightRadius: 20,
    elevation: 6,
  },
  HeadingBlood: {
    width: '80%',
    padding: 20,
    marginTop: 10,
    borderTopLeftRadius: 20,
    alignSelf: 'center',
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  donationImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10,
  },
  homeParaText: {
    textAlign: 'justify',
    lineHeight: 20,
    marginTop: 10,
    color: 'grey',
  },
});
