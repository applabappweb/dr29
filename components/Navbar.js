import React, { useRef } from 'react'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import useMediaQuery from '../hook/useMediaQuery'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `
  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="white">
          <DrawerCloseButton  color="#040d21"/>
          <DrawerHeader borderBottomWidth="1px">
            <Image src="/images/dr-mohammed-kamel-gouizi.jpg" width={150} height={66} />
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px" color="#040d21">
                  Acceuil
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px" color="#040d21">
                  Produits
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

  return (
    <Box zIndex="99">
      <Slide
        direction="top"
        reverse
        in={true}
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        background="white"
        color="black"
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid red"
          background="white"
        >
          <NextLink href="/" passHref>
            <Text
              cursor="pointer"
              color="#040d21"
              fontWeight="bold"
              fontSize="32px"
            >
              <Image src="/images/dr-mohammed-kamel-gouizi.jpg" width={150} height={66} />
            </Text>
          </NextLink>
          {isLargerThan768 ? (
            <Box color="textSecondary">
              {/* <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" color="#040d21">
                  Accueil
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px" color="#040d21">
                  Produits
                </Button>
              </NextLink>{' '} */}
            </Box>
          ) : (
              // <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} color="#040d21" />
              <></>
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  )
}
