import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';
import React from 'react';
import 'scss/main.scss';
import { client } from 'client';
import type { AppProps } from 'next/app';

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <FaustProvider client={client} pageProps={pageProps}>
//         <Component {...pageProps} />
//       </FaustProvider>
//     </>
//   );
// }
// import '@assets/main.css'
// import '@assets/chrome-bug.css'
// import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import { ManagedUIContext } from '../components/ui/context'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <ManagedUIContext>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ManagedUIContext>
      </FaustProvider>
    </>
  )
}
