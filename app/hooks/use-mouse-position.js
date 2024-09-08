"use client";
import React from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", updateMousePosition);
    window.addEventListener("scroll", updateMousePosition);

    function updateMousePosition(event) {
      if (window.scrollY) {
        const yPosition = event.clientY + window.scrollY
        
        setMousePosition({ x: event.clientX, y: yPosition });
      } else {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    }

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateMousePosition);
      window.removeEventListener("scroll", updateMousePosition);
    };
  }, []);

  return mousePosition;
}
