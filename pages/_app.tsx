import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { client } from 'graphql/apollo-client'
import global from 'styles/global'
import theme from 'styles/theme'

const GlobalStyles = createGlobalStyle`
  ${global}
`

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
