import React from 'react';
import {globals} from '../styles/globals';
import {StyleSheet} from 'react-native';
import {
  Container,
  Button,
  Text,
  H2,
  Content,
  List,
  ListItem,
  Left,
  Right,
} from 'native-base';
const Projects = () => {
  return (
    <Container style={([globals.container], {backgroundColor: '#E84347'})}>
      <Button square block style={[globals.primaryButton, {marginTop: 30}]}>
        <Text style={globals.buttonText}>New Project</Text>
      </Button>
      <H2 style={globals.subtitle}>Select a Project</H2>
    </Container>
  );
};

export default Projects;
