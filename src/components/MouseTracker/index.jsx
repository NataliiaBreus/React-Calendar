import React, { useEffect } from 'react';

function MouseTracker() {
  const [x, setX] = useState(0);
  const[y, setY] = useState(0);

  useEffect(() =>{
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', )
  })

}