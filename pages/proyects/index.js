import { motion } from 'framer-motion'
import WorkGridItem from '../../components/GridProyects/WorkGridItem'

const works = [
  {
    id: 123,
    title: 'Wind-bnb',
    thumbnail: `/img/WindBnb.png`,
    description: 'Web aplication: Next.js, Chakra-ui',
    demo: `https://wind-bnb-two.vercel.app/`,
    repo: 'https://github.com/HectorWD/WindBnb'
  },
  {
    id: `${1234}`,
    title: 'Todo App',
    thumbnail: `/img/TodoApp.png`,
    description: 'Web aplication: Next.js, TailWind',
    demo: `https://todo-app-gold-delta.vercel.app/`,
    repo: 'https://github.com/HectorWD/todo-app'
  },
  {
    id: 12345,
    title: 'QuizApp',
    thumbnail: `/img/QuizApp.png`,
    description: 'Web aplication: Next.js, TailWind',
    demo: `https://quiz-app-nu-five.vercel.app/`,
    repo: 'https://github.com/HectorWD/quizApp'
  },
  {
    id: 123456,
    title: 'WeatherApp',
    thumbnail: `/img/WeatherApp.png`,
    description: 'Web aplication: Next.js, TailWind',
    demo: `https://weather-app-ten-theta.vercel.app/`,
    repo: 'https://github.com/HectorWD/weatherApp'
  },
]
const index = () => {
  return (
    <motion.div className='flex items-center justify-center '>
      <motion.div
        className='grid w-11/12 grid-flow-row grid-cols-1 h-11/12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 pt-14 '
      >
        {works.map((work, index) => (
          <WorkGridItem
            key={work.id}
            desc={work.description}
            id={work.id}
            title={work.title}
            thumbnail={work.thumbnail}
            delay={index}
            demo={work.demo}
            repo={work.repo} />
        ))}

      </motion.div>
    </motion.div>
  )
}

export default index