import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import ar31 from '../data/data.json'

export default function Dashboard({ projects, articles }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Dr. Mohammed Kamel Gouizi - La vie est le cadeau le plus précieux et la santé est notre trésor.</title>
          <meta name="title" content="Dr. Mohammed Kamel Gouizi - La vie est le cadeau le plus précieux et la santé est notre trésor." />
          <meta name="keywords" content="dr. gouizi, gouizi" />
          <meta
            name="description"
            content="La vie est le cadeau le plus précieux et la santé est notre trésor"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://drmohammedkamelgouizi.netlify.app" />
          <meta
            property="og:title"
            content="Dr. Mohammed Kamel Gouizi - La vie est le cadeau le plus précieux et la santé est notre trésor."
          />
          <meta
            property="og:description"
            content="Produits patisseries et emballage"
          />
          <meta property="og:image" content="https://dr29.vercel.app/dr29cover.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://drmohammedkamelgouizi.netlify.app/" />
          <meta
            property="twitter:title"
            content="Dr. Mohammed Kamel Gouizi - La vie est le cadeau le plus précieux et la santé est notre trésor."
          />
          <meta
            property="twitter:description"
            content="Dr. Mohammed Kamel Gouizi - La vie est le cadeau le plus précieux et la santé est notre trésor."
          />
          <meta
            property="twitter:image"
            content="https://dr29.vercel.app/dr29cover.png"
          />
        </Head>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction />
          <AboutMe />
          {/* <FeaturedProjects projects={projects} />
          <LatestArticle articles={articles} />
          <ContactMe /> */}
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: ar31.projects,
      articles: ar31.articles,
    },
  }
}
