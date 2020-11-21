import React, { Fragment } from 'react';
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

const renderLyrics = (lyrics) =>
  lyrics.map(({ id, content, likes }) => (
    <Mutation key={id} mutation={LIKE_LYRIC}>
      {(likeLyric) => (
        <Fragment>
          <li className='collection-item'>
            {content}

            <div className='vote-box'>
              <i
                className='material-icons'
                onClick={() => onLikeLyric(likeLyric, id, likes)}
              >
                thumb_up
              </i>
              {likes}
            </div>
          </li>
        </Fragment>
      )}
    </Mutation>
  ));

const LyricList = ({ lyrics }) => (
  <ul className='collection'>{renderLyrics(lyrics)}</ul>
);

export default LyricList;
