import { motion } from 'framer-motion'
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
        <Link
          href={'mailto:hectorwong2110@gmail.com'}
        >
          <a target={'_blank'}>
            <HiOutlineMail className='text-2xl hover:cursor-pointer' />
          </a>
        </Link>
        <Link href={'https://www.linkedin.com/in/wongduranhector/'}>
          <a target={'_blank'}>
          <AiFillLinkedin className='text-2xl hover:cursor-pointer' />
          </a>
        </Link>
        <Link href={'https://twitter.com/HectorWong34'}>
          <a target={'_blank'}>
          <AiOutlineTwitter className='text-2xl hover:cursor-pointer' />
          </a>
        </Link>
        <Link href={'https://github.com/HectorWD'}>
          <a target={'_blank'}>
          <AiOutlineGithub className='text-2xl hover:cursor-pointer' />
          </a>
        </Link>

      </motion.div>
    </motion.div>
  )
}

export default Footer