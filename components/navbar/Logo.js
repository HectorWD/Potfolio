import { motion } from 'framer-motion'
import React from 'react'
import {AiTwotoneRocket} from 'react-icons/ai'


const Logo = () => {
  return (
    <motion.div
    className="flex items-center justify-center m-1 text-white hover:cursor-pointer"
    >
        <motion.div
        initial={{y:10}}
        animate={{y:0}}
        whileHover={{y:-6, color:'#F06449'}}
        transition={{delay:.1}}
        >
        <AiTwotoneRocket
        className='text-3xl'
        />
        </motion.div>
        <motion.p className='ml-1 text-2xl'>HectorWong</motion.p>
        </motion.div>
  )
}

export default Logo