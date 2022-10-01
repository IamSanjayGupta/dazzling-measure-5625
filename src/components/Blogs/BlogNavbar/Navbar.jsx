import React, { useState } from 'react'
import { background, Box, useDisclosure } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { Checkbox } from '@chakra-ui/react'
import "./Navbar.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    Input,
    FormControl,
} from '@chakra-ui/react';
import HamBurger from './HamBurger';


function Navbar() {
    const [size, setSize] = React.useState('xl')
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [color, setColor] = useState(false)
    // overlay part code
    const OverlayOne = () => (
        <ModalOverlay
            backdropFilter='blur(2px)'
        />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
    return (
        <header className={color ? 'navbar navbar-bg' : 'navbar'} >
            <div className='navbar-lg'>
                <Box className={color ? 'nav nav-bg' : 'nav'} >
                    <Link to="/"></Link>
                    <Link to="/news"> News</Link>
                    <Link to="/productivity"> Productivity </Link>
                    <Link to="/usecases">Use Cases</Link>
                    <Link to="/about">About</Link>
                    <Link to="/guestpost">Guest Post</Link>
                </Box>
                <Box display="flex" justifyContent="space-between"
                    gap={'12px'}
                    // border={"1px solid green"}
                    height={'auto'} >
                    <Button
                        border={"1px solid grey"}
                        bgColor={'white'}
                        borderRadius={"25px"}
                        height={'30px'}
                        textAlign={'center'}
                        margin={'auto'}
                        padding={"1rem 1rem 1rem 1rem"}
                        fontSize={"15px"}
                    >
                        <Link to="/search"><Search2Icon color="brand.150" />{"  "}Search</Link>
                    </Button>
                    <Button
                        onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                        }}
                        // border={"1px solid green"}
                        bgColor={'#3070f0'}
                        textColor={'white'}
                        borderRadius={"25px"}
                        height={'30px'}
                        textAlign={'center'}
                        margin={'auto'}
                        padding={"1rem 1rem 1rem 1rem"}>
                        Subscribe
                    </Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                        size={size}
                    > {overlay}
                        <ModalOverlay />
                        <ModalContent w={"50%"} h={'80vh'}  >

                            <Box
                                width="80%"
                                height={25}
                                m={"auto"}
                            >
                                <ModalHeader fontSize='2xl'>Subscribe to Our Newsletter</ModalHeader>
                                <Text fontSize='lg'> Get all the latest & greatest posts delivered straight to your inbox</Text>
                            </Box>
                            <Box>
                                <ModalBody pb={6}>
                                    <FormControl>
                                        {/* <FormLabel>First name</FormLabel> */}
                                        <Input
                                            placeholder='youremail@example.com'
                                            _placeholder={{ opacity: 1, color: 'gray.450' }}
                                        />
                                        <Checkbox m={"auto"}>I agree to receive your newsletters and accept the data privacy statement.</Checkbox>
                                        <Text fontSize='sm'>You may unsubscribe at any time using the link in our newsletter.</Text>
                                    </FormControl>
                                </ModalBody>
                            </Box>
                            <Box>
                                <ModalFooter>
                                    <Button onClick={onClose} colorScheme='blue' m={'auto'}>Subscribe</Button>
                                </ModalFooter>
                            </Box>
                        </ModalContent>
                    </Modal>
                </Box>
            </div>
            <div className="navbar-md">
                <HamBurger color={color} />
            </div>


        </header >
    )
}

export default Navbar