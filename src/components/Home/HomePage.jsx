import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { CgMail } from "react-icons/cg";
import { FaEnvelope } from "react-icons/fa";
import Fotter from "./Fotter";
import { Showhide } from "./Showhide";

function HomePage() {
  const [img, setimg] = useState("https://tmetric.com/media/e5enfaae/img-advantages.png");
  return (
    <div>
      <Navbar />

      <Box w="100%" bg="#fff0b8" height={"fit-content"} mt={"80px"}>
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent={"space-around"}
          alignItems={"center"}
          p={30}
        >
          <Box w={{ base: "95%", md: "43%" }} height={"400px"}>
            <Heading size="3xl">Make the best use of your time</Heading>
            <Text fontSize={20} mt={5}>
              TMetric is a smart choice for time tracking to see work in progress and keep team,
              cost and quality under control
            </Text>
            <Stack spacing={4} mt={10}>
              <InputGroup>
                <InputLeftAddon
                  bg="white"
                  borderRadius={3}
                  children={<FaEnvelope color="blue" size={25} />}
                />
                <Input
                  height={39}
                  w={400}
                  fontSize={18}
                  border={"1px solid grey"}
                  borderRadius={3}
                  bg="white"
                  type="tel"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Stack>

            <Flex justifyContent={"flex-start"} alignItems={"center"} gap={30} mt={15}>
              <Button
                fontSize={18}
                bg={"blue"}
                color="white"
                borderRadius={5}
                border={"1px solid #e2e7eb"}
                _hover={{ color: "skyblue" }}
              >
                Get Started
              </Button>
              <Text>Fully Functional 30-Day Trial</Text>
            </Flex>
          </Box>
          <Box w={{ base: "95%", md: "43%" }} height={"400px"}>
            <img src="https://tmetric.com/media/w53hmkzd/img-video-cover.png" alt="" />
          </Box>
        </Flex>
      </Box>

      <Stack direction="row" justifyContent={"center"} gap={50} py={30} wrap="wrap">
        <Image
          boxSize="120px"
          objectFit="cover"
          src="https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="120px"
          objectFit="cover"
          src="https://tmetric.com/media/w4mhgaul/time-tracking-software.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="120px"
          src="https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="120px"
          src="https://tmetric.com/media/c2eewysw/g2_2022_main_page.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="120px"
          src="https://tmetric.com/media/a00doqsb/icon-customer-rating.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="120px"
          src="https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png"
          alt="Dan Abramov"
        />
        <Image
          boxSize="120px"
          src="https://tmetric.com/media/jfxavlps/getapp-logotype.svg"
          alt="Dan Abramov"
        />
      </Stack>
      <Divider />
      {/* -------------------------------------------------------------------------------------------------------- */}
      <Box bg="#E2E7E" w="100%" p={10}>
        <Box textAlign={"center"} mb={10} transition="all 0.5s all">
          <Text fontSize={36}>
            <b>What makes TMetric your best business companion</b>
          </Text>
        </Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          padding="15px"
          justifyContent="space-around"
        >
          <Box width={{ base: "100%", md: "65%" }}>
            <img src={img} width={"100%"} alt="Image" srcset="" />
          </Box>
          <Box w={{ base: "100%", md: "30%" }}>
            <Showhide
              si={1}
              setimg={setimg}
              title="Time Tracking"
              icon="https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg"
              value="Capture every task you work on. Take control over time intervals by simple time tracking"
            />
            <br />
            <Showhide
              si={2}
              setimg={setimg}
              title="Project Management"
              icon="https://tmetric.com/media/1niddz51/icon-project-blue.svg"
              value="Create projects, set rates and budgets. Keep tracking of hours spent on tasks and see the project progress at a glance, collaborate easily, keep deadlines and prevent over budgeting"
            />
            <br />
            <Showhide
              si={3}
              setimg={setimg}
              title="Team Management"
              icon="https://tmetric.com/media/2gxihhdu/icon-team-blue.svg"
              value="Measure productivity and activity level of your team, assign tasks in a click, monitor workflow and distribute the workload. Syncs your teams’ work and improves efficiency."
            />
            <br />
            <Showhide
              si={4}
              setimg={setimg}
              title="Billing & Invoicing"
              icon="https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg"
              value="With the accurate billing system, set billable rates and easily create an invoice based on tracked time and expenses, and get paid promptly."
            />
            <br />
            <Showhide
              si={5}
              setimg={setimg}
              title="Reporting"
              icon="https://tmetric.com/media/yoblhiut/icon-reports-blue.svg"
              value="With a flexible reporting system, you have a choice to get insights into your projects and team productivity, analyze incomes and keep costs under control"
            />
            <br />
            <Showhide
              si={6}
              setimg={setimg}
              title="Time Off"
              icon="https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg"
              value="Add a PTO policy for your organization, simply ask for days off, control missed workdays, manage balances and teams attendance hassle-free"
            />
            <br />
          </Box>
        </Flex>
      </Box>

      <Box bg="#f6f7f8" w="100%" p={10}>
        <Flex justify={"center"} direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "40%" }} h={450}>
            <Text fontSize={48}>
              <b>Manage your team effectively</b>
            </Text>
            <UnorderedList mt={5} fontSize={20}>
              <ListItem>timekeeping</ListItem>
              <ListItem>sites and apps monitoring</ListItem>
              <ListItem>activity tracking</ListItem>
              <ListItem>screenshots capturing</ListItem>
              <ListItem>task management</ListItem>
              <ListItem>50+ integrations</ListItem>
              <ListItem>work schedule</ListItem>
            </UnorderedList>
            <Button
              p={7}
              w={150}
              fontSize={18}
              bg={"blue"}
              color="white"
              borderRadius={5}
              border={"1px solid grey"}
              mt={15}
            >
              Start Free Trial
            </Button>
          </Box>
          <Box w={{ base: "100%", md: "50%" }} h={450}>
            <Image
              mt={70}
              src="https://tmetric.com/media/upkh02nn/img-activity-cases.svg"
              alt="ManageImg"
            />
          </Box>
        </Flex>
      </Box>

      <Box bg="white" w="100%" p={10}>
        <Flex gap="10" justify={"space-around"} direction={{ base: "column-reverse", md: "row" }}>
          <Box w={{ base: "100%", md: "50%" }} h={450}>
            <Image
              src="https://tmetric.com/media/hx0j4hno/img-report-cases-svg.svg"
              alt="ManageImg"
              w="100%"
            />
          </Box>
          <Box w={{ base: "100%", md: "40%" }} h={450}>
            <Text fontSize={48}>
              <b>Ensure the profitability of your business</b>
            </Text>
            <UnorderedList mt={5} fontSize={20}>
              <ListItem>project management</ListItem>
              <ListItem>project budgeting</ListItem>
              <ListItem>billing and invoicing</ListItem>
              <ListItem>accurate payroll</ListItem>
              <ListItem>detailed reports</ListItem>
            </UnorderedList>
            <Button
              p={7}
              w={150}
              fontSize={18}
              bg={"blue"}
              color="white"
              borderRadius={5}
              border={"1px solid grey"}
              mt={15}
            >
              Start Free Trial
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box bg="#f6f7f8" w="100%" p={10}>
        <Flex justify={"space-around"} direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "50%" }} h={450}>
            <Text fontSize={48}>
              <b>Monitor attendance and time-off requests</b>
            </Text>
            <UnorderedList mt={5} fontSize={20}>
              <ListItem>flexible time off policy</ListItem>
              <ListItem>time off requests management</ListItem>
              <ListItem>time off calendar</ListItem>
              <ListItem>pto calculations</ListItem>
            </UnorderedList>
            <Button
              p={7}
              w={150}
              fontSize={18}
              bg={"blue"}
              color="white"
              borderRadius={5}
              border={"1px solid grey"}
              mt={15}
            >
              Start Free Trial
            </Button>
          </Box>
          <Box w={{ base: "100%", md: "50%" }} h={450}>
            <Image
              w={800}
              height={500}
              src="https://tmetric.com/media/0sapzfi1/time-off-calendar-case.png"
              alt="ManageImg"
            />
          </Box>
        </Flex>
      </Box>

      <Box p={10}>
        <Flex justify={"space-around"} direction={{ base: "column", md: "row" }}>
          <Box textAlign={"center"}>
            <Text fontSize={48} mt={5}>
              <b>Integration with 50+ popular services</b>
            </Text>
            <Text fontSize={20} mt={5}>
              TMetric integrates with dozens of services, which lets you measure progress and
              activity in any tool you use.
            </Text>
            <Flex justifyContent={"center"} alignItems={"center"} gap={30} mt={5}>
              <Button
                p={7}
                w={150}
                fontSize={18}
                bg={"blue"}
                color="white"
                borderRadius={5}
                border={"1px solid grey"}
                mt={15}
              >
                Start Free Trial
              </Button>
              <Text>Explore All Integrations</Text>
            </Flex>
          </Box>
        </Flex>

        <Box>
          <HStack spacing="24px" display={"flex"} justifyContent={"center"} pt={30}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/cshbmvwf/logo-integration-gsuite.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/fnbggshs/logo-integration-msoffice.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/plvb1mg0/logo-integration-gkeep.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/smflyk5w/logo-integration-github.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/kbrcntmi/logo-integration-excel.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/4aeci1fh/logo-integration-asana.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/caxbzjss/logo-integration-jira.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/dw2nwjwv/logo-integration-gitlab.svg"
                alt=""
              />
            </Box>
          </HStack>

          <HStack spacing="24px" display={"flex"} justifyContent={"center"} pt={50}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/me5ih5eu/logo-integration-gdocs.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/0bzmfrlf/logo-integration-trello.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/sdaj41fi/logo-integration-redmine.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/1xedbfav/logo-integration-zendesk.svg"
                alt=""
              />
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"110px"}
              w="110px"
              p={0}
              bg="white"
              border={"1px solid #e2e7eb"}
              borderRadius={12}
            >
              <Image
                display={"inlineBlock"}
                src="https://tmetric.com/media/n3dmgi1p/logo-integration-wrike.svg"
                alt=""
              />
            </Box>
          </HStack>
        </Box>
      </Box>
      <hr />
      {/* ---------------------------------------------------------------------------------------------- */}
      <Box p={"50px"}>
        <Box textAlign={"center"} mb={25}>
          <Text fontSize={48}>
            <b>Why track time with TMetric</b>
          </Text>
        </Box>

        <HStack alignItems={"center"} justifyContent={"center"} p="4">
          <Box w="60%">
            <Text fontSize={20}>
              We ultimately went with TMetric because it checked a lot of items on our want list.
              It’s both a desktop and web app, and has an API that we were able to integrate with
              our business management software. While that was the biggest selling point, we also
              really like the user interface, the Chrome extension, and built-in integration with
              Jira.
            </Text>
            <HStack justifyContent={"space-between"} mt={20}>
              <Box w={{ base: "90%", md: "200px" }} h="50px">
                <Text>BizStream team</Text>
                <Image
                  src="https://tmetric.com/media/j2klt5pd/img-rating-5.svg"
                  alt="Dan Abramov"
                />
              </Box>
              <Box w="150px" h="50px">
                <Text color={"blue"}>Read Full Story </Text>
              </Box>
            </HStack>
          </Box>
          <Box w="300px">
            <Image
              src="https://tmetric.com/media/hznb1sgs/photo-software-developers.png"
              alt="Dan Abramov"
            />
          </Box>
        </HStack>
        <Stack
          direction="row"
          spacing={"10px"}
          mt={"20px"}
          wrap="wrap"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button variant="ghost" fontSize={20}>
            Software developers
          </Button>
          <Button variant="ghost" fontSize={20}>
            Marketers
          </Button>
          <Button variant="ghost" fontSize={20}>
            Designers
          </Button>
          <Button variant="ghost" fontSize={20}>
            Contractors
          </Button>
          <Button variant="ghost" fontSize={20}>
            Consultants
          </Button>
          <Button variant="ghost" fontSize={20}>
            Freelancers
          </Button>
        </Stack>
      </Box>

      <Box p={10} bg={"#fff2cc"} textAlign={"center"} mt={0}>
        <VStack gap="5">
          <Heading>Read Hundreds of Reviews</Heading>
          <Image mt={5} src="https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg" />
          <Heading mt={5}>4.5 Customer Rating</Heading>
          <Heading mt={5} color={"blue"}>
            242 Reviews
          </Heading>
        </VStack>
      </Box>

      <Box p={10} bg={"#f6f7f8"} textAlign={"center"} mt={0}>
        <Text>
          <b>Used and trusted by 3000+ businesses in the world</b>
        </Text>
        <Flex alignItems={"center"} justifyContent={"center"} mt={50} wrap="wrap">
          <Image src="https://tmetric.com/media/wlmpffzm/logo_business_endygo.png"></Image>
          <Image src="https://tmetric.com/media/0ddgehbk/logo_business_itsyndicate.png"></Image>
          <Image src="https://tmetric.com/media/eozchehq/logo_business_pulso.png"></Image>
          <Image src="https://tmetric.com/media/rmvok0xh/logo_business_050media.png"></Image>
          <Image src="https://tmetric.com/media/ccpn231z/logo-business-jot-digi-tal.svg"></Image>
          <Image src="https://tmetric.com/media/z0fhmi1j/logo-business-freshlab.svg"></Image>
          <Image src="https://tmetric.com/media/xjogm2h2/logo-business-mvad.svg"></Image>
          <Image src="https://tmetric.com/media/nvalaok1/logo_business_swaven.png"></Image>
        </Flex>
      </Box>

      <Box p={20} mt={0}>
        <Text fontSize={48} textAlign={"center"}>
          <b>Why choose TMetric?</b>
        </Text>
        <HStack wrap="wrap" display={"flex"} justifyContent={"center"} mt={20}>
          <Box
            height={220}
            w={{ base: "90%", md: "200px" }}
            p={15}
            bg="white"
            border={"1px solid #e2e7eb"}
            borderRadius={12}
          >
            <Image src="https://tmetric.com/media/zrvmvbl3/icon-straightforward.svg" alt="" />
            <Box height={150} w={150}>
              <Text fontSize={20}>
                <b>The most straightforward time tracking app</b>
              </Text>
            </Box>
          </Box>

          <Box
            height={220}
            w={{ base: "90%", md: "200px" }}
            p={15}
            bg="white"
            border={"1px solid #e2e7eb"}
            borderRadius={12}
          >
            <Image src="https://tmetric.com/media/opdfdo3l/icon-platforms.svg" alt="" />
            <Box height={150} w={180}>
              <Text fontSize={20}>
                <b>Available on all platforms: macOS, Windows, Linux, iOS, and Android</b>
              </Text>
            </Box>
          </Box>

          <Box
            height={220}
            w={{ base: "90%", md: "200px" }}
            p={15}
            bg="white"
            border={"1px solid #e2e7eb"}
            borderRadius={12}
          >
            <Image src="https://tmetric.com/media/igkmpmix/icon-freetrial.svg" alt="" />
            <Box height={150} w={150}>
              <Text fontSize={20}>
                <b>Free plan with basic time tracking for a team up to 5</b>
              </Text>
            </Box>
          </Box>

          <Box
            height={220}
            w={{ base: "90%", md: "200px" }}
            p={15}
            bg="white"
            border={"1px solid #e2e7eb"}
            borderRadius={12}
          >
            <Image src="https://tmetric.com/media/htxfmpoe/icon-reasonableprice.svg" alt="" />
            <Box height={150} w={150}>
              <Text fontSize={20}>
                <b>Reasonable price makes it affordable for anyone</b>
              </Text>
            </Box>
          </Box>

          <Box
            height={220}
            w={{ base: "90%", md: "200px" }}
            p={15}
            bg="white"
            border={"1px solid #e2e7eb"}
            borderRadius={12}
          >
            <Image src="https://tmetric.com/media/0uyowzzu/icon-multilang.svg" alt="" />
            <Box height={150} w={150}>
              <Text fontSize={20}>
                <b>Multilanguage solution</b>
              </Text>
            </Box>
          </Box>
        </HStack>
      </Box>

      <Box p={10} bg={"#41338f"} textAlign={"center"} mt={0}>
        <Text fontSize={48} color={"white"}>
          <b>Make time work for you!</b>
        </Text>
        <Button
          mt={10}
          p={7}
          w={190}
          fontSize={18}
          bg={"white"}
          color="black"
          borderRadius={5}
          border={"1px solid grey"}
        >
          Start Free Trial
        </Button>
        <Text mt={10} fontSize={20} color={"white"}>
          Powered by A software vendor with 20 years of experience.
        </Text>
      </Box>

      <Fotter />
    </div>
  );
}

export default HomePage;