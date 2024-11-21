'use client'
import React from "react";
import { useMotionValue, useSpring } from "framer-motion";

const useMousePosition = () => {

  const smoothOptions = { damping: 20, stiffness: 50, mass: 0.5 };
  const prevPosition = React.useRef({ x: 0, y: 0 });
  const scrollOffset = React.useRef(0);
  const mousePosition = {
    x: useSpring(useMotionValue(0), smoothOptions),
    y: useSpring(useMotionValue(0), smoothOptions),
  };

  React.useEffect(() => {
    const updateMouseMove = (ev) => {
      // setMousePosition({ x: ev.clientX, y: ev.clientY });

      prevPosition.current = {
        x: ev.clientX,
        y: ev.clientY,
      };

      mousePosition.x.set(ev.clientX);
      mousePosition.y.set(ev.clientY + scrollOffset.current);
    };
    const updateScroll = (ev) => {
      scrollOffset.current = window.scrollY;

      // setMousePosition({ x: ev.clientX, y: ev.clientY });

      mousePosition.y.set(prevPosition.current.y + scrollOffset.current);
    };

    window.addEventListener("mousemove", updateMouseMove);
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("mousemove", updateMouseMove);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
