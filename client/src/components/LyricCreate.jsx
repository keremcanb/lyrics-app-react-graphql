import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

import ADD_LYRIC from '../mutations/addLyricToSong';

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState('');

  const onSubmit = (e, mutation) => {
    e.preventDefault();

    mutation({
      variables: {
        content,
        songId,
      },
    });
    setContent('');
  };

  return (
    <Mutation mutation={ADD_LYRIC}>
      {(addLyric) => (
        <form onSubmit={(e) => onSubmit(e, addLyric)}>
          <label>Add a Lyric</label>
          <input
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </form>
      )}
    </Mutation>
  );
};

export default LyricCreate;
