import React from 'react';
import { Audio } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='loader'>
      <Audio type="Puff" color="$00BFFF" height={550} width={80} />
    </div>
  )
};

export default Loading;