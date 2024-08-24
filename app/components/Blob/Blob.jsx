'use client'
import React from 'react';
import useMousePosition from '../../hooks/use-mouse-position';
import styles from './Blob.module.css'

export default function Blob() {
  
  const blobRef = React.useRef(null)
  const mousePosition = useMousePosition()
  
  React.useEffect(() => {
    const scrollY = window.scrollY
    
    blobRef.current.animate({
      top: `${mousePosition.y + scrollY}px`,
      left: `${mousePosition.x}px`
    }, { duration: 5000, fill: 'forwards'})
    
  }, [mousePosition])
  
  
  return (
    <div 
      ref={blobRef}
      className={`absolute -z-10 h-[500px] aspect-square bg-gradient-to-tr from-yellow-400 to-green-400 rounded-full blur-[200px] ${styles.blobStyles}`}
    >
      {mousePosition.x}, {mousePosition.y}
    </div>
  )
}
