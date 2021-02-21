import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Root} from 'native-base';
import Login from '../views/Login';
import CrearCuenta from '../views/CrearCuenta';
import Projects from '../views/Projects';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <>
      <Root>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Login',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CrearCuenta"
              component={CrearCuenta}
              options={{
                title: 'Create account',
                headerStyle: {
                  backgroundColor: '#28303B',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Projects"
              component={Projects}
              options={{
                title: 'Projects',
                headerStyle: {
                  backgroundColor: '#28303B',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </>
  );
};
