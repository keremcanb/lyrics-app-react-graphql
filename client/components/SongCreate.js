import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

const SongCreate = ({ mutate }) => {
  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Assign value from input to title query var and pass to mutation
    mutate({
      variables: {
        title,
      },
      refetchQueries: [{ query }],
    }).then(() => hashHistory.push('/'));
  };

  return (
    <div>
      <Link to='/'>Back</Link>
      <h3>Create New Song</h3>
      <form onSubmit={submitHandler}>
        <label>Song Title:</label>
        <input onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

// activate mutate props
export default graphql(mutation)(SongCreate);
