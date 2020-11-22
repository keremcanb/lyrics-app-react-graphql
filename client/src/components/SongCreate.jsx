import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import FETCH_SONGS from '../queries/fetchSongs';
import ADD_SONG from '../mutations/addSong';

const SongCreate = ({ history }) => {
  const [title, setTitle] = useState('');

  const onAddSong = (e, mutation) => {
    e.preventDefault();
    mutation({
      variables: { title },
      refetchQueries: [{ query: FETCH_SONGS }],
    }).then(() => history.push('/'));
  };

  return (
    <Mutation mutation={ADD_SONG}>
      {(addSong) => (
        <>
          <Link to='/'>Back</Link>

          <h3>Create a New Song</h3>

          <form onSubmit={(e) => onAddSong(e, addSong)}>
            <label>Song Title:</label>
            <input
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </form>
        </>
      )}
    </Mutation>
  );
};

export default withRouter(SongCreate);
