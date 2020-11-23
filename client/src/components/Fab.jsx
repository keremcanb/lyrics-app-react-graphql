import React from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const Fab = () => {
  return (
    <Link to="/songs/new">
      <Button
        className="blue"
        fab
        floating
        large
        node="button"
        icon={<Icon>add</Icon>}
      />
    </Link>
  );
};

export default Fab;
