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

const CrearCuenta = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const navigation = useNavigation();

  const CREATE_ACCOUNT = gql`
    mutation saveUser($input: UsuarioInput) {
      createUser(input: $input)
    }
  `;

  const [saveUser] = useMutation(CREATE_ACCOUNT);

  const handleSubmit = async () => {
    if (
      !name ||
      name === '' ||
      !email ||
      email === '' ||
      !password ||
      password === ''
    ) {
      setToastMessage('All fields are required');
      return;
    }

    if (password.length < 6) {
      setToastMessage('Password must contain at least 6 characters');
      return;
    }

    try {
      const {data} = await saveUser({
        variables: {
          input: {
            name,
            email,
            password,
          },
        },
      });

      setToastMessage(data.createUser);
      setToastMessage(null);

      navigation.navigate('Login');
    } catch (error) {
      setToastMessage(error.message.replace('GraphQL error:', ''));
      setToastMessage(null);
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
                placeholder="Name"
                onChangeText={(name) => setName(name)}
              />
            </Item>
            <Item style={globals.input} inlineLabel last>
              <Input
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
              />
            </Item>
            <Item style={globals.input} inlineLabel last>
              <Input
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </Item>
          </Form>

          <Button
            onPress={handleSubmit}
            style={globals.primaryButton}
            block
            square>
            <Text style={globals.buttonText}>Create</Text>
          </Button>

          {toastMessage && showToast()}
        </View>
      </Container>
    </>
  );
};

export default CrearCuenta;
