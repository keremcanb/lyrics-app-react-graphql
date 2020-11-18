import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
// import { Link, hashHistory } from 'react-router-dom';
// import query from '../queries/fetchSongs';

const SongCreate = () => {
  const [title, setTitle] = useState('');

  return (
    <div>
      <h3>Create New Song</h3>
      <form action=''>
        <label>Song Title:</label>
        <input
          onChange={(e) =>
            setTitle({
              title: e.target.value,
            })
          }
        />
      </form>
    </div>
  );
};

export default SongCreate;
// export default graphql(mutation)(SongCreate);
