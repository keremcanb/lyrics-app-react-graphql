import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import Loader from '../components/Loader';
import FETCH_SONG from '../graphql/queries/fetchOneSong';

const SongDetail = ({ match }) => {
  // take all song info for query and to pass as props to child components
  const { loading, error, data } = useQuery(FETCH_SONG, {
    // take selected song id from url and pass to fetch song mutation variable
    variables: { id: match.params.id },
  });

  return !loading ? (
    !error ? (
      <>
        <h3>{data.song.title}</h3>

        <LyricList lyrics={data.song.lyrics} />

        <LyricCreate songId={data.song.id} />

        <Link to='/'>Back</Link>
      </>
    ) : (
      <p>Error loading song</p>
    )
  ) : (
    <Loader />
  );
};

export default SongDetail;