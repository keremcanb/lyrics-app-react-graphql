import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { TextInput } from 'react-materialize';
import { ADD_LYRIC } from '../graphql/mutations';

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState('');
  const [addLyric] = useMutation(ADD_LYRIC);

  const submitHandler = (e) => {
    e.preventDefault();
    // content from input, songId from song detail
    addLyric({ variables: { content, songId } });
    setContent('');
  };

  return (
    <form onSubmit={submitHandler}>
      <TextInput
        label="Add a Lyric"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </form>
  );
};

export default LyricCreate;
