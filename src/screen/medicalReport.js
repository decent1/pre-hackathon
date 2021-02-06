import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Body,
  Item,
  Label,
  Input,
  Button,
  Radio,
  Left,
  Right,
} from 'native-base';

import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';
import Logo from '../component/logo';

export default function MedicalReport({navigation}) {
  // Medical Info
  const [medicalInfo, setmedicalInfo] = useState();

  // BloodGroupDropDown
  const [selectedValue, setSelectedValue] = useState();

  //Gender Input
  const [Gender, setGender] = useState();
  
  const remainingsignUpUserCreate = () => {
    let remainingObject = {
      medicalInfo,
      selectedValue,
      Gender,
    };
    console.log(remainingObject);
    auth().onAuthStateChanged((e) => {
      if (e) {  
        database()
          .ref('/')
          .child(`Create User/${e.uid}/medicalInformation`)
          .set(remainingObject)
          .then(() => {
            navigation.replace('myTabs');
            alert('User account created');
          });
      }
    });
  };

  // function fn(n){
      // return fn()

  // }
  return (
    <Container>
      <Logo />
      <ScrollView>
        <Content style={{width: '80%', alignSelf: 'center'}}>
          <Item>
            <Label style={{color: 'green'}}>Blood Group</Label>
            <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: 200}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="" value="" />
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="O-" />
            </Picker>
          </Item>

          <View>
            <Item>
              <Label style={styles.label}>Gender :</Label>
              <Input
                keyboardType="default"
                value={Gender}
                onChangeText={(e) => setGender(e)}
              />
            </Item>
          </View>

          <Label style={{color: 'red', margin: 8}}>Medical Record</Label>
          <View>
            <Item>
              <Label style={styles.label}>Other :</Label>
              <Input
                keyboardType="default"
                value={medicalInfo}
                onChangeText={(e) => setmedicalInfo(e)}
              />
            </Item>
          </View>
          <Button
            transparent
            dark
            style={styles.Login}
            onPress={remainingsignUpUserCreate}>
            <Text style={styles.loginBtn}>Submit</Text>
          </Button>
        </Content>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color: '#727272',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    alignSelf: 'center',
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
