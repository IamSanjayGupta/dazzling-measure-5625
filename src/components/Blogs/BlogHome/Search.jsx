import { Box, Heading } from '@chakra-ui/layout'
import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from '../BlogNavbar/Footer'
import Navbar from '../BlogNavbar/Navbar'

function Search() {
  const [value, setValue] = useState()


  const handleChange = () => {

  }
  return (
    <div>
      <Navbar />
      <Box 
      border={'1px solid blue'} 
      p={'8rem 10rem 10rem 10rem '} textAlign={'center'}>

        <Box border={'1px solid blue'} >
          <Box>
            <Heading>Search TMetric Blog - Time Tracking Tips and Productivity Hacks
            </Heading>
          </Box>

          <Box display={'flex'} margin={'auto'} >
            <Input
              value={value}
              onChange={handleChange}
              placeholder='Enter the search term'
              // size='20'
              w={500}
            />
            <Button bg='#3070F0' color={'white'} variant='solid'>
              Button
            </Button>
          </Box>
        </Box>


      </Box>
      <Footer />
    </div>
  )
}

export default Search
