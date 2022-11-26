import React, { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
  const [message, setMessage] = useState('');
  useEffect(() => {
    console.log(featherCount);
    const msg =
      featherCount > 0
        ? `There are ${featherCount} feathers`
        : 'Oh my! Your bird is naked!';
    console.log('Message', size);
    console.log('🚀 ~ file: Message.js ~ line 7 ~ useEffect ~ msg', msg);
    setMessage(msg);
  }, [size, featherCount]);
  return <div className='message medium'>{message}</div>;
}

export default Message;
