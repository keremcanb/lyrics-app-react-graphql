import React from 'react';
import { useMutation } from '@apollo/client';
import { Row, Col, CollectionItem, Collection, Icon } from 'react-materialize';
import LIKE_LYRIC from '../graphql/mutations/likeLyric';

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
    <Row>
      <Collection>
        {lyrics.map(({ id, content, likes }) => (
          <CollectionItem>
            <Col m={10}>{content}</Col>

            <Col m={1}>
              <Icon onClick={() => likeLyricHandler(likeLyric, id, likes)}>
                thumb_up
              </Icon>
            </Col>

            <Col m={1}>{likes}</Col>
          </CollectionItem>
        ))}
      </Collection>
    </Row>
  );
};

export default LyricList;
