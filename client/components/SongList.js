import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

// data prop from react-apollo
const SongList = ({ data, mutate }) => {
  const deleteHandler = (id) => {
    mutate({ variables: { id } }).then(() => data.refetch());
  };

  return !data.loading ? (
    <div>
      <ul className='collection'>
        {data.songs.map(({ id, title }) => {
          return (
            <li key={id} className='collection-item'>
              <Link to={`/songs/${id}`}>{title}</Link>
              <i className='material-icons' onClick={() => deleteHandler(id)}>
                delete
              </i>
            </li>
          );
        })}
      </ul>
      <Link to='/songs/new' className='btn-floating btn-large red right'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  ) : (
    <div className='progress'>
      <div className='indeterminate'></div>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
