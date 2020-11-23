import React from 'react';
import { useMutation } from '@apollo/client';
import { Row, Col, Icon, Container } from 'react-materialize';
import LIKE_LYRIC from '../graphql/mutations/likeLyric';

const LyricList = ({ lyrics }) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const likeLyricHandler = (mutation, lyricId, likes) => {
    likeLyric({
      variables: { id: lyricId },
      // not clear
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
    <>
      {lyrics.map(({ id, content, likes }) => (
        <Row key={id}>
          <Col m={10}>{content}</Col>

          <Col m={1}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => likeLyricHandler(likeLyric, id, likes)}
            >
              <Icon>thumb_up</Icon>
            </div>
          </Col>

          <Col m={1}>{likes}</Col>
        </Row>
      ))}
    </>
  );
};

export default LyricList;
