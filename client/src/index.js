import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-materialize';
import SongList from './screens/SongList';
import SongCreate from './screens/SongCreate';
import SongDetail from './screens/SongDetail';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache({
    dataIdFromObject: (obj) => obj.id
  })
});

const Root = () => (
  <ApolloProvider client={client}>
    <HashRouter>
      <Container>
        <Switch>
          <Route path="/" exact component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Switch>
      </Container>
    </HashRouter>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
