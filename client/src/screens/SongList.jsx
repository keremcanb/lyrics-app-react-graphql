import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { Row, Col, CollectionItem, Collection, Icon } from 'react-materialize';
import Loader from '../components/Loader';
import Fab from '../components/Fab';
import FETCH_SONGS from '../graphql/queries/fetchSongs';
import DELETE_SONG from '../graphql/mutations/deleteSong';

const SongList = () => {
  const { loading, error, data } = useQuery(FETCH_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  const deleteSongHandler = (mutation, songId) => {
    deleteSong({
      variables: { id: songId },
      refetchQueries: [{ query: FETCH_SONGS }],
    });
  };

  return !loading ? (
    !error ? (
      <>
        <h3>All Songs</h3>

        <Row>
          <Collection>
            {data.songs.map(({ id, title }) => (
              <CollectionItem key={id}>
                <Col m={11}>
                  <Link to={`/songs/${id}`}>{title}</Link>
                </Col>

                <Col m={1}>
                  <Icon onClick={() => deleteSongHandler(deleteSong, id)}>
                    delete
                  </Icon>
                </Col>
              </CollectionItem>
            ))}
          </Collection>
        </Row>

        <Link to='/songs/new'>
          <Fab />
        </Link>
      </>
    ) : (
      <p>Error loading songs</p>
    )
  ) : (
    <Loader />
  );
};

export default SongList;
