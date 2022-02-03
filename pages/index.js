import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
// import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Script src="/assets/js/webgl-globe.js" />
      <Head>
        <title>Afrah Rayan Oran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Afrah Rayan Shop d'Oran" />
        <div className="d-flex">
            <div className="home-hero-container flex-auto">
                <div className="height-full js-webgl-globe globe"></div>
                <div className="stars">
                    <div className="signup-bg-stars"></div>
                    <div className="signup-bg-stars-2"></div>
                    <div className="signup-bg-stars-3"></div>
                </div>
            </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
