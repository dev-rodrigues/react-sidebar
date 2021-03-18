import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

export default function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
  )
}

