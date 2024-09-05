import { Link as ChakraLink } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CustomTheme } from 'types/theme'

export const FooterStyles = {
  Link: styled(ChakraLink)`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }: CustomTheme) => theme!.colors.primary[100]};
  `,
}
