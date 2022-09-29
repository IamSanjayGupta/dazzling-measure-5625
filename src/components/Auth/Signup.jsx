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
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "./signup.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Signup() {

  const [signupdata, setsignupdata] = useState({});
  const navigate = useNavigate();
  async function signInAPI(data){
    console.log("hi")
    try {
      let response = await axios.post(
        "https://authenticator-ven.herokuapp.com/users/signup",
        data
      );
      console.log("hello")
      console.log(response);
      navigate("/login")
    } catch (error) {
      console.log(error);
      console.log("bye");
    }
  };

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setsignupdata({
      ...signupdata,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    signInAPI(signupdata);

  };
  console.log(signupdata);
  return (
    <Container m={"auto"} display={"flex"} maxW={["95%", "85%", "75%", "70%"]}>
      <Box className={styles.signup}>
        <Image
          margin={"auto"}
          src="https://id.tmetric.com/images/tmetric_logo_and_text.svg"
        />
        <Heading
          textAlign={"center"}
          mt={3}
          mb={2}
          size={["xs", "sm", "sm", "md"]}
        >
          Create Your Account
        </Heading>
        <Stack textAlign={"left"}>
          <Box>
            <Text>Name</Text>
            <Input
              name="name"
              type="text"
              onChange={hanldeChange}
              placeholder="Name"
              size="md"
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
            />
          </Box>
          <Box>
            <Text>Password</Text>
            <Input
              name="password"
              type="password"
              onChange={hanldeChange}
              placeholder="Password"
              size="md"
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
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
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
                <Text fontSize={["11px", "13px", "15px", "17px"]}>
                  Sign Up with Google
                </Text>
              </Stack>
            </Button>
            <Button mt={3} variant="outline" width={"100%"}>
              <Stack alignItems={"center"} direction={"row"}>
                <Image
                  boxSize={["22px", "24px", "26px", "28px"]}
                  objectFit="cover"
                  src="https://id.tmetric.com/images/microsoft_logo.svg"
                />
                <Text fontSize={["11px", "13px", "15px", "17px"]}>
                  Sign Up with Microsoft
                </Text>
              </Stack>
            </Button>
            <Button mt={3} variant="outline" width={"100%"}>
              <Stack alignItems={"center"} direction={"row"}>
                <Image
                  boxSize="28px"
                  objectFit="cover"
                  src="https://id.tmetric.com/images/apple_logo.svg"
                />
                <Text fontSize={["11px", "13px", "15px", "17px"]}>
                  Sign Up with Apple
                </Text>
              </Stack>
            </Button>
          </Box>
        </Stack>
        <Text
          fontSize={["11px", "13px", "15px", "17px"]}
          mt={5}
          textAlign={"center"}
        >
          Already have an account? <a href="">Log In</a>
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
