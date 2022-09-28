import { Box, Flex, Grid, GridItem, Image, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function HomePage() {
  return (
    <div><Link to="/homepage"></Link>
        <Navbar />
        
            <Box w='100%' bg='#fff0b8' height={"500px"} >

                <Flex alignItems={"center"} gap={100} p={30}>
                    <Box w="40%" height={"400px"} >
                        <h1>Make the best use of your time</h1>
                        <p>TMetric is a smart choice for time tracking to see work in progress and keep team, cost and quality under control</p>
                        

                    </Box>
                    <Box w="45%" height={"400px"} >
                        <img src="https://tmetric.com/media/w53hmkzd/img-video-cover.png" alt="" />
                    </Box>
                </Flex>
            </Box>

            
            <Stack direction='row' justifyContent={"center"} gap={40}>
                <Image
                    boxSize='150px'
                    objectFit='cover'
                    src='https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png'
                    alt='Dan Abramov'
                />
                <Image
                    boxSize='150px'
                    objectFit='cover'
                    src='https://tmetric.com/media/w4mhgaul/time-tracking-software.png'
                    alt='Dan Abramov'
                />
                <Image boxSize='150px' src='https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png' alt='Dan Abramov' />
                <Image boxSize='150px' src='https://tmetric.com/media/c2eewysw/g2_2022_main_page.png' alt='Dan Abramov' />
                <Image boxSize='150px' src='https://tmetric.com/media/a00doqsb/icon-customer-rating.png' alt='Dan Abramov' />
                <Image boxSize='150px' src='https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png' alt='Dan Abramov' />
                <Image boxSize='150px' src='https://tmetric.com/media/jfxavlps/getapp-logotype.svg' alt='Dan Abramov' />
            </Stack>
            
        
    </div>
  )
}

export default HomePage