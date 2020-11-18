import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

const SongList = ({ data: { songs, loading }, mutate }) => {
  const deleteHandler = (id) => {
    mutate({ variables: { id } });
  };

  return !loading ? (
    <div>
      <ul className='collection'>
        {songs.map((song) => {
          return (
            <li key={song.id} className='collection-item'>
              {song.title}
              <i
                className='material-icons'
                onClick={() => deleteHandler(song.id)}
              >
                delete
              </i>
            </li>
          );
        })}
      </ul>
      <Link to='/songs/new' className='btn-floating btn-large red right'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  ) : (
    <div className='progress'>
      <div className='indeterminate'></div>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

// data prop
export default graphql(mutation)(graphql(query)(SongList));
