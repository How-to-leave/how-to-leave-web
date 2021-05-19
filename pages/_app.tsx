import { createGlobalStyle } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { client } from 'lib/apollo-client'
import global from 'styles/global'

const GlobalStyles = createGlobalStyle`
  ${global}
`

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ApolloProvider>
  )
}

export default MyApp
