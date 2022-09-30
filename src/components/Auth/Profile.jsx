import { Box, Container, Heading, Stack, Text } from "@chakra-ui/layout";
import {
  Avatar,
  AvatarGroup,
  Image,
  Input,
  Select,
  Switch,
  useMediaQuery,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Profile() {
  const [isLargerThan425] = useMediaQuery('(min-width: 426px)')
  const token = useSelector((store) => store.auth.data.token);
  let [token1, name, email, password] = token?.trim().split(":");
  return (
    <>
      <Container
        m={"auto"}
        border={"2px solid grey"}
        maxW={["95%", "85%", "70%", "60%"]}
      >
        <Heading mb={3}>General</Heading>
        <Box>
          <Text>Profile picture</Text>
          <Stack alignItems={"center"} direction={"row"}>
            <Box>
              <AvatarGroup spacing="1rem">
                <Avatar />
              </AvatarGroup>
            </Box>
            <Stack spacing={0}>
              <Text fontSize={"12px"}>Change profile picture</Text>
              <Text fontSize={"12px"}>
                Upload your photo to help colleagues recognize you.
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Stack spacing={4} textAlign={"left"}>
          <Box>
            <Text>Name</Text>
            <Input value={name} size="md" />
          </Box>
          <Box>
            <Text>Email</Text>
            <Input value={email} size="md" />
          </Box>
          <Box>
            <Text>Interface language</Text>
            <Select placeholder="English">
              <option value="Hindi">Hindi</option>
              <option value="Deutsch">Deutsch</option>
            </Select>
          </Box>
          <Box>
            <Text>Time Zone</Text>
            <Select placeholder="(UTC+05:30) Colombo">
              <option value="(UTC+05:50) India">(UTC+05:50) India</option>
              <option value="(UTC+05:10) US">(UTC+05:10) US</option>
            </Select>
          </Box>
          <Box>
            <Stack
              display={"flex"}
              justifyContent={"space-between"}
              direction={isLargerThan425 ? "row": "column"}
            >
              <Box>
                <Text>Date format</Text>
                <Input
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                />
              </Box>
              <Box>
                <Text>Time format for tracking</Text>
                <Select placeholder="12h">
                  <option value="24h">24h</option>
                </Select>
              </Box>
            </Stack>
          </Box>
          <Stack alignItems={"center"} direction={"row"}>
            <Switch size="md" />
            <Text>Send me email updates</Text>
          </Stack>
          <Stack alignItems={"center"} direction={"row"} spacing={5}>
            <Text>Get new API token</Text>
            <Text>Change password</Text>
          </Stack>
        </Stack>
        <Stack mt={3}>
          <Heading>Calendars</Heading>
          <Box border={"2px solid grey"} p={5}>
            <Stack alignItems={"center"} direction={"row"}>
              <Box>
                <Image
                  boxSize="50px"
                  src="https://app.tmetric.com/images/calendars/icon-google-calendar.svg"
                  alt="Dan Abramov"
                />
              </Box>
              <Stack spacing={0}>
                <Text>Google Calendar</Text>
                <Text color={"rgb(48,112,240)"}>Connect</Text>
              </Stack>
            </Stack>
          </Box>
          <Box border={"2px solid grey"} p={5}>
            <Stack alignItems={"center"} direction={"row"}>
              <Box>
                <Image
                  boxSize="50px"
                  src="https://app.tmetric.com/images/calendars/icon-outlook.svg"
                  alt="Dan Abramov"
                />
              </Box>
              <Stack spacing={0}>
                <Text>Outlook Calendar</Text>
                <Text color={"rgb(48,112,240)"}>Connect</Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
export default Profile;
