import { animate, motion } from 'framer-motion'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'


const Footer = () => {
  return (
    <motion.div
    className='flex flex-col items-center justify-center w-full h-20 mt-5 bg-slate-600'
    >
        <motion.p className='mb-1 text-xl font-semibold text-white'>Contact Me</motion.p>
        <motion.div className='grid grid-cols-4 gap-2 text-white place-items-center'>
            <Link href={'mailto:hectorwong2110@gmail.com'}>
            <HiOutlineMail className='text-2xl hover:cursor-pointer'/>
            </Link>
            <Link href={'https://www.linkedin.com/in/wongduranhector/'}>
            <AiFillLinkedin className='text-2xl hover:cursor-pointer'/>
            </Link>
            <Link href={'https://twitter.com/HectorWong34'}>
            <AiOutlineTwitter className='text-2xl hover:cursor-pointer'/>
            </Link>
            <Link href={'https://github.com/HectorWD'}>
            <AiOutlineGithub className='text-2xl hover:cursor-pointer'/>
            </Link>
        
        </motion.div>
    </motion.div>
  )
}

export default Footer