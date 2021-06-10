import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { createOvermind, createOvermindSSR, rehydrate } from 'overmind'
import { Provider } from 'overmind-react'

import global from 'styles/global'
import fonts from 'styles/fonts'
import theme from 'styles/theme'
import { config } from 'store'

const GlobalStyles = createGlobalStyle`
  ${global}
  ${fonts}
`

export default class MyApp extends App {
  overmind: any
  constructor(props) {
    super(props)

    const mutations = props.pageProps.mutations || []

    if (typeof window !== 'undefined') {
      this.overmind = createOvermind(config)
      this.overmind.actions.pages.changePage(mutations)
    } else {
      this.overmind = createOvermindSSR(config)
      rehydrate(this.overmind.state, mutations)
    }
  }
  componentDidUpdate() {
    this.overmind.actions.pages.changePage(this.props.pageProps.mutations || [])
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider value={this.overmind}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyles />
          <div id="modal-root" />
        </ThemeProvider>
      </Provider>
    )
  }
}
