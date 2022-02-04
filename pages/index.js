import Head from 'next/head'
import Header from '@components/Header'
import Globe from '@components/Globe'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Afrah Rayan Oran</title>
        <meta name='description' content='Afrah Rayan 31 Oran' />
        <meta property='og:title' content='Afrah Rayan Oran' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Click on the location of the Oran's city to be welcome to Afrah Rayan's store" />
      <main>
        <Globe />
      </main>
      <Footer />
    </div>
  )
}
