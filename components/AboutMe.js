import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
              <chakra.span
                onMouseOver={() => handleHover(`about_${text}`)}
                color="button1"
                cursor="help"
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="textSecondary" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ À propos de moi
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hé! Je m'appelle Kamel, je suis médecin et je suis passionné par ce métier depuis toujours. <br />
              {/* <br /> I really liked to build stuff using{' '}
              <MoreInfo
                text="no-code tools"
                content="I used to make games without code using RPG Maker VX, and build a simple website with blogspot back in primary school."
              />
              back in 2010, and from that, I explored how to code myself,
              fast-forward to today, I do programming in various languages and
              technologies, and had the privilege to worked in a{' '}
              <MoreInfo
                text="B2B Company"
                content={
                  <Image
                    w={306}
                    h={102}
                    src="https://i.imgur.com/2vdHCro.png"
                    alt="linkedin"
                  />
                }
              />
              and a
              <MoreInfo
                text="Recruitment Company"
                content={
                  <Image
                    w={306}
                    h={102}
                    src="https://i.imgur.com/pIW4urk.png"
                    alt="linkedin"
                  />
                }
              />
              I'm interested in building something awesome with code and
              automate tasks with code, currently focused on
              <MoreInfo
                text="Web & Mobile Development,"
                content="Building Web and Mobile Applications using Javascript Frameworks (React, React Native and Next.js)"
              />
              <MoreInfo
                text="Open Source"
                content="I really like the idea of contributing new features to open source projects that can be useful to other people."
              />
              and
              <MoreInfo
                text="Competitive Programming"
                content="Competitive Programming helped me to sharpen my Algorithms and Problem Solving skills."
              />
              <br />
              <br />
              When I'm not coding I play games with my friends, watch some show
              on Netflix, or if the weather's good, play basketball! 🏀 */}
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="/images/dr-mohammed-kamel-gouizi_pic.jpg"
                w={{ base: '600px', lg: '700px' }}
                h={{ base: 'auto', lg: 'auto' }}
                alt="dr-mohammed-kamel-gouizi"
                borderRadius={300}
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
