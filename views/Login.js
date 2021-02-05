import React from 'react';
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

const Login = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container style={[globals.container, {backgroundColor: '#e84347'}]}>
        <View style={globals.content}>
          <H1 style={globals.title}>Task Manager</H1>

          <Form>
            <Item style={globals.input} inlineLabel last>
              <Input placeholder="Email" />
            </Item>
            <Item style={globals.input} inlineLabel last>
              <Input placeholder="Password" secureTextEntry={true} />
            </Item>
          </Form>

          <Button style={globals.button} block square>
            <Text style={globals.buttonText}>Login</Text>
          </Button>

          <Text
            onPress={() => navigation.navigate('CrearCuenta')}
            style={globals.link}>
            Create account
          </Text>
        </View>
      </Container>
    </>
  );
};

export default Login;
