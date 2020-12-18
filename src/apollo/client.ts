import {ApolloClient,InMemoryCache,HttpLink} from '@apollo/client'
import URL from '../api/config';


const link=new HttpLink({
    uri:URL
});

const cache=new InMemoryCache();

const client=new ApolloClient({
    link,
    cache
})

export default client;