import React from 'react';
import { Button, Icon } from 'react-materialize';

const Fab = () => {
  return (
    <Button
      className='red'
      fab
      floating
      large
      node='button'
      icon={<Icon>add</Icon>}
    />
  );
};

export default Fab;
