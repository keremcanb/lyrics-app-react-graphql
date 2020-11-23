import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { TextInput } from 'react-materialize';
import FETCH_SONGS from '../graphql/queries/fetchSongs';
import ADD_SONG from '../graphql/mutations/addSong';

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
      <h3>Create New Song</h3>

      <form onSubmit={addSongHandler}>
        <TextInput
          label='Song Title:'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          s={12}
        />
      </form>

      <Link to='/'>Back</Link>
    </>
  );
};

export default SongCreate;
