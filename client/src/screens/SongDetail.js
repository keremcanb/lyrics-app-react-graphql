import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Container } from 'react-materialize';
import LyricCreate from '../components/LyricCreate';
import LyricList from '../components/LyricList';
import Loader from '../components/Loader';
import { FETCH_SONG } from '../graphql/queries';

const SongDetail = ({ match }) => {
  // take all song info for query and to pass as props to child components
  const { loading, error, data } = useQuery(FETCH_SONG, {
    // take selected song id from url and pass to fetch song mutation variable
    variables: { id: match.params.id }
  });

  if (loading) return <Loader />;
  if (error) return <div>Error</div>;

  const { title, lyrics, id } = data.song;

  return (
    <Container>
      <h3 className="center">{title}</h3>

      <LyricList lyrics={lyrics} />

      <LyricCreate songId={id} />

      <div className="center">
        <Link to="/">Back</Link>
      </div>
    </Container>
  );
};

export default SongDetail;
