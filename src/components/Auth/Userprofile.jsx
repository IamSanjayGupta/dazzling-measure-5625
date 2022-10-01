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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../../redux/authentication/auth.action";

function Userprofile() {
  const token = useSelector((store) => store.auth.data.token);
  let [token1, name, email, password] = token?.trim().split(":");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(name);
  const handlelogout = () => {
    dispatch(logoutAPI());
    navigate("/");
  };
  return (
    <>
      <Popover placement="left-start">
        <PopoverTrigger>
          <Button>
            <Stack alignItems={"center"} direction={"row"}>
              <Box p={3}>
                <AvatarGroup size="sm">
                  <Avatar />
                </AvatarGroup>
              </Box>
              <Stack>
                <Text fontSize={"12px"}>Name</Text>
                <Text fontSize={"10px"}>{name}</Text>
              </Stack>
            </Stack>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody bg={"gray.200"}>
            <Stack spacing={3}>
              <Text fontWeight="semibold">My Profile</Text>
              <hr style={{ border: "1px solid" }} />
              <Text fontWeight="semibold">WORKSPACES</Text>
              <hr style={{ border: "1px solid" }} />
              <Text fontWeight="semibold">Manage WorkSpaces</Text>
              <hr style={{ border: "1px solid" }} />
              <Text
                onClick={() => handlelogout()}
                _hover={{ cursor: "pointer" }}
                fontWeight="semibold"
              >
                Log Out
              </Text>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
export default Userprofile;
