import React from 'react';
import { Mutation } from 'react-apollo';

import LIKE_LYRIC from '../mutations/likeLyric';

const onLikeLyric = (mutation, lyricId, likes) => {
  mutation({
    variables: { id: lyricId },
    optimisticResponse: {
      __typename: 'Mutation',
      likeLyric: {
        __typename: 'Lyric',
        id: lyricId,
        likes: likes + 1,
      },
    },
  });
};

const LyricList = ({ lyrics }) => (
  <ul className='collection'>
    {lyrics.map(({ id, content, likes }) => (
      <Mutation key={id} mutation={LIKE_LYRIC}>
        {(likeLyric) => (
          <li
            className='collection-item'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            {content}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <i
                className='material-icons'
                style={{ cursor: 'pointer', marginRight: '5px' }}
                onClick={() => onLikeLyric(likeLyric, id, likes)}
              >
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        )}
      </Mutation>
    ))}
  </ul>
);

export default LyricList;
