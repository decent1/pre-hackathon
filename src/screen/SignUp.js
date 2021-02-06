import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  Title,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Logo from '../component/logo';

 const SignUp = ({ navigation }) => {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [city, setcity] = useState();
  const [address, setaddress] = useState();
  const [mobile, setmobile] = useState();
  const [age, setage] = useState();

  const signUpUserCreate = () => {
    let signUpObject = {
      firstName,
      lastName,
      email,
      password,
      city,
      address,
      mobile,
      age,
    };
    console.log(signUpObject);
    if(email === '' && ' ' || password === '' && ' ' || firstName === '' && ' ' || lastName === '' && ' ' || city === '' && ' ' || address === '' && ' ' || mobile === '' && ' ' ||  age === '' && ' ' ){
      alert('All field required')
    } else {
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        let userID = e.user
        database().ref('/').child(`Create User/${userID.uid}/`).set(signUpObject).then(() => {
            navigation.navigate('medicalReport');
           
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        alert(error);
      });

    }
    
  };

  return (
    <Container>
      <Logo />
      <ScrollView>
        <Content>
          <Form style={styles.loginForm}>
            <Item fixedLabel style={styles.loginInput}>
              <Icon name="user" style={{fontSize: 30, paddingLeft: 7}} />
              <Input
                keyboardType="default"
                placeholder="Enter your First Name"
                value={firstName}
                onChangeText={(e) => setfirstName(e)}
              />
            </Item>
            <Item fixedLabel style={styles.loginInput}>
              <Icon name="user" style={{fontSize: 30, paddingLeft: 7}} />
              <Input
                keyboardType="default"
                placeholder="Enter your Last Name"
                value={lastName}
                onChangeText={(e) => setlastName(e)}
              />
            </Item>
            <Item fixedLabel style={styles.loginInput}>
              <Icon name="envelope-o" style={{fontSize: 30, paddingLeft: 7}} />
              <Input
                keyboardType="email-address"
                placeholder="Enter your Email"
                value={email}
                onChangeText={(e) => setemail(e)}
              />
            </Item>
            <Item fixedLabel style={styles.loginInput}>
              <Icon name="key" style={{fontSize: 30, paddingLeft: 7}} />
              <Input
                secureTextEntry={true}
                placeholder="Enter your Password"
                value={password}
                onChangeText={(e) => setpassword(e)}
              />
            </Item>
            <Item fixedLabel style={styles.loginInput}>
              <Icon name="globe" style={{fontSize: 30, paddingLeft: 7}} />
              <Input
                keyboardType="default"
                placeholder="Enter your City"
                value={city}
                onChangeText={(e) => setcity(e)}
              />
            </Item>
            <Item fixedLabel style={styles.loginInput}>
              <Icon name="map-marker" style={{fontSize: 30, paddingLeft: 7}} />
              <Input
                keyboardType="default"
                placeholder="Enter your Address"
                value={address}
                onChangeText={(e) => setaddress(e)}
              />
            </Item>
            <Item fixedLabel style={styles.loginInput}>
              <Icon name="mobile" style={{fontSize: 30, paddingLeft: 7}} />
              <Input
                keyboardType="number-pad"
                placeholder="Enter your Mobile Number"
                value={mobile}
                onChangeText={(e) => setmobile(e)}
              />
            </Item>
            <Item fixedLabel style={styles.loginInput}>
              <Icon
                name="calendar-check-o"
                style={{fontSize: 30, paddingLeft: 7}}
              />
              <Input
                keyboardType="number-pad"
                placeholder="Enter your Age"
                value={age}
                onChangeText={(e) => setage(e)}
              />
            </Item>
            <Button
              transparent
              dark
              style={styles.Login}
              onPress={signUpUserCreate}>
              <Text style={styles.loginBtn}>Next</Text>
            </Button>
          </Form>
        </Content>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    width: '80%',
    display: 'flex',
    alignSelf: 'center',
    marginTop: 5,
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
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  loginInput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    borderWidth: 100,
    textAlign: 'center',
    padding: 2,
    marginTop: 5,
  },
  signUpLink: {
    alignItems: 'center',
    marginTop: 20,
  },
  Heading: {
    width: 300,
    padding: 20,
    marginTop: 10,
    borderTopLeftRadius: 20,
    alignSelf: 'center',
    borderBottomRightRadius: 20,
    elevation: 10,
  },
});


export default SignUp