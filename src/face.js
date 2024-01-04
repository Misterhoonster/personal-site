import React, { useState } from 'react';
import wink from './assets/wink.gif'
import face from './assets/face.png'

function FaceIcon() {
  const [gif, setGif] = useState(wink);

  function handleHover() {
    setGif(face)
    setTimeout(() => {
      setGif(wink);
    }, 0)
  }

  return <img src={gif} onClick={handleHover} onMouseEnter={handleHover} alt="winky face" />;
}

export default FaceIcon;