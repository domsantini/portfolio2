'use client'
import React from 'react'

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0})
  const [scrollY, setScrollY] = React.useState(0)
  
  React.useEffect(() => {
    if (typeof window == undefined) {
      return
    }
    
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('scroll', handleScroll)
    
    function updateMousePosition(event) {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    
    function handleScroll() {
      setScrollY(window.scrollY)
      setMousePosition(prevMP => ({...prevMP, y: prevMP.y + scrollY}))
    }
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition) 
      window.removeEventListener('scroll', handleScroll) 
    }
  }, [])
  
  return mousePosition
}
