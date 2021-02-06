import React, {useEffect, useState} from 'react';
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
import {DonorListShow} from '../store/action';

const DonorList = (props) => {
  useEffect(() => {
    props.DonorListShow();
  }, []);
  return (
    <Container>
      <Logo />
      <Content>
        {props.DonorListCard.map((value, index) => {
          return (
            <View style={styles.CardShow} key={index}>
              <Card transparent>
                <CardItem>
                  <Left>
                    {/* <Icon name="user" style={{fontSize: 70}} /> */}
                    <Body>
                      <Text>
                        {value.firstName} {value.lastName}
                      </Text>
                      <Text note> {value.medicalInformation.Gender} </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text>Blood Group</Text>
                      <Text note style={{justifyContent: 'space-around'}}>
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
                      <Text note> {value.city}</Text>
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
                  <Body>
                    <Text style={{color: 'red'}}>Medical Report</Text>
                    <Text style={{color: 'green'}}>
                      {value.medicalInformation.medicalInfo}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
          );
        })}
      </Content>
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
});

const mapStateToProps = (state) => ({
  DonorListCard: state.DonorListCard,
});

const mapDispatchToProps = (dispatch) => {
  return {
    DonorListShow: () => dispatch(DonorListShow()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorList);
