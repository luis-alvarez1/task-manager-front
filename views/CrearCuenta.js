import React from 'react';
import {View} from 'react-native';
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

const CrearCuenta = () => {
  return (
    <>
      <Container style={[globals.container, {backgroundColor: '#e84347'}]}>
        <View style={globals.content}>
          <H1 style={globals.title}>Task Manager</H1>

          <Form>
            <Item style={globals.input} inlineLabel last>
              <Input placeholder="Name" />
            </Item>
            <Item style={globals.input} inlineLabel last>
              <Input placeholder="Email" />
            </Item>
            <Item style={globals.input} inlineLabel last>
              <Input placeholder="Password" secureTextEntry={true} />
            </Item>
          </Form>

          <Button style={globals.button} block square>
            <Text style={globals.buttonText}>Create</Text>
          </Button>
        </View>
      </Container>
    </>
  );
};

export default CrearCuenta;
