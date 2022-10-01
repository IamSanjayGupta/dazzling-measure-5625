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
import { Link as ReachLink } from "react-router-dom";
import styles from "./signup.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../redux/authentication/auth.action";

function Login() {
  const [loginCreds, setLoginCreds] = useState({});
  const isAuthenticated = useSelector((store) => store.auth.data.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated);
      navigate("/app");
    }
  }, [isAuthenticated]);
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    dispatch(loginAPI(loginCreds));
  };

  return (
    <Container className={styles.main}>
      <Box className={styles.login}>
        <Image margin={"auto"} src="https://id.tmetric.com/images/tmetric_logo_and_text.svg" />
        <Heading textAlign={"center"} mt={3} mb={5} size={["xs", "sm", "sm", "md"]}>
          Log into TMetric
        </Heading>
        <Stack spacing={4} textAlign={"left"}>
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
            Login
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
                <Text fontSize={["11px", "13px", "15px", "17px"]}>Login with Google</Text>
              </Stack>
            </Button>
            <Button mt={3} variant="outline" width={"100%"}>
              <Stack alignItems={"center"} direction={"row"}>
                <Image
                  boxSize={["22px", "24px", "26px", "28px"]}
                  objectFit="cover"
                  src="https://id.tmetric.com/images/microsoft_logo.svg"
                />
                <Text fontSize={["11px", "13px", "15px", "17px"]}>Login with Microsoft</Text>
              </Stack>
            </Button>
            <Button mt={3} variant="outline" width={"100%"}>
              <Stack alignItems={"center"} direction={"row"}>
                <Image
                  boxSize="28px"
                  objectFit="cover"
                  src="https://id.tmetric.com/images/apple_logo.svg"
                />
                <Text fontSize={["11px", "13px", "15px", "17px"]}>Login with Apple</Text>
              </Stack>
            </Button>
          </Box>
        </Stack>
        <br />
        <hr />
        <Box
          fontSize={["11px", "13px", "15px", "17px"]}
          m="auto"
          mt={5}
          textAlign={"center"}
          display="flex"
          width={"92%"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Text>Can't Log In?</Text>{" "}
          <Text>
            <Link as={ReachLink} to="/signup">
              Sign Up
            </Link>
          </Text>
        </Box>
      </Box>
    </Container>
  );
}
export default Login;
