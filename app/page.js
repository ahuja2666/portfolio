import { Box } from '@mui/material'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import LinkedInRecommendations from './components/LinkedInRecommendations'


export default function Home() {
  return (
    <Box component='main'>
      <Main />
      <Projects />
      <LinkedInRecommendations />
      <Skills />
      <AboutMe />
      <Contact />
    </Box>
  )
}
