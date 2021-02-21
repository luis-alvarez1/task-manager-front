import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Button,
  Text,
  H1,
  Input,
  Form,
  Toast,
  Item,
} from 'native-base';
import {globals} from '../styles/globals';
import {gql, useMutation} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

const Login = () => {
  const TOKEN_KEY = 'token';
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const AUTH_USER = gql`
    mutation authUser($input: AuthInput) {
      authUser(input: $input) {
        token
      }
    }
  `;

  const [authUser] = useMutation(AUTH_USER);

  const handleSubmit = async () => {
    if (!email || email === '' || !password || password === '') {
      setToastMessage('All fields are required');
      return;
    }

    try {
      const {data} = await authUser({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      const {token} = data.authUser;

      await AsyncStorage.setItem(TOKEN_KEY, token);

      navigation.navigate('Projects');
    } catch (error) {
      setToastMessage(error.message);
    }
  };

  const showToast = () => {
    Toast.show({
      text: toastMessage,
      buttonText: 'OK',
      duration: 5000,
    });
    setToastMessage(null);
  };

  return (
    <>
      <Container style={[globals.container, {backgroundColor: '#e84347'}]}>
        <View style={globals.content}>
          <H1 style={globals.title}>Task Manager</H1>

          <Form>
            <Item style={globals.input} inlineLabel last>
              <Input
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
              />
            </Item>
            <Item style={globals.input} inlineLabel last>
              <Input
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />
            </Item>
          </Form>

          <Button
            onPress={() => handleSubmit()}
            style={globals.primaryButton}
            block
            square>
            <Text style={globals.buttonText}>Login</Text>
          </Button>

          <Text
            onPress={() => navigation.navigate('CrearCuenta')}
            style={globals.link}>
            Create account
          </Text>
          {toastMessage && showToast()}
        </View>
      </Container>
    </>
  );
};

export default Login;
