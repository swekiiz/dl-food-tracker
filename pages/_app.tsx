import { CacheProvider, EmotionCache, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider as MaterialThemeProvider, StyledEngineProvider } from '@mui/material'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { PageWrapper } from 'views/components/PageWrapper'

import { createEmotionCache } from 'libs/emotion'

import { theme } from 'themes/main'

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache
}

// * Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const CustomApp = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: CustomAppProps) => {
  return (
    <>
      <Head>
        <title>DL Food Tracker</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <MaterialThemeProvider theme={theme}>
            <EmotionThemeProvider theme={theme}>
              <CssBaseline />
              <PageWrapper>
                <Component {...pageProps} />
              </PageWrapper>
            </EmotionThemeProvider>
          </MaterialThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// CustomApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default CustomApp
