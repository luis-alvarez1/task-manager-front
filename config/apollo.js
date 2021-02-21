import {ApolloClient} from '@apollo/client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {setContext} from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: Platform.OS == 'ios' ? 'http://localhost:1000' : 'http://10.0.2.2:1000',
});

const authLink = setContext(async (_, {headers}) => {
  const TOKEN_KEY = 'token';
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
