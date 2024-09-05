import { Box } from '@chakra-ui/react'
import { Container } from '@components/container/container.component'
import { Footer } from '@components/footer/footer.component'
import { Navbar } from '@components/navbar/navbar.component'
import { Outlet } from 'react-router-dom'

export const Layout = () => (
  <Box>
    <Navbar />
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </Box>
)

export default Layout
