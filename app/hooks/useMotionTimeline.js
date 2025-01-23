'use client'
import { useAnimate } from "framer-motion"
import React from "react";

function useMotionTimeline(keyframes, count=1) {
  const mounted = React.useRef(true)
  const [scope, animate] = useAnimate(keyframes, count)
  
  React.useEffect(() => {
    mounted.current = true
    
    handleAnimate()
    
    return () => {
      mounted.current = false
    }
  }, [])
  
  async function processAnimation(animation) {
    if (Array.isArray(animation[0])) {
      await Promise.all(
        animation.map(async a => {
          await processAnimation(a)
        })
      )
    } else {
      await animate(...animation)
    }
  }
  
  async function handleAnimate() {
    for (let i = 0; i < count; i++) {
      for (const animation of keyframes) {
        if (!mounted.current) return;
        
        await processAnimation(animation)
      }
    }
  }
  
  return scope;
}

export default useMotionTimeline;