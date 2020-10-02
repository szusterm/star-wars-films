import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {loadCustomFilms} from './services/customFilms';
import 'semantic-ui-css/semantic.min.css';
import {SWAPI_URL} from './constants';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './styles.css';

loadCustomFilms();

export const client = new ApolloClient({
  uri: SWAPI_URL,
  cache: new InMemoryCache()
});

const app = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
