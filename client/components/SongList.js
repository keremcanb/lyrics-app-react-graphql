import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from '../queries/fetchSongs';

const SongList = ({ data: { songs, loading } }) => {
  return !loading ? (
    <div>
      <ul className='collection'>
        {songs.map((song) => {
          return (
            <li key={song.id} className='collection-item'>
              {song.title}
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

// data prop
export default graphql(query)(SongList);
