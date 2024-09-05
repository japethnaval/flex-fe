import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Hide, IconButton, Show } from '@chakra-ui/react'
import { memo } from 'react'
import { NavbarStyles } from './navbar.styles'

export const Navbar = () => (
  <Box
    height={[
      'var(--chakra-header-height-base-positivestring)',
      'var(--chakra-header-height-sm-positivestring)',
      'var(--chakra-header-height-md-positivestring)',
      'var(--chakra-header-height-lg-positivestring)',
    ]}
    boxShadow=" 0 4px 18px rgba(0, 0, 0, 0.04)"
    background="white"
    position={['fixed']}
    zIndex={1400}
    w="100%"
    as="header"
  >
    <NavbarStyles.Container
      display={['flex']}
      maxW="var(--chakra-maxwidthstr)"
      h="100%"
      paddingInline={[
        'var(--chakra-body-paddingInline-base-positivestring)',
        'var(--chakra-body-paddingInline-sm-positivestring)',
        'var(--chakra-body-paddingInline-md-positivestring)',
        'var(--chakra-body-paddingInline-lg-positivestring)',
      ]}
      w="100%"
      marginInline="auto"
      alignItems={['center']}
      paddingBlock={['16px']}
      justifyContent={['flex-end']}
    >
      <Show below="md">
        <IconButton
          colorScheme="gray"
          _focusWithin={{
            background: 'gray.100',
          }}
          icon={<HamburgerIcon />}
          aria-label="hamburger"
        />
      </Show>
      <Hide below="md">
        <Flex alignItems={['center']} gap={['32px']}>
          <NavbarStyles.Link href="/dashboard">Dashboard</NavbarStyles.Link>
          <NavbarStyles.Link href="/">Login</NavbarStyles.Link>
          <NavbarStyles.LinkText>Scholarships</NavbarStyles.LinkText>
          <NavbarStyles.LinkText>About us</NavbarStyles.LinkText>
        </Flex>
      </Hide>
    </NavbarStyles.Container>
  </Box>
)

export default memo(Navbar)
