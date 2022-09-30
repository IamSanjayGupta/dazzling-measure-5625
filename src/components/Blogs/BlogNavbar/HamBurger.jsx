import {
    Box,
    Flex,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700")
        }}
        href={"#"}
    >
        {children}
    </Link>
);

export default function HamBurger() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {/* <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}> */}
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <Box></Box>
                <IconButton
                    size={"lg"}
                    icon={
                        isOpen ? <CloseIcon boxSize="10" /> : <HamburgerIcon boxSize="10" />
                    }
                    aria-label={"Open Menu"}
                    onClick={isOpen ? onClose : onOpen}
                />
            </Flex>

            {isOpen ? (
                <Box pb={4}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
            {/* </Box> */}

            <Box p={4}>Main Content Here</Box>
        </>
    );
}
