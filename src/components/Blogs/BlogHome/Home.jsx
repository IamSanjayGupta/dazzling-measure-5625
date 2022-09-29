import { Box } from '@chakra-ui/react'
import React from 'react'
import { GridItem, Grid, Image, Stack, Text, Heading } from '@chakra-ui/react'
import Navbar from '../BlogNavbar/Navbar'
import logoPic from '../blogImage/logo_and_text.svg'
import avatar1 from '../blogImage/avtar1.png'
import Footer from '../BlogNavbar/Footer'
import './Home.css'
import { Link } from "react-router-dom";
import content from '../blog.json'
function Home() {
  return (
    <div
      style={{
        // border: "1px solid blue" 
      }}>

      <Box
        w="100%"
        // border={"2px solid green"}
        height={'100%'}
        bgImage="url('https://blog.tmetric.com/content/images/size/w2000/2022/01/MicrosoftTeams-image--1-.png')"
        bgPosition="top"
        bgRepeat="no-repeat"
        bgSize={'full'}

      >
        <Navbar />
        <Box height={'280'}
          // border={"2px solid blue"}
          padding={'2rem'}
        >
          <Stack
            direction='row'
            margin={'auto'}
            display={'flex'}
            justifyContent={'center'}
            // border={"2px solid green"}
            height={'70'}
            padding={'2rem'}
            alignContent={'center'}
            alignItems={'center'}
          >
            <Image boxSize='280px' padding={'2rem'} src={logoPic} />
          </Stack>
          <Stack
            direction='row'
            display={'flex'}
            justifyContent={'center'}
            // border={"2px solid green"}
            height={'31'}
            width={'100%'}
            alignContent={'center'}
            alignItems={'center'}
            padding={'2rem'}
          >
            <Text
              height={5}
              color={'white'}
              fontWeight={400}
              fontSize={'24'}
              fontStyle={300}
            >Blog to Increase Personal and Business Productivity</Text>
          </Stack>
        </Box>
        <Box
          border={"3px solid black"}
          height={'auto'}
        >
          <Grid
            templateColumns='repeat(2, 1fr)' gap={6}
            marginTop={7}
            padding={'0rem 4rem 0rem 4rem'}
          >
            <GridItem
              w='100%' h='auto'
              border={"2px solid yellow"}
            >
              <Box
                height={'auto'}
                border={"2px solid blue"}
                style={{
                  display: "flex", justifyContent: "space-around",
                  gap: '20px'
                }}>
                <Box
                  border={"2px solid red"}
                  // width={'100%'}
                  borderRadius={10}
                >
                  <Image
                    bgPosition="top"
                    bgRepeat="no-repeat"
                    bgSize={'full'}
                    width={'100%'}
                    height={'300px'}
                    src={'https://blog.tmetric.com/content/images/size/w1000/2022/08/person-looking-at-dashboard.png'} />
                </Box>

              </Box>
            </GridItem>
            <GridItem border={"2px solid blue"}>
              <Box border={"2px solid red"}>
                <Box >
                  <Text>PRODUCTIVITY HACKS</Text>
                  <Heading>The Hands-Down Best Quotes About Productivity</Heading>
                  <Text>It can be difficult to find the time to read through all of the books full of quotable wisdom about productivity and time management. Luckily, we've done the hard work for you, and have compiled the best quotes into one handy list.</Text>
                </Box>
                <Box
                  border={"2px solid red"}
                  style={{
                    display: "flex", justifyContent: 'flex-start',
                    alignContent: "flex-start", gap: '10px',
                    alignItems: 'flex-start'
                  }}>
                  <Box boxSize={50}>
                    <Image src={avatar1} />
                  </Box>
                  <Box
                    border={"2px solid red"}
                    textAlign={'left'}
                  >
                    <Text>Alla Chernets</Text>
                    <Text>Sep 27, 2022 • 5 min read</Text>
                  </Box>
                </Box>
              </Box>

            </GridItem>

            {/*  */}
          </Grid>
          <div className="blog-content-container">
            {content.map((el) => (
              <div className="blog-container" key={el.id}>
                <Link to={`/blog/${el.id}`} style={{ textDecoration: "none" }}>
                  <div className="image-wrap-content">
                    <img src={el.imgUrl} alt="img" />
                  </div>
                  <p className="text-blue text-sm text-bold-md">{el["head-tag"]}</p>
                  <p className="text-lg text-bold">{el.heading}</p>
                  <p className="text-md text-clamp text-gray">{el.description}</p>
                  <div className="blog-content-bottom">
                    <div className="image-author-wrap">
                      <img src={el.authorImg} alt="authorImg" />
                    </div>
                    <div>
                      <p className="text-sm text-bold text-gray">{el.author}</p>
                      <div className="flex">
                        <p className="text-sm text-gray">{el.date}</p>
                        <div className="circle"></div>
                        <p className="text-sm text-gray">{el.read} min read</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Box>
      </Box>
      <Footer />
    </div>
  )
}

export default Home
