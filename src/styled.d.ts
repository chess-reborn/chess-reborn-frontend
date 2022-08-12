// styled.d.ts
import 'styled-components';interface IPalette {
  main: string
  contrastText: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string,
      header: string,
    },
    metrics: {
      text: string,
    }
  }
}