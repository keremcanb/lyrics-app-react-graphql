import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container } from 'react-materialize';
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
      <Container>
        <h3 className='center'>{data.song.title}</h3>

        <LyricList lyrics={data.song.lyrics} />

        <LyricCreate songId={data.song.id} />

        <div className='center'>
          <Link to='/'>Back</Link>
        </div>
      </Container>
    ) : (
      <p>Error loading song</p>
    )
  ) : (
    <Loader />
  );
};

export default SongDetail;
