import { Box, Heading } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import BlogSearchNav from '../BlogNavbar/BlogSearchNav'
import Footer from '../BlogNavbar/Footer'
import ArrowUp from './ArrowUp'
function Search() {
  const [value, setValue] = useState()
  const handleChange = () => {

  }
  const handleClick = () => {

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
              <Input
                value={value}
                onChange={handleChange}
                placeholder='Enter the search term'
                w={500}
                // m={'auto'}
                position={'relative'}
              />
              <Button
                onClick={handleClick}

                bg='#3070F0' color={'white'} padding={'1rem 1.5rem 1rem 1.5rem'}
                variant='solid'>
                Button
              </Button>
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
