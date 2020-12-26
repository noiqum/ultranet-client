import {ApolloClient,InMemoryCache,HttpLink} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'
import URL from '../api/config';

const authLink = setContext(() => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
  });

const link=new HttpLink({
    uri:URL,
});

const cache=new InMemoryCache();

const client=new ApolloClient({
    link:authLink.concat(link),
    cache
})

export default client;