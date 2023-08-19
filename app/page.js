import { Box } from '@mui/material'
import Main from './components/Main'
import Projects from './components/Projects'


export default function Home() {
  return (
    <Box component='main'>
      <Main />
      <Projects />
    </Box>
  )
}
