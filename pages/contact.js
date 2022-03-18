import React from 'react'
import { motion } from 'framer-motion'
import Section from '../components/section/Section'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import ContactIcon from '../components/section/ContactIcon'
const contact = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center h-screen'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .2 }}
    >
      <Section type='Strong' title={'Contact'}>
        <motion.p>Contact me if you want us work together</motion.p>
        </Section>
        <Section>
        <motion.div className='grid grid-cols-2 gap-4 mt-4'>
          <ContactIcon message={'Mail me'} url={'mailto:hectorwong2110@gmail.com'}>
            <HiOutlineMail className='text-5xl text-red-600'/>
          </ContactIcon>
          <ContactIcon message={'Follow Me'} url={'https://github.com/HectorWD'}>
            <AiOutlineGithub className='text-5xl text-black'/>
          </ContactIcon>
          <ContactIcon message={'Follow Me'} url={'https://twitter.com/HectorWong34'}>
            <AiOutlineTwitter className='text-5xl text-sky-500'/>
          </ContactIcon>
          <ContactIcon message={'Contact Me'} url={'https://www.linkedin.com/in/wongduranhector/'}>
            <AiFillLinkedin className='text-5xl text-sky-700'/>
          </ContactIcon>
        </motion.div>
        </Section>
      
    </motion.div>
  )
}

export default contact