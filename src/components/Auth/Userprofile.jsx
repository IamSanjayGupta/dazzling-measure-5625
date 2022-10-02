import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  AvatarGroup,
  Avatar,
  AvatarBadge,
  Stack,
  Box,
  Text,
  VStack,
  Divider,
  Link,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../../redux/authentication/auth.action";

function Userprofile({ setOption }) {
  const token = useSelector((store) => store.auth.data.token);
  let [token1, name, email, password] = token?.trim().split(":");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(logoutAPI());
    navigate("/");
  };
  return (
    <Box>
      <Popover placement="left-start">
        <PopoverTrigger>
          <Button px="10">
            <Stack alignItems={"center"} direction={"row"}>
              <Box>
                <AvatarGroup size="sm">
                  <Avatar />
                </AvatarGroup>
              </Box>
              <Box justifyContent="center" py="1">
                <Text fontSize={"14px"}>Name</Text>
                <Text fontSize={"12px"}>{name}</Text>
              </Box>
            </Stack>
          </Button>
        </PopoverTrigger>
        <PopoverContent w={"fit-content"}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody bg={"gray.50"}>
            <Stack spacing={3}>
              <Link fontWeight="semibold" onClick={() => setOption("Profile")}>
                My Profile
              </Link>
              <Divider />
              <Link fontWeight="semibold">WORKSPACES</Link>
              <Divider />
              <Link fontWeight="semibold">Manage WorkSpaces</Link>
              <Divider />
              <Link
                onClick={() => handlelogout()}
                _hover={{ cursor: "pointer" }}
                fontWeight="semibold"
              >
                Log Out
              </Link>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
export default Userprofile;
