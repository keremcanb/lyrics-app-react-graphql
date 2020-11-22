import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';
import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    dataIdFromObject: (obj) => obj.id,
  }),
});

const Root = () => (
  <ApolloProvider client={client}>
    <HashRouter>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={SongList} />
          <Route path='/songs/new' component={SongCreate} />
          <Route path='/songs/:id' component={SongDetail} />
        </Switch>
      </div>
    </HashRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
