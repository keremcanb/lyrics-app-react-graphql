import React from 'react';
import { useMutation } from '@apollo/client';
import { Row, Col, Icon, Button } from 'react-materialize';
import { LIKE_LYRIC } from '../graphql/mutations';

const LyricList = ({ lyrics }) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const likeLyricHandler = (id, likes) => {
    likeLyric({
      variables: { id },
      // not clear
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          __typename: 'Lyric',
          id,
          likes
        }
      }
    });
  };

  return lyrics.map(({ id, content, likes }) => (
    <Row key={id}>
      <Col m={10}>{content}</Col>

      <Col m={1}>
        <Button
          className="blue"
          floating
          small
          onClick={() => likeLyricHandler(id, likes + 1)}
        >
          <Icon right>thumb_up</Icon>
        </Button>
      </Col>

      <Col m={1}>{likes}</Col>
    </Row>
  ));
};

export default LyricList;
