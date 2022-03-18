import { motion } from 'framer-motion'
import React from 'react'

const Icon = ({src,alt,message=''}) => {
  return (
    <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      whileHover={{scale:1.1}}
    >
    <motion.img   
      src={src}
      alt={alt}
      className="w-32"
      />
      <motion.p
      className='text-center'
      > {alt} </motion.p>
      </motion.div>
  )
}

export default Icon