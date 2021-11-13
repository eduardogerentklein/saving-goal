import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Saving Goal</title>
      <meta name='description' content="Let's plan your saving goal." />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='shortcut icon' type='image/x-icon' href='/favicon.png' />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
