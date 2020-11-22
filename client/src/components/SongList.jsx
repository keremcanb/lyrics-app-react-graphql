import React from 'react';
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

const SongList = () => (
  <Query query={FETCH_SONGS}>
    {({ loading, error, data }) => {
      return !loading ? (
        !error ? (
          <>
            <h3>All Songs</h3>

            <ul className='collection'>
              {data.songs.map(({ id, title }) => (
                <Mutation key={id} mutation={DELETE_SONG}>
                  {(deleteSong) => (
                    <li
                      className='collection-item'
                      // style={{
                      //   display: 'flex',
                      //   justifyContent: 'space-between',
                      // }}
                    >
                      <Link to={`/songs/${id}`}>{title}</Link>

                      <i
                        className='material-icons'
                        style={{ cursor: 'pointer', marginRight: '5px' }}
                        onClick={() => onDeleteSong(deleteSong, id)}
                      >
                        delete
                      </i>
                    </li>
                  )}
                </Mutation>
              ))}
            </ul>

            <Link to='/songs/new' className='btn-floating btn-large red right'>
              <i className='material-icons'>add</i>
            </Link>
          </>
        ) : (
          <p>Error loading songs.</p>
        )
      ) : (
        <div className='progress'>
          <div className='indeterminate' />
        </div>
      );
    }}
  </Query>
);

export default SongList;
