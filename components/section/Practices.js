import { motion } from 'framer-motion'
import React from 'react'
const Practices = ({src,title,children}) => {
  return (
    <motion.div className='flex flex-col items-center justify-center w-full'>
        <motion.img
        src={src}
        className='w-20'
        whileHover={{scale:1.1}}
        />
        <motion.h3 className='font-semibold'> {title} </motion.h3>
        <motion.span className='text-center'>{children}</motion.span>
    </motion.div>
  )
}

export default Practices