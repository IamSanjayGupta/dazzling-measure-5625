import { Box } from '@chakra-ui/react'
import React from 'react'
import { GridItem, Grid, Image, Stack, Heading } from '@chakra-ui/react'
import Navbar from '../BlogNavbar/Navbar'
// import tmetric from ''
function Home() {


  return (
    <div style={{ border: "1px solid blue" }}>

      <Box
        w="100%"
        border={"2px solid green"}
        height={'100%'}
        bgImage="url('https://blog.tmetric.com/content/images/size/w2000/2022/01/MicrosoftTeams-image--1-.png')"
        bgPosition="top"
        bgRepeat="no-repeat"
        bgSize={'full'}


      >
        <Navbar />



        <Box height={'300'}
          border={"2px solid blue"}

        >
          <Stack direction='row'>
            <Image boxSize='200px' src='https://tmetric.com/#_ga=2.220323480.1015807249.1664256999-1861978078.1664256999' />
          </Stack>
          <Stack direction='row'>
            <Heading>Blog to Increase Personal and Business Productivity</Heading>
          </Stack>
        </Box>

        <Box border={"2px solid red"}>
          <Grid
            h='1000px'
            templateRows='repeat(7, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
          >
            <GridItem colSpan={4} bg='papayawhip' >

            </GridItem>
            <GridItem rowSpan={1} bg='tomato' ></GridItem>
            <GridItem colSpan={1} bg='papayawhip' ></GridItem>
            <GridItem colSpan={1} bg='tomato' ></GridItem>
            <GridItem colSpan={1} bg='papayawhip' ></GridItem>
            <GridItem colSpan={1} bg='papayawhip' ></GridItem>
            <GridItem colSpan={1} bg='tomato' ></GridItem>
            <GridItem colSpan={1} bg='papayawhip' ></GridItem>
            <GridItem colSpan={1} bg='papayawhip' ></GridItem>
            <GridItem colSpan={1} bg='tomato' ></GridItem>
          </Grid>
        </Box>


      </Box>

    </div>
  )
}

export default Home
