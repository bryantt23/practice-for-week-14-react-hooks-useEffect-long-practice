import React, { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const msg =
      Number(featherCount) === 0
        ? 'Oh my! Your bird is naked!'
        : `There are ${featherCount} feathers`;
    console.log('Message', size);
    console.log('🚀 ~ file: Message.js ~ line 7 ~ useEffect ~ msg', msg);
    setMessage(msg);
  }, [size, featherCount]);
  return <div className='message medium'>{message}</div>;
}

export default Message;
