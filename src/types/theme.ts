/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { RecursiveObject, ThemeTransitions } from '@chakra-ui/react'

interface ColorHues {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type Theme = {
  borders: RecursiveObject
  breakpoints: Record<string, any>
  colors:
    | {
        [x: string]: ColorHues
      }
    | Record<string, any>
  radii: RecursiveObject
  shadows: RecursiveObject<string>
  sizes: RecursiveObject
  space: RecursiveObject
  transition: ThemeTransitions
  zIndices: RecursiveObject
}

export interface CustomTheme {
  theme?: Theme
}
