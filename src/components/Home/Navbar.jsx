import React from 'react'
import { Box, Button, Flex, HStack, Image  } from '@chakra-ui/react'
//import {ChevronDownIcon} from "react-icons"
import { BiChevronDown } from 'react-icons/bi'
//import { BsGlobe2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { FaGlobe } from 'react-icons/fa'
//import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  //const navigate = useNavigate()
  return (
    
      //bg='#fff0b8'
        <Flex alignItems={"center"} bg='#fff0b8'  p={1} color='white' position="fixed" zIndex={10} top={0}>

            <HStack spacing='5px'>
                <Box cursor={"pointer"} p={0}>
                <Image  w='500px' height={75}
                 src="https://tmetric.com/images/tmetric_logo_with_text.svg" alt="logo1" />
                </Box>

                <Button color="black" bg='#fff0b8' cursor={"pointer"} w='130px' 
                    h='40px' border={"1px solid grey"} borderRadius={10} fontSize={17}><FaGlobe size={20}/>
              EN
            </Button>
            </HStack>

            
          <HStack ml={150} gap={0} >
            <Box as='button'  color='black' px={0}  w={150} fontSize={"17px"} border="none" cursor={"pointer"} display={"flex"} alignItems={"center"}>
               Why TMetric <BiChevronDown />
            </Box>
            <Box as='button'  color='black' px={0} w={200} h={"50px"} fontSize={"17px"}  border="none" cursor={"pointer"} display={"flex"} alignItems={"center"}>
              Apps & Integrations <BiChevronDown />
            </Box>
            <Link to="/price">
            <Box as='button'  color='black' px={6} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
              Pricing
            </Box>
            </Link> 
            <Link to="/support">
            <Box as='button'  color='black' px={6} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
              Support 
            </Box>
            </Link>
            <Link to="/blog">
            <Box as='button'  color='black' px={6} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
              Blog 
            </Box>
            </Link>
          </HStack>

          <HStack ml={"100px"} gap={"20px"}>
          <Link to="/login">
            <Box as='button'  color='black' w={100} h={"50px"} fontSize={"17px"} border="none" cursor={"pointer"}>
              Log In 
            </Box>
            </Link>
            <Link to="/signup">
            <Box as='button' w="110px"  color='blue' mr={10} px={6} h={"50px"} fontSize={"17px"} border={"1px solid blue"} borderRadius={"5px"} cursor={"pointer"} _hover={{ bg: "blue", color: " white" }}>
              Sign Up 
            </Box>
            </Link>
          </HStack>



            </Flex>
      
    
  )
}

export default Navbar