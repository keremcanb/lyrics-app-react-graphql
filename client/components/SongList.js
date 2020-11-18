import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import { Link } from 'react-router-dom';
// import query from '../queries/fetchSongs';

const SongList = ({ data: { songs, loading } }) => {
  return !loading ? (
    <ul className='collection'>
      {songs.map((song) => {
        return (
          <li key={song.id} className='collection-item'>
            {song.title}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className='progress'>
      <div className='indeterminate'></div>
    </div>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
