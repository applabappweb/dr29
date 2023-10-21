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
              La vie est le cadeau le plus précieux.
            </Text>
          </Box>
          <Heading
            lineHeight={'95%'}
            fontSize="display"
            // color="textPrimary"
            color="displayColor"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Dr. Mohammed Kamel Gouizi
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
            La santé est notre trésor.
            </Box>{' '}
            Prendre soin de sa santé est essentiel et cela n’est possible qu’avec l’aide de médecins. De nombreux bons médecins dans le monde travaillent très dur pour le bien-être de la société et nous aident à mener une vie plus saine.<br />
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
          Les médecins constituent la pierre angulaire du système de santé d’un pays. On dit que plus le système éducatif d’un pays est établi, plus il dispose de médecins compétents et qualifiés.
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
            <Link href="https://www.facebook.com/profile.php?id=61552610873702" isExternal>
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
