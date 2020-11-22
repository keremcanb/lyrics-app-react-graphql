import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Loader from './Loader';
import FETCH_SONGS from '../queries/fetchSongs';
import DELETE_SONG from '../mutations/deleteSong';

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
        <ul className='collection'>
          {data.songs.map(({ id, title }) => (
            <li key={id} className='collection-item'>
              <Link to={`/songs/${id}`}>{title}</Link>
              <i
                className='material-icons'
                onClick={() => deleteSongHandler(deleteSong, id)}
              >
                delete
              </i>
            </li>
          ))}
        </ul>
        <Link to='/songs/new' className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
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
