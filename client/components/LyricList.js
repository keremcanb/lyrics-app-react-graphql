import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const LyricList = ({ lyrics }) => {
  return (
    <ul className='collection'>
      {lyrics.map(({ id, content }) => (
        <li key={id} className='collection-item'>
          {content}
        </li>
      ))}
    </ul>
  );
};

export default LyricList;
// export default graphql(mutation)(LyricList);
