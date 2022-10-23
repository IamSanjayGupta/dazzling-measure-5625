import {
  Box,
  Button,
  Checkbox,
  Container,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";

function Signup() {
  const [signupdata, setsignupdata] = useState({});
  const navigate = useNavigate();
  const toast = useToast();
  async function signInAPI(data) {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_TMETRIC_APP_API}/users/signup`,
        data
      );
      toast({
        position: "top-right",
        title: `Signup Successfull`,
        description: "redirecting to login page...",
        status: "success",
        isClosable: true,
      });
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast({
        position: "top-right",
        title: `Account already exists`,
        status: "error",
        isClosable: true,
      });
      console.log(error);
    }
  }

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setsignupdata({
      ...signupdata,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signInAPI(signupdata);
  };
  console.log(signupdata);
  return (
    <Container m={"auto"} mt={5} display={"flex"} maxW={["95%", "85%", "75%", "70%"]}>
      <Box className={styles.signup}>
        <Image margin={"auto"} src="https://id.tmetric.com/images/tmetric_logo_and_text.svg" />
        <Heading textAlign={"center"} mt={3} mb={2} size={["xs", "sm", "sm", "md"]}>
          Create Your Account
        </Heading>
        <Stack textAlign={"left"}>
          <form onSubmit={handleSubmit}>
            <Box>
              <Text>Name</Text>
              <Input
                name="name"
                type="text"
                onChange={hanldeChange}
                placeholder="Name"
                size="md"
                required
              />
            </Box>
            <Box>
              <Text>Email</Text>
              <Input
                name="email"
                type="email"
                onChange={hanldeChange}
                placeholder="Email"
                size="md"
                required
              />
            </Box>
            <Box>
              <Text>Password</Text>
              <Input
                name="password"
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                onChange={hanldeChange}
                placeholder="Password"
                size="md"
                required
              />
            </Box>
            <Checkbox mt={"15px"}>
              <Text fontSize="16px">I accept Terms of Service</Text>
            </Checkbox>
            <Button
              mt={5}
              bg={"rgb(48,112,240)"}
              _hover={{ bg: "rgb(48,112,240)" }}
              color={"white"}
              width={"100%"}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <Box>
            <hr />
          </Box>
          <Box>
            <Button variant="outline" width={"100%"}>
              <Stack alignItems={"center"} direction={"row"}>
                <Image
                  boxSize="28px"
                  objectFit="cover"
                  src="https://id.tmetric.com/images/google_logo.svg"
                />
                <Text fontSize={["11px", "13px", "15px", "17px"]}>Sign Up with Google</Text>
              </Stack>
            </Button>
            <Button mt={3} variant="outline" width={"100%"}>
              <Stack alignItems={"center"} direction={"row"}>
                <Image
                  boxSize={["22px", "24px", "26px", "28px"]}
                  objectFit="cover"
                  src="https://id.tmetric.com/images/microsoft_logo.svg"
                />
                <Text fontSize={["11px", "13px", "15px", "17px"]}>Sign Up with Microsoft</Text>
              </Stack>
            </Button>
            <Button mt={3} variant="outline" width={"100%"}>
              <Stack alignItems={"center"} direction={"row"}>
                <Image
                  boxSize="28px"
                  objectFit="cover"
                  src="https://id.tmetric.com/images/apple_logo.svg"
                />
                <Text fontSize={["11px", "13px", "15px", "17px"]}>Sign Up with Apple</Text>
              </Stack>
            </Button>
          </Box>
        </Stack>
        <Text fontSize={["11px", "13px", "15px", "17px"]} mt={5} textAlign={"center"}>
          Already have an account?{" "}
          <Link as={ReachLink} to="/login">
            Login
          </Link>
        </Text>
      </Box>
      <Box className={styles.mainimg}>
        <Image
          width={"100%"}
          height={"100%"}
          src="https://id.tmetric.com/images/side_image_register.svg"
          alt="Dan Abramov"
        />
      </Box>
    </Container>
  );
}
export default Signup;
