'use client'
import React from 'react';
import useWindow from '@/app/hooks/use-window';
import styles from './LoadingScreen.module.css'

function LoadingScreen({ curve }) {
  
  // const height = `100vh+${curve}px`
  const { height, width } = useWindow();
  console.log({ height, width })
  
  
  return (
      <div style={{ '--curveHeight': curve }} className={styles.loader}>
        <svg className={styles.svg}>
          <path className={styles.path}/>
        </svg>
      </div>

  )
}

export default LoadingScreen;