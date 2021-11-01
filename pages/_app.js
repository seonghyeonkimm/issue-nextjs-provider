import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [client] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
