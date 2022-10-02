import { Collapse, Box, useDisclosure, Text, Img, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export function Showhide(props) {
  const { isOpen, onToggle } = useDisclosure();

  const handleclick = (val) => {
    switch (val) {
      case 1:
        props.setimg("https://tmetric.com/media/e5enfaae/img-advantages.png");
        break;
      case 2:
        props.setimg("https://tmetric.com/media/d2dhexfq/img-advantages-project-management.png");
        break;
      case 3:
        props.setimg("https://tmetric.com/media/b3abexjt/img-advantages-team-management.png");
        break;
      case 4:
        props.setimg("https://tmetric.com/media/nmmhl5l3/img-advantages-invoice.png");
        break;
      case 5:
        props.setimg("https://tmetric.com/media/bpli5hts/img-advantages-reporting.png");
        break;
      case 6:
        props.setimg("https://tmetric.com/media/kuqjgrfl/img-advantages-time-off.png");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Flex
        onClick={() => {
          handleclick(props.si);
          onToggle();
        }}
        style={{ border: "1px solid rgb(226,231,235)", padding: "20px", borderRadius: "20px" }}
      >
        <Img src={props.icon} />
        &nbsp;&nbsp;<b>{props.title}</b>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box p="4" color="rgb(46,68,151)" mt="4" bg="rgb(231,237,252)" rounded="md" shadow="md">
          {props.value}
          <br /> <br />
          <Text fontWeight="bold">
            Learn More <ArrowForwardIcon />
          </Text>
        </Box>
      </Collapse>
    </>
  );
}
