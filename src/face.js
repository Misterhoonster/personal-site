import React, { useState } from 'react';
import wink from './wink.gif'
import face from './face.png'

function FaceIcon() {
  const [gif, setGif] = useState(wink);

  function handleHover() {
    setGif(face)
    setTimeout(() => {
      setGif(wink);
    }, 0)
  }

  return <img src={gif} onMouseEnter={handleHover} alt="winky face" />;
}

export default FaceIcon;