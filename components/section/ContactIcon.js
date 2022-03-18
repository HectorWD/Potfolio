import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'


const ContactIcon = ({ children, message,url }) => {
    return (
        <Link href={`${url}`}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            className='flex flex-col items-center justify-center'
        >
            <motion.div >
                {children}
            </motion.div>
            <motion.p
                className='text-center'
            > {message} </motion.p>
        </motion.div>
        </Link>
    )
}

export default ContactIcon