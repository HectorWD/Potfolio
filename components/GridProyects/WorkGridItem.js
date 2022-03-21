import { useState } from 'react'
import { motion } from 'framer-motion'
import ProyButton from '../buttons/ProyButton';

const WorkGridItem = ({ desc, id, title, thumbnail, delay, demo, repo }) => {
    const delayNew = delay / 10;
    const [selected, setSelected] = useState(false)
    const handleClick = (selected) => {
        setSelected(!selected)
        console.log(selected)
    }
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delayNew }}
            layout
            onClick={() => handleClick(selected)}
        >
            <motion.div
                transition={{ type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.03 }}
                className={`flex flex-col w-full my-2 p-1 hover:cursor-pointer border rounded-lg`}
            >
                <motion.div className='relative flex-none w-full h-72'>

                    <motion.img
                        src={thumbnail}
                        alt={title}
                        className='inset-0 block object-cover w-full h-full '
                    />
                    { selected?
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{opacity:.67}}
                            transition={{ delay: .1 }}
                            className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white bg-black'
                        >
                            <motion.h2 className='mb-2 text-2xl font-semibold'>
                                {title}
                            </motion.h2>
                            <motion.p className='mb-4 text-xl font-light text-center'>
                                {desc}
                            </motion.p>
                            <motion.div className='flex flex-row'>
                                <ProyButton url={demo} type='demo'>Demo</ProyButton>
                                <ProyButton url={repo} type='repo'> Repo</ProyButton>
                            </motion.div>
                        </motion.div>:null
                    }
                </motion.div>
            </motion.div>

        </motion.div>
    )
}
/*
<motion.div
                transition={{ type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.03 }}
                className={`flex flex-col w-full my-2 p-1 hover:cursor-pointer border rounded-lg`}
            >
                <motion.div className='relative flex-none w-full h-64'>

                    <motion.img
                        src={thumbnail}
                        alt={title}
                        className='inset-0 block object-cover w-full h-full '
                    />
                    <motion.div
                        initial={{opacity:0}}
                        exit={{opacity:0}}
                        whileHover={{opacity:.65}}
                        transition={{delay:.3}}
                        className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white bg-black'
                    >
                        <motion.h2 className='mb-2 text-2xl font-semibold'>
                            {title}
                        </motion.h2>
                        <motion.p className='mb-4 text-xl font-light text-center'>
                            {desc}
                        </motion.p>
                        <motion.div className='flex flex-row'>
                            <ProyButton url={demo} type='demo'>Demo</ProyButton>
                            <ProyButton url={repo} type='repo'> Repo</ProyButton>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
*/

export default WorkGridItem