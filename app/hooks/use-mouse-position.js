"use client";
import React from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });
  
  function handleMouseMove(event) {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    })
  }
    
  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return mousePosition;
}
