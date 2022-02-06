import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react'
import { FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
  return (
    <>
      <Stack
        spacing={10} 
        justifyContent="flex-start" 
        alignItems="flex-start"
      >
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Image
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.1)"
              w={{ base: '70px', md: '150px' }}
              position="absolute"
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              zIndex={0}
              alt=""
            ></Image>
            <Text
              color="button1"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Bienvenue!, dans la boutique de-
            </Text>
          </Box>
          <Heading
            color="textPrimary"
            lineHeight={'95%'}
            fontSize="display"
            color="displayColor"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Afrah Rayan d'Oran.
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
          >
            <Box color="displayColor" as="span">
              Produits Patisserie et Emballage.
            </Box>{' '}
            Cadeaux, Bombom, Jouets<br />et beaucoup d'autres gadgets.<br />
            {isLargerThan800
              ? "C'est avec une trés fort grand plaisir nous vous servons."
              : "C'est avec\nune trés fort grand plaisir nous vous servons."}
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            Ce site web est pour présenter notre boutique et également nos produits et nos services.
            <br />
            <Stack isInline spacing={1}>
              <Box>
                Bienvenue.
              </Box>
            </Stack>
          </Text>
        </SlideFade>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href="https://www.facebook.com/Hadimmohamedrayan/" isExternal>
              <Button
                leftIcon={<FaFacebook color="#1b74e4" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick('introduction_github')}
              >
                Facebook
              </Button>
            </Link>
            {/* <Link href="https://linkedin.com/in/abdulrcs" isExternal>
              <Button
                leftIcon={<FaLinkedin color="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick('introduction_linkedin')}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:abdulrcs1@gmail.com" isExternal>
              <Button
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick('introduction_email')}
              >
                Email
              </Button>
            </Link> */}
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}
