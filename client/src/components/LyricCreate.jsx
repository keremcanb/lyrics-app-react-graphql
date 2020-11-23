import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import ADD_LYRIC from '../mutations/addLyricToSong';

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState('');
  const [addLyric] = useMutation(ADD_LYRIC);

  const submitHandler = (e) => {
    e.preventDefault();
    addLyric({
      variables: {
        content,
        songId,
      },
    });
    setContent('');
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Add a Lyric</label>
      <input
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </form>
  );
};

export default LyricCreate;
