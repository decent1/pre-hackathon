import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';

import Logo from '../component/logo';

export default function LoginPage({navigation}) {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const createUser = () => {
    let object = {email, password};
    // console.log(object)

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace('myTabs');
        alert('User signed in!');
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
  };

  return (
    <Container>
      <View style={styles.Heading}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{color: 'red'}}> Blood </Text>
          <Text style={{color: 'green'}}> Donor</Text>
          <Text style={{color: 'orange'}}> Login </Text>
        </View>
      </View>
      <Logo />
      <ScrollView>
        <Content>
          <Form style={styles.loginForm}>
            <Item fixedLabel style={styles.loginInput}>
              {/* <Label style={{color: 'black' }}>Email :</Label> */}
              <Input
                keyboardType="email-address"
                placeholder="Enter your Email"
                value={email}
                onChangeText={(e) => setemail(e)}
              />
            </Item>
            <Item fixedLabel style={styles.loginInput}>
              {/* <Label style={{color: 'black'}}>Password :</Label> */}
              <Input
                secureTextEntry={true}
                placeholder="Enter your Password"
                value={password}
                onChangeText={(e) => setpassword(e)}
              />
            </Item>
            <Button transparent dark style={styles.Login} onPress={createUser}>
              <Text style={styles.loginBtn}>Login</Text>
            </Button>
            <View style={styles.signUpLink}>
              <Text style={{color: '#FFD700'}}>
                Create New Account
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={{color: '#47d147'}}> SignUp</Text>
                </TouchableOpacity>
              </Text>
            </View>
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
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
  },
  loginBtn: {
    color: '#FFD700',
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
