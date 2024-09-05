import { Box, Input as ChakraInput } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CustomTheme } from 'types/theme'

export const InputStyles = {
  Container: styled(Box)<CustomTheme>`
    flex-direction: column;
    display: flex;
  `,
  Input: styled(ChakraInput)<CustomTheme>`
    box-shadow: ${(props) => props.theme.shadows[100]};
    border: 1px solid ${(props) => props.theme.colors.gray[300]};

    &[aria-invalid='true'] {
      border-color: ${(props) => props.theme.colors.red[200]};
      box-shadow: ${(props) => props.theme.shadows[100]};
    }
  `,
}
