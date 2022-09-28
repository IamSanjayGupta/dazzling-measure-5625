import React from 'react'
import { Link, useDisclosure } from '@chakra-ui/react'
import { Search2Icon } from "@chakra-ui/icons";
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
    Input
} from '@chakra-ui/react'
function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)

    return (
        <header>
            <Link to="/"></Link>
            <Link to="/news"> News</Link>
            <Link to="/productivity"> Productivity </Link>
            <Link to="/usecases">Use Cases</Link>
            <Link to="/about">About</Link>
            <Link to="/guestpost">Guest Post</Link>
            <Link to="/about">About</Link>

            <Link to="/search"><Search2Icon color="brand.200" />{"  "}Search</Link>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Subscribe to Our Newsletter</ModalHeader>
                    <ModalBody>
                    Get all the latest & greatest posts delivered straight to your inbox 
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Subscribe
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>










            {/*             
                    <Stack spacing={3}>
                        <Input placeholder='default placeholder' />
                        <Input
                            placeholder='custom placeholder'
                            _placeholder={{ opacity: 1, color: 'gray.500' }}
                        />

                    </Stack> */}



        </header>
    )
}

export default Navbar