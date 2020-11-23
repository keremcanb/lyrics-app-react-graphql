import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import FETCH_SONGS from '../queries/fetchSongs';
import ADD_SONG from '../mutations/addSong';

const SongCreate = ({ history }) => {
  const [title, setTitle] = useState('');
  const [addSong] = useMutation(ADD_SONG);

  const addSongHandler = () => {
    // Assign value from input to title query var and pass to mutation
    addSong({
      variables: { title },
      refetchQueries: [{ query: FETCH_SONGS }],
    });
    history.push('/');
  };

  return (
    <>
      <h3>Create a New Song</h3>
      <form onSubmit={addSongHandler}>
        <label>Song Title:</label>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </form>
      <Link to='/'>Back</Link>
    </>
  );
};

export default SongCreate;
