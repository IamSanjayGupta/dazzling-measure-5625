import React from 'react'
import { Box, Button, Flex, HStack  } from '@chakra-ui/react'
//import {ChevronDownIcon} from "react-icons"
import { BiChevronDown } from 'react-icons/bi'
import { BsGlobe2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  //const navigate = useNavigate()
  return (
    
      
        <Flex alignItems={"center"} bg='#fff0b8'  p={15} color='white' height={40}>

            <HStack spacing='24px'>
                <Box cursor={"pointer"}>
                <img  w='200px' h='50px'
                 src="https://tmetric.com/images/tmetric_logo_with_text.svg" alt="logo1" />
                </Box>

                <Button color="black" size='sm' cursor={"pointer"} w='70px' bg='#fff0b8' 
                    h='40px' border={"1px solid grey"} borderRadius={10} fontSize={17}><BsGlobe2 />
              EN
            </Button>
            </HStack>

            
          <HStack ml={200} gap={20}>
            <Box as='button' bg='#fff0b8' color='black' px={6} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
               Why TMetric <BiChevronDown />
            </Box>
            <Box as='button' bg='#fff0b8' color='black' px={6} h={"50px"} fontSize={"17px"} w={"auto"} border="none" cursor={"pointer"}>
              Apps & Integrations <BiChevronDown />
            </Box>
            <Link to="/price">
            <Box as='button' bg='#fff0b8' color='black' px={6} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
              Pricing
            </Box>
            </Link> 
            <Link to="/support">
            <Box as='button' bg='#fff0b8' color='black' px={6} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
              Support 
            </Box>
            </Link>
            <Link to="/blog">
            <Box as='button' bg='#fff0b8' color='black' px={6} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
              Blog 
            </Box>
            </Link>
          </HStack>

          <HStack ml={"200px"} gap={"20px"}>
          <Link to="/login">
            <Box as='button' bg='#fff0b8' color='black' px={6} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
              Log In 
            </Box>
            </Link>
            <Link to="/signup">
            <Box as='button' w="100px" bg='#fff0b8' color='blue' px={6} h={"50px"} fontSize={"17px"} border={"1px solid blue"} borderRadius={"5px"} cursor={"pointer"} _hover={{ bg: "blue", color: " white" }}>
              Sign Up 
            </Box>
            </Link>
          </HStack>



            </Flex>
      
    
  )
}

export default Navbar