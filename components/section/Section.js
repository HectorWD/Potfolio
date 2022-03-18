import React from 'react'
import { motion } from 'framer-motion'

const Section = ({title,children,type='normal'}) => {
  switch (type) {
    case 'Strong':
      return(
        <motion.div className='px-2 mb-2'
        initial={{opacity:0,x:-20}}
        whileInView={{opacity:1,x:0}}
        transition={{delay:.1}}
        >
       <motion.h2
       className="py-2 my-2 text-2xl font-bold text-slate-700 "
       >{title}
       </motion.h2>
       <motion.p className='text-2xl font-bold tracking-tight text-slate-600'>
         {children}
       </motion.p>
     </motion.div>
      )
    case 'normal':
      return (
        <motion.div className='px-2'
        initial={{opacity:0,x:-20}}
        whileInView={{opacity:1,x:0}}
        transition={{delay:.1}}>
           <motion.h2
           className="py-2 my-2 text-2xl font-bold text-slate-700 "
           >{title}
           </motion.h2>
           <motion.p className='text-xl font-light tracking-wide text-justify text-slate-600'>
             {children}
           </motion.p>
         </motion.div>
      )
    default:
      return null;
  }
  
}

export default Section