'use client'
import React from 'react';

function useWindow() {
  const [windowDimensions, setWindowDimensions] = React.useState({
    height: undefined,
    width: undefined
  })
  
  React.useEffect(() => {
    if (!window) return
    
    setWindowDimensions({
      height: window.innerHeight,
      width: window.innerWidth
    })
    
  }, [])
  
  return windowDimensions
}

export default useWindow;