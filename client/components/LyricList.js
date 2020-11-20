import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const LyricList = ({ lyrics, mutate }) => {
  const onLike = (id) => {
    mutate({
      variables: { id },
    });
  };

  return (
    <ul className='collection'>
      {lyrics.map(({ id, content, likes }) => (
        <li key={id} className='collection-item'>
          {content}
          <div className='vote-box'>
            <i className='material-icons' onClick={() => onLike(id)}>
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      ))}
    </ul>
  );
};

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
