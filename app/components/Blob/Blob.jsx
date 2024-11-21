import useMousePosition from "@/app/hooks/use-mouse-position";
import { motion } from 'framer-motion'
import styles from './Blob.module.css'


function Blob() {
  
  const mousePosition = useMousePosition();
  
  return (
    <motion.div 
      className={`bg-gradient-to-tr from-yellow-400 to-green-400 blur-[200px] ${styles.Mouse}`}
      style={{ 
        left: mousePosition.x,
        top: mousePosition.y
      }}
    />
  )
}

export default Blob;