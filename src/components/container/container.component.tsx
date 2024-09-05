/**
 * maxWidth: var(--chakra-maxwidthstr) = 1440px
 */
import { Box, BoxProps } from '@chakra-ui/react'

export const Container = ({ children, ...props }: BoxProps) => (
  <Box
    as="div"
    maxW="var(--chakra-maxwidthstr)"
    w="100%"
    position={['relative']}
    top={[
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
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </Box>
)
