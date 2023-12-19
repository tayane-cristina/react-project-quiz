import React from 'react';
import {Link} from 'react-router-dom'

const Back = ( ) => {
  return (
    <div>
      <Link className='back' to="/">back to home</Link>
    </div>
  );
}

export default Back;