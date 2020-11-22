import React from 'react';
import { useMutation } from '@apollo/client';
import LIKE_LYRIC from '../mutations/likeLyric';

const LyricList = ({ lyrics }) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const likeLyricHandler = (mutation, lyricId, likes) => {
    likeLyric({
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

  return (
    <ul className='collection'>
      {lyrics.map(({ id, content, likes }) => (
        <li className='collection-item' key={id}>
          {content}
          <div className='vote-box'>
            <i
              className='material-icons'
              onClick={() => likeLyricHandler(likeLyric, id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LyricList;
