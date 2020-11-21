import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

import FETCH_SONG from '../queries/fetchOneSong';

const SongDetail = ({ match }) => {
  return (
    <Query query={FETCH_SONG} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        return !loading ? (
          !error ? (
            <Fragment>
              <Link to='/'>Back</Link>
              <h3>{data.song.title}</h3>
              <LyricList lyrics={data.song.lyrics} />
              <LyricCreate songId={data.song.id} />
            </Fragment>
          ) : (
            <p>Error loading song.</p>
          )
        ) : (
          <div className='progress'>
            <div className='indeterminate'></div>
          </div>
        );
      }}
    </Query>
  );
};

export default SongDetail;
