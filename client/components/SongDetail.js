import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
// import LyricList from './LyricList';

const SongDetail = ({ data: { song }, params }) => {
  return song ? (
    <div>
      <Link to='/'>Back</Link>
      <h3>{song.title}</h3>
      {/* pass song id to lyric create comp */}
      <LyricCreate songId={params.id} />
    </div>
  ) : (
    <div></div>
  );
};

export default graphql(fetchSong, {
  options: ({ params: { id } }) => {
    return { variables: { id } };
  },
  // options: (props) => {
  //   return { variables: { id: props.params.id } };
  // }
})(SongDetail);
