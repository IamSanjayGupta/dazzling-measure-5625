import { Box, Heading, Text } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import BlogSearchNav from '../BlogNavbar/BlogSearchNav'
import Footer from '../BlogNavbar/Footer'
import ArrowUp from './ArrowUp'
import newsData from "../new.json"
import { v4 as uuid } from "uuid"
function Search() {
  const { articles } = newsData
  const [text, setText] = useState("")
  const [data, setData] = useState([]);
  const [visibility, setVisibility] = useState(false)
  const handleSearch = () => {
    let updatedData = [];
    let updatedText = text.toLowerCase().trim();
    for (let element of articles) {
      if (updatedText !== "" &&
        (
          (element.author && element.author.toLowerCase().includes(updatedText)) ||
          (element.source.name &&
            element.source.name.toLowerCase().includes(updatedText)) ||
          (element.title && element.title.toLowerCase().includes(updatedText)) ||
          (element.description &&
            element.description.toLowerCase().includes(updatedText)) ||
          (element.content && element.content.toLowerCase().includes(updatedText))
        )
      ) {
        updatedData = [...updatedData, element];
      }
    }
    setData(updatedData);
    setVisibility(true)
  };
  const SearchResult = () => {
    console.log(data);
    if (data.length !== 0) {

      return (
        <Box>
          <Heading>Results</Heading>
          <Box>{data?.map((news) => {

            return (
              <Box key={uuid()}>
                <Heading>{news.title}</Heading>
                <Text>{news.description}</Text>
              </Box>
            )
          })}</Box>
        </Box>

      )
    } else {
      return (
        <Box>
          <Heading>Result</Heading>
          <Box>
            No Result Found
          </Box>
        </Box>
      )

    }
  }
  return (
    <div>
      <BlogSearchNav />
      <Box
        border={'1px solid blue'}
        textAlign={'center'}
        padding={'0rem 2.5rem 4rem 2.5rem'}
        marginTop={'140px'}
      >
        <Box
          border={'1px solid red'}
          h={'auto'}
          w={'90%'}
          margin={'auto'}
          textAlign={'center'}

        >
          <Box padding={'2rem 2.5rem 2rem 2.5rem'}>
            <Heading fontSize={55} fontWeight={'bold'}> Search TMetric Blog - Time Tracking Tips and Productivity Hacks
            </Heading>
          </Box>
          <Box>
            <Box
              paddingBottom={20}
              display={'flex'}
              gap={5}
              margin={'auto'}
              width="80%"
              m='auto'
              justifyContent={'center'}
            >
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Enter the search term'
                style={{width:'500px',border:'1px solid grey',borderRadius:'0.5rem', padding:'0 2rem',fontSize:'20px'}}
                // m={'auto'}
                position={'relative'}
              />
              <button
                onClick={handleSearch}
                style={{background:'#3070F0',  color:'white',borderRadius:'0.5rem', padding:'0.3rem 1.5rem 0.3rem 1.5rem' ,fontSize:'22px' }}>
                Search
              </button>
            </Box>
            <Box>
              {
                visibility && <SearchResult />
              }
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
      <ArrowUp />
    </div>
  )
}

export default Search
