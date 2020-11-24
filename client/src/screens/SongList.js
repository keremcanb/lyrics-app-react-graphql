import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Row, Col, Icon, Container, Button } from 'react-materialize';
import Loader from '../components/Loader';
import Fab from '../components/Fab';
import FETCH_SONGS from '../graphql/queries/fetchSongs';
import DELETE_SONG from '../graphql/mutations/deleteSong';

const SongList = () => {
  // get song id/title and pass to data
  const { loading, error, data, refetch } = useQuery(FETCH_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  const deleteSongHandler = (id) => {
    deleteSong({
      // pass data.song.id to mutation id variable
      variables: { id }
      // rerun fetch songs query
      // refetchQueries: [{ query: FETCH_SONGS }]
    });
    refetch();
  };

  if (loading) return <Loader />;
  if (error) return <div>Error</div>;

  return (
    <Container>
      <h3 className="center">All Songs</h3>

      {data.songs.map(({ id, title }) => (
        <Row key={id}>
          <Col m={11}>
            <Link to={`/songs/${id}`}>{title}</Link>
          </Col>

          <Col m={1}>
            <Button
              className="red"
              node="button"
              floating
              small
              onClick={() => deleteSongHandler(id)}
            >
              <Icon right>delete</Icon>
            </Button>
          </Col>
        </Row>
      ))}

      <Fab />
    </Container>
  );
};

export default SongList;
