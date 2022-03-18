import Banner from "../components/banner/Banner"
import Section from "../components/section/Section"
import { motion } from "framer-motion"
import Icon from "../components/section/Icon"
import Practices from "../components/section/Practices"

export default function Home() {

  return (
    <>
      <Banner />
      <Section title='About me' type='Strong'>
        I'm Hector Wong, Web developer/ Engineerin in Software
      </Section>
      <Section type='normal'>
        I'm a Web developer with experience building websites and applications.
        I specialize in JavaScript, and have experience working with react in Next.js how framework.
        I always seeking to improve my skills and continue gorwing professionally in order
        to make contributions at the working group i an part of.
      </Section>
      
      <Section title='My skills' >
        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 place-items-center"
        >
          <Icon src='/img/icons/bootstrap-4.svg' alt='Bootstrap' />
          <Icon src='/img/icons/git-bash.svg' alt='Git-bash' />
          <Icon src='/img/icons/github.svg' alt='Github' />
          <Icon src='/img/icons/javascript.svg' alt='JavaScript' />
          <Icon src='/img/icons/mongodb.svg' alt='MongoDB' />
          <Icon src='/img/icons/react.svg' alt='React.js' />
          <Icon src='/img/icons/next-js.svg' alt='Next.js' />
          <Icon src='/img/icons/tailwindcss.svg' alt='Tailwind' />
          <Icon src='/img/icons/chakra-ui.png' alt='Chakra-ui' />
        </motion.div>
      </Section> 
      <Section title={'Good practices that I use when developing a project:'}>
        <motion.div
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <Practices title={'Responsive Design'} src={'/img/practices-icons/responsive.png'} >
          Your site will display properly on any device, including desktop computers, tablets and mobile phones.
          </Practices>
          <Practices title={'Creative Design'} src={'/img/practices-icons/creativity.png'} >
            Searching the best way of create your web site.
          </Practices>
          <Practices title={'Passion for my work'} src={'/img/practices-icons/pasion.png'} >
          I love this work and always I try do the best, search better and intuitive ways of development a web site.
          </Practices>
          <Practices title={'Constant learning'} src={'/img/practices-icons/aprendizaje.png'} >
          Every day I try to learn something new to put it into practice and be able to make my knowledge more complete and useful.
          </Practices>
          
        </motion.div>
      </Section>

    </>
  )
}
