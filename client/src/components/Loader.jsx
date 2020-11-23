import React from 'react';
import { Row, Col, Preloader } from 'react-materialize';

const Loader = () => {
  return (
    <Row>
      <Col m={12}>
        <Preloader active color='blue' flashing={false} size='big' />
      </Col>
    </Row>
  );
};

export default Loader;
