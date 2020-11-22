import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import Loader from './Loader';
import FETCH_SONG from '../queries/fetchOneSong';

const SongDetail = ({ match }) => {
  const { loading, error, data } = useQuery(FETCH_SONG, {
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
