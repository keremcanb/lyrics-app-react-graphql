import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TextInput, Container } from 'react-materialize';
import ADD_LYRIC from '../graphql/mutations/addLyricToSong';

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState('');
  const [addLyric] = useMutation(ADD_LYRIC);

  const submitHandler = () => {
    addLyric({
      variables: {
        content,
        songId,
      },
    });
    setContent('');
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <TextInput
          label='Add a Lyric'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </>
  );
};

export default LyricCreate;
