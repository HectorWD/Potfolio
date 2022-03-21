import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
import {AiFillGithub} from 'react-icons/ai'
import {MdWebAsset} from 'react-icons/md'

const ProyButton = ({children,url,type}) => {
  return (
    <Link href={url}>
    <a target={'_blank'} className='flex flex-row items-center justify-center px-1 mr-2 duration-75 ease-in border rounded-lg text-md hover:bg-slate-700 hover:text-white'>
       {type=== 'repo' ? <AiFillGithub/>: null} {type=== 'demo' ? <MdWebAsset/>: null}  {children}
    </a>
    </Link>
  )
}

export default ProyButton