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
    Stack,
    Input,
    FormControl
} from '@chakra-ui/react'
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('xl')
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)

    return (
        <header className={color ? 'navbar navbar-bg' : 'navbar'}
            style={{
                // display: "flex",
                // justifyContent: "space-between",
                // // border: "2px solid red",
                // padding: "0.5rem 4rem 0.5rem 2rem",
                // gap: "8px",
                // alignContent: "space-between",
                // position: "sticky",
                // top: "0",

            }}
        >
            <Box
                className={color ? 'nav nav-bg' : 'nav'}
                display="flex"
                justifyContent="space-between"
                gap={'15px'}
                border={"1px solid green"}
                alignItems={'center'}
                padding={"0.2rem 1rem 0.2rem 1rem"}
                height={'auto'}
                fontWeight={500}
                color={"white"}
            >
                <Link to="/"></Link>
                <Link to="/news"> News</Link>
                <Link to="/productivity"> Productivity </Link>
                <Link to="/usecases">Use Cases</Link>
                <Link to="/about">About</Link>
                <Link to="/guestpost">Guest Post</Link>
            </Box>
            <Box display="flex" justifyContent="space-between"
                gap={'12px'}
                border={"1px solid green"}
                height={'auto'}

            >
                <Button border={"1px solid green"}
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
                <Button onClick={onOpen}
                    border={"1px solid green"}
                    bgColor={'darkblue'}
                    textColor={'white'}
                    borderRadius={"25px"}
                    height={'30px'}
                    textAlign={'center'}
                    margin={'auto'}
                    padding={"1rem 1rem 1rem 1rem"}

                >Subscribe</Button>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    size={size}
                >
                    <ModalOverlay />
                    <ModalContent w={"50%"} >
                        <Box width="80%" height={32} m={"auto"}>
                            <ModalHeader fontSize='2xl'>Subscribe to Our Newsletter</ModalHeader>
                            <Text fontSize='lg'> Get all the latest & greatest posts delivered straight to your inbox</Text>
                        </Box>
                        <Box>
                            <ModalBody pb={6}>
                                <FormControl>
                                    {/* <FormLabel>First name</FormLabel> */}
                                    <Input ref={initialRef} placeholder='First name' />
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























            {/* <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} size={size} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader m={"auto"}>Subscribe to Our Newsletter</ModalHeader>
                    <ModalBody m={"auto"}>
                        Get all the latest & greatest posts delivered straight to your inbox
                    </ModalBody>
                    <Stack spacing={3}>
                        <Input
                            w={'80%'}
                            m={"auto"}
                            placeholder='custom placeholder'
                            _placeholder={{ opacity: 1, color: 'gray.500' }}
                        />
                        <Checkbox m={"auto"}>I agree to receive your newsletters and accept the data privacy statement.</Checkbox>
                        <Text fontSize='sm'>You may unsubscribe at any time using the link in our newsletter.</Text>
                    </Stack>
                    <ModalFooter>
                        <Button colorScheme='blue' m={"auto"} onClick={onClose}>
                            Subscribe
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> */}














        </header >
    )
}

export default Navbar