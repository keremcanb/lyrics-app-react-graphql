import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const LyricList = ({ lyrics }) => {
  const onLike = (id) => {
    console.log(id);
  };

  return (
    <ul className='collection'>
      {lyrics.map(({ id, content }) => (
        <li key={id} className='collection-item'>
          {content}
          <i className='material-icons' onClick={() => onLike(id)}>
            thumb_up
          </i>
        </li>
      ))}
    </ul>
  );
};

export default LyricList;
// export default graphql(mutation)(LyricList);
