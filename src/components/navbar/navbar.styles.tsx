import { Box, Link as ChakraLink, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CustomTheme } from 'types/theme'

export const NavbarStyles = {
  Container: styled(Box)``,
  Link: styled(ChakraLink)`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }: CustomTheme) => theme!.colors.primary[100]};
  `,
  LinkText: styled(Text)`
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }: CustomTheme) => theme!.colors.primary[100]};
  `,
}
