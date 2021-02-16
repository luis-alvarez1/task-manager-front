import {ApolloClient} from '@apollo/client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {Platform} from 'react-native';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:
      Platform.OS == 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000',
  }),
});
