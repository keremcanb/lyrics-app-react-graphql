import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import { Link } from 'react-router-dom';
// import query from '../queries/fetchSongs';

const SongList = ({ data: { songs, loading } }) => {
  const renderSongs = () => {
    return songs.map((song) => {
      return (
        <li key={song.id} className='collection-item'>
          {song.title}
        </li>
      );
    });
  };

  return !loading ? (
    <ul className='collection'>{renderSongs()}</ul>
  ) : (
    <div>Loading...</div>
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
