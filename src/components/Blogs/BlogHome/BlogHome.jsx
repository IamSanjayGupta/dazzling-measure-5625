import { Box } from '@chakra-ui/react'
import React from 'react'
import { Image, Stack, Text, } from '@chakra-ui/react'
import Navbar from '../BlogNavbar/Navbar'
import logoPic from '../blogImage/logo_and_text.svg'
import Footer from '../BlogNavbar/Footer'
import './Home.css'
import { Link } from "react-router-dom";
import content from '../blog.json'
import './arrowUp.css'
import { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
function BlogHome() {
  const ArrowUp = () => (
    <div style={{ display: visible ? 'inline' : 'none' }}>
      <div className='arrow-up'

      >
        <FaAngleUp onClick={scrollToTop} size={20}
          color={'white'}
          cursor={'pointer'}
        />
      </div>
    </div>
  )
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true)
    }
    else if (scrolled <= 100) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);
  const Data = () => (
    <div className="blog-content-container">
      {content.map((el) => (
        <Link to={`/blog/${el.id}`} style={{ textDecoration: "none" }}>
          <div className="blog-container" key={el.id}>

            <div className="image-wrap-content">
              <img src={el.imgUrl} alt="img" />
            </div>

            <div className="text-wrap-content">
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
            </div>

          </div>
        </Link>
      ))}
    </div>
  )
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
          // border={"3px solid black"}
          height={'auto'}
        >
          <Data />
        </Box>
      </Box>
      <Footer />
      <ArrowUp />
    </div>
  )
}

export default BlogHome
