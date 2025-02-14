import styles from './Marquee.module.css'
 
export default function Marquee({ children, className='', scrollDirection='forwards', speed='30s', props }) {
    
  return (
    <div className={`${styles.marqueeWrapper} ${className}`} {...props}>
      <div className={`${styles.marqueeText} ${styles.fadeoutHorizontal}`}>
        <div style={{ '--direction': scrollDirection, '--speed': speed }} className={styles.marqueeTextTrack}>
            {children}
        </div>
      </div>
    </div>
  )
}