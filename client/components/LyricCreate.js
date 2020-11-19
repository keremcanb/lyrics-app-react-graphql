import React, { useState } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const LyricCreate = ({ mutate, songId }) => {
  const [content, setContent] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    mutate({
      variables: {
        content,
        songId,
      },
    }).then(() => setContent(''));
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Add a Lyric</label>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
};

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
