import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  Item,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Logo from '../component/logo';
import {connect} from 'react-redux';
import {CurrenUser} from '../store/action';
import auth from '@react-native-firebase/auth';

const Profile = (props) => {
  useEffect(() => {
    props.CurrenUser();
  }, []);
  console.log('Profile User get', props.profileUser);
  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        alert('User signed out!');
        props.navigation.navigate('SignIn');
      });
  };

  return (
    <Container>
      {props.profileUser.map((value, index) => {
        return (
          <Content key={index}>
            <View>
              <Logo />
              <View style={styles.CardShow}>
                <Card transparent>
                  <CardItem>
                    <Left>
                      {/* <Icon name="user" style={{fontSize: 70}} /> */}
                      <Body>
                        <Text>
                          {' '}
                          {value.firstName} {value.lastName}{' '}
                        </Text>
                        <Text note> {value.medicalInformation.Gender} </Text>
                      </Body>
                    </Left>
                    <Right>
                      <Body>
                        <Text>Blood Group</Text>
                        <Text note style={{justifyContent: 'space-around'}}>
                          {' '}
                          {value.medicalInformation.selectedValue}
                        </Text>
                      </Body>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text> Age </Text>
                        <Text note> {value.age} </Text>
                      </Body>
                    </Left>
                    <Right>
                      <Body>
                        <Text>City</Text>
                        <Text note>{value.city}</Text>
                      </Body>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text> Mobile No </Text>
                        <Text note> {value.mobile} </Text>
                      </Body>
                    </Left>
                    <Right>
                      <Body>
                        <Text>address</Text>
                        <Text note> {value.address}</Text>
                      </Body>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <View>
                      <Body>
                        <Text style={{color: 'red'}}>Medical Report</Text>
                        <Text style={{color: 'green'}}>
                          {value.medicalInformation.medicalInfo}
                        </Text>
                      </Body>
                    </View>
                  </CardItem>
                </Card>
              </View>
            </View>

            <Button block dark style={styles.signOut} onPress={signOut}>
              <Text style={styles.signOutBtn}>SignOut</Text>
            </Button>
          </Content>
        );
      })}
    </Container>
  );
};

const styles = StyleSheet.create({
  CardShow: {
    width: '90%',
    alignSelf: 'center',
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomColor: 'red',
    borderLeftColor: 'orange',
    borderRightColor: 'yellow',
    borderTopColor: 'lightblue',
    overflow: 'hidden',
    margin: 10,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  signOut: {
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    width: '70%',
  },
  signOutBtn: {
    color: '#FFD700',
  },
});

const mapStateToProps = (state) => ({
  profileUser: state.profileUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    CurrenUser: () => dispatch(CurrenUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
