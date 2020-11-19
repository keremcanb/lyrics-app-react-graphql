import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const LyricList = ({ lyrics }) => {
  return (
    <div>
      <ul className='collection'>
        {lyrics.map(({ id, content }) => {
          return (
            <li key={id} className='collection-item'>
              {content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LyricList;
// export default graphql(mutation)(LyricList);
