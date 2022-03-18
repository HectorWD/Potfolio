import { motion } from "framer-motion"


const Banner = () => {
    const variantBanner={
        hidden:{opacity:0,y:-10},
        visible:{opacity:1,y:0},
      }
      const variantBannerItems={
        hidden:{opacity:0,x:-10},
        visible:{opacity:1,x:0},
      }
  return (
    <>
    <motion.div
    variants={variantBanner}
    initial='hidden'
    animate='visible'
    transition={{delay:.2}}
    className='flex flex-col items-center justify-center h-screen px-12 md:flex-row bg-slate-700 '
    >
      <motion.img
      src="/img/Perfil.jpeg"
      className="h-64 rounded-lg w-52 md:mr-4"
      />
      <motion.div className="flex flex-col items-center justify-center">
      <motion.h2
      variants={variantBannerItems}
      transition={{delay:.4}}
      className='text-2xl text-justify text-sky-200'
      >Hi! I&apos;m Hector Wong WebDeveloper
      </motion.h2>
      <motion.button
      variants={variantBannerItems}
      whileHover={{scale:1.1}}
      className="px-4 py-2 my-2 font-semibold bg-green-400 rounded md:ml-10 text-slate-700"
      >Download CV
      </motion.button>
      </motion.div>
       
    </motion.div>
   <motion.div
   initial={{opacity:0, x:'-100vh'}}
   animate={{opacity:1, x:0}}
   transition={{delay:.5, duration:.5,}}
   >
     
     
   </motion.div>
    </>
  )
}

export default Banner