import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { NavbarStyles } from '@components/navbar/navbar.styles'

export const Footer = () => (
  <Box
    paddingTop={['48px', '56px']}
    maxW="var(--chakra-maxwidthstr)"
    w="100%"
    position={['relative']}
    marginBlockStart={['32px']}
    paddingBlockStart={[
      'var(--chakra-header-height-base-positivestring)',
      'var(--chakra-header-height-sm-positivestring)',
      'var(--chakra-header-height-md-positivestring)',
      'var(--chakra-header-height-lg-positivestring)',
    ]}
    paddingInline={{
      base: 'var(--chakra-body-paddingInline-base-positivestring)',
      sm: 'var(--chakra-body-paddingInline-sm-positivestring)',
      md: 'var(--chakra-body-paddingInline-md-positivestring)',
      lg: 'var(--chakra-body-paddingInline-lg-positivestring)',
    }}
    marginInline={{
      base: 'unset',
      md: 'auto',
    }}
  >
    <Flex
      direction={['column', 'row']}
      gap={['32px', '0']}
      paddingBottom={['32px', '68px']}
    >
      <Flex direction={['column']} gap={['12px']} flex={['none', '0 0 200px']}>
        <NavbarStyles.LinkText>About Us</NavbarStyles.LinkText>
        <NavbarStyles.LinkText>FAQs</NavbarStyles.LinkText>
        <NavbarStyles.LinkText>Contact us</NavbarStyles.LinkText>
      </Flex>
      <Flex direction={['column']} gap={['12px']} flex={['none', '0 0 200px']}>
        <NavbarStyles.LinkText>Scholarships</NavbarStyles.LinkText>
        <NavbarStyles.LinkText>Programs</NavbarStyles.LinkText>
        <NavbarStyles.LinkText>Become a teacher</NavbarStyles.LinkText>
      </Flex>
    </Flex>
    <Divider borderColor="border.50" orientation="horizontal" />
    <Flex
      alignItems="center"
      paddingTop={['16px', '24px']}
      paddingBottom={['32px', '24px']}
    >
      <Text fontSize="16px">© 2024 MyAwesomeSchool Solutions</Text>
    </Flex>
  </Box>
)
