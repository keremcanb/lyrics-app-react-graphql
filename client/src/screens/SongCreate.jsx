import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { TextInput, Container } from 'react-materialize';
import FETCH_SONGS from '../graphql/queries/fetchSongs';
import ADD_SONG from '../graphql/mutations/addSong';

const SongCreate = ({ history }) => {
  const [title, setTitle] = useState('');
  const [addSong] = useMutation(ADD_SONG);

  const addSongHandler = () => {
    // take form value and assign to title state and pass it to mutation variable
    addSong({
      variables: { title },
      refetchQueries: [{ query: FETCH_SONGS }]
    });
    history.push('/');
  };

  return (
    <Container>
      <h3 className="center">Create New Song</h3>

      <form onSubmit={addSongHandler}>
        <TextInput
          label="Song Title:"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>

      <div className="center">
        <Link to="/">Back</Link>
      </div>
    </Container>
  );
};

export default SongCreate;
