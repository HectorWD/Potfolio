import { motion } from 'framer-motion'
import React from 'react'

const InputForm = ({type,placeholder}) => {
    if(type==='mensaje'){
        return(<motion.textarea/>)
    }
  return (
    <motion.input
    type={type}
    placeholder={placeholder}
    className='p-2 m-2 border rounded-sm focus:border-2 focus:border-green-200'
    />
  )
}

export default InputForm