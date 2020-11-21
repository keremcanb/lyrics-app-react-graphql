import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';

import FETCH_SONGS from '../queries/fetchSongs';
import DELETE_SONG from '../mutations/deleteSong';

const onDeleteSong = (mutation, songId) => {
  mutation({
    variables: { id: songId },
    refetchQueries: [{ query: FETCH_SONGS }],
  });
};

const renderSongs = ({ songs }) =>
  songs.map(({ id, title }) => (
    <Mutation key={id} mutation={DELETE_SONG}>
      {(deleteSong) => (
        <Fragment>
          <li className='collection-item'>
            <Link to={`/songs/${id}`}>{title}</Link>
            <i
              className='material-icons'
              onClick={() => onDeleteSong(deleteSong, id)}
            >
              delete
            </i>
          </li>
        </Fragment>
      )}
    </Mutation>
  ));

const SongList = () => (
  <Query query={FETCH_SONGS}>
    {({ loading, error, data }) => {
      return !loading ? (
        !error ? (
          <Fragment>
            <h3>All Songs</h3>
            <ul className='collection'>{renderSongs(data)}</ul>
            <Link to='/songs/new' className='btn-floating btn-large red right'>
              <i className='material-icons'>add</i>
            </Link>
          </Fragment>
        ) : (
          <p>Error loading songs.</p>
        )
      ) : (
        <div className='progress'>
          <div className='indeterminate'></div>
        </div>
      );
    }}
  </Query>
);

export default SongList;
