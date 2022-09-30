import { Image, Box, Button } from '@chakra-ui/react'
import React from 'react'
import logo from '../blogImage/tmetric-blog-logo.svg'
// experiment
import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaTwitter, FaFacebook } from 'react-icons/fa';


const SocialButton = ({ children, label, href, }) => {
  return (
    <chakra.button
      // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      bg={'#EBEDF0'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
function Footer() {

  
  return (
    <Box
    // border={'1px solid red'}
      background={'#EBEDF0'}
      padding={'0.5rem 3rem 3rem 3rem'}
      mb={-10}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'7xl'}
        padding={'1rem 2.5rem 0rem 1rem'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={4} textAlign={'center'} alignItems={'center'}>
          <Image
            width={100}
            src={logo}
            alt='logoimage'
          />
          <Text
            textColor={'black'}
            fontWeight={500}
            fontSize={14}
            margin={'auto'}
          > Try TMetric for free © 2022 </Text>
        </Stack>
        <Stack
          direction={'row'}
          spacing={4}
          padding={'1rem 1rem 1rem 1rem'}
        >
          <SocialButton label={'Facebook'} href={'#'} bg={'#EBEDF0'} >
            <FaFacebook size={22} />
          </SocialButton>
          <SocialButton label={'Twitter'} href={'#'}  >
            <FaTwitter size={22} />
          </SocialButton>
        </Stack>
      </Container>

    </Box>
  );
}
export default Footer