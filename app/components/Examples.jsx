import React from 'react';
import {Link} from 'react-router';

const Examples = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Examples component</h1>
      <p>Here are a few locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Homiel'>Homiel, Belarus</Link>
        </li>
        <li>
          <Link to='/?location=Minsk'>Minsk</Link>
        </li>
      </ol>
    </div>
  );
};

export default Examples;
