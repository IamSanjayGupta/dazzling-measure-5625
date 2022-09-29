import { Box, Button, Flex, Grid, GridItem, HStack, Image, Input, InputGroup, InputLeftAddon, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { CgMail } from 'react-icons/cg'
import {FaEnvelope}  from "react-icons/fa"

function HomePage() {
  return (
    <div><Link to="/homepage"></Link>
        <Navbar />
        
            <Box w='100%' bg='#fff0b8' height={"500px"} >

                <Flex alignItems={"center"} gap={100} p={30}>
                    <Box w="43%" height={"400px"}>
                        <Text fontSize={60}><b>Make the best use of your time</b></Text>
                        <Text fontSize={20} mt={-30}>TMetric is a smart choice for time tracking to see work in progress and keep team, cost and quality under control</Text>
                        <Stack spacing={4}>
                            <InputGroup>
                            
                                <InputLeftAddon p={7} bg='white' borderRadius={3} children={<FaEnvelope color='blue' size={25} />} />
                                <Input height={35} w={400} fontSize={18} border={"1px solid grey"} borderRadius={3} type='tel' placeholder='Enter your email address' />
                            </InputGroup>
                        </Stack>
                        <Box >
                        <Flex justifyContent={"center"} alignItems={"center"} gap={30} mt={15} >
                        <Button p={10} w={150} fontSize={18} bg={"blue"} color='white' borderRadius={5} border={"1px solid #e2e7eb"} ml={-250} >Get Started</Button>
                        <Text>Fully Functional 30-Day Trial</Text>
                        </Flex>
                        </Box>
                    </Box>
                    <Box w="45%" height={"400px"} >
                        <img src="https://tmetric.com/media/w53hmkzd/img-video-cover.png" alt="" />
                    </Box>
                </Flex>
            </Box>

            
            <Stack direction='row' justifyContent={"center"} gap={50} p={30}>
                <Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png'
                    alt='Dan Abramov'
                />
                <Image
                    boxSize='120px'
                    objectFit='cover'
                    src='https://tmetric.com/media/w4mhgaul/time-tracking-software.png'
                    alt='Dan Abramov'
                />
                <Image boxSize='120px' src='https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png' alt='Dan Abramov' />
                <Image boxSize='120px' src='https://tmetric.com/media/c2eewysw/g2_2022_main_page.png' alt='Dan Abramov' />
                <Image boxSize='120px' src='https://tmetric.com/media/a00doqsb/icon-customer-rating.png' alt='Dan Abramov' />
                <Image boxSize='120px' src='https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png' alt='Dan Abramov' />
                <Image boxSize='120px' src='https://tmetric.com/media/jfxavlps/getapp-logotype.svg' alt='Dan Abramov' />
            </Stack>

            <Box bg='tomato' w='100%' h={500}>

            </Box>

            <Box bg='#f6f7f8' w='100%' h={520}>
                <Flex justify={"center"}>
                    <Box w='40%' h={450}>
                        <Text fontSize={48}><b>Manage your team effectively</b></Text>
                        <UnorderedList mt={-30} fontSize={20}>
                            <ListItem>timekeeping</ListItem>
                            <ListItem>sites and apps monitoring</ListItem>
                            <ListItem>activity tracking</ListItem>
                            <ListItem>screenshots capturing</ListItem>
                            <ListItem>task management</ListItem>
                            <ListItem>50+ integrations</ListItem>
                            <ListItem>work schedule</ListItem>
                        </UnorderedList>
                        <Button p={10} w={150} fontSize={18} bg={"blue"} color='white' borderRadius={5} border={"1px solid grey"} mt={15}>Start Free Trial</Button>

                    </Box>
                    <Box w='50%' h={450}>
                        <Image
                            
                            mt={70}
                            src='https://tmetric.com/media/upkh02nn/img-activity-cases.svg'
                            alt='ManageImg'
                        />
                    </Box>
                </Flex>
            </Box>


            <Box bg='white' w='100%' h={520}>
                <Flex justify={"center"} gap={100}>

                <Box w='50%' h={450} ml={-100}>
                        <Image
                            
                           
                            src='https://tmetric.com/media/hx0j4hno/img-report-cases-svg.svg'
                            alt='ManageImg'
                        />
                    </Box>
                    <Box w='40%' h={450} >
                        <Text fontSize={48}><b>Ensure the profitability of your business</b></Text>
                        <UnorderedList mt={-30} fontSize={20}>
                            <ListItem>project management</ListItem>
                            <ListItem>project budgeting</ListItem>
                            <ListItem>billing and invoicing</ListItem>
                            <ListItem>accurate payroll</ListItem>
                            <ListItem>detailed reports</ListItem>
                            
                        </UnorderedList>
                        <Button p={10} w={150} fontSize={18} bg={"blue"} color='white' borderRadius={5} border={"1px solid grey"} mt={15}>Start Free Trial</Button>

                    </Box>
                    
                </Flex>
            </Box>



            <Box bg='#f6f7f8' w='100%' h={520}>
                <Flex justify={"center"} ml={-100}>
                    <Box w='40%' h={450}>
                        <Text fontSize={48}><b>Monitor attendance and time-off requests</b></Text>
                        <UnorderedList mt={-30} fontSize={20}>
                            <ListItem>flexible time off policy</ListItem>
                            <ListItem>time off requests management</ListItem>
                            <ListItem>time off calendar</ListItem>
                            <ListItem>pto calculations</ListItem>
                            
                        </UnorderedList>
                        <Button p={10} w={150} fontSize={18} bg={"blue"} color='white' borderRadius={5} border={"1px solid grey"} mt={15}>Start Free Trial</Button>

                    </Box>
                    <Box w='40%' h={450}>
                        <Image
                            mt={40}
                            w={800}
                            height={500}
                            src='https://tmetric.com/media/0sapzfi1/time-off-calendar-case.png'
                            alt='ManageImg'
                        />
                    </Box>
                </Flex>
            </Box>


            <Box height={700} >
                <Flex justify={"center"}>
                <Box height={300} textAlign={"center"}>
                    <Text fontSize={48}><b>Integration with 50+ popular services</b></Text>
                    <Text fontSize={20}>TMetric integrates with dozens of services, which lets you measure progress and activity in any tool you use.</Text>
                    <Flex justifyContent={"center"} alignItems={"center"} gap={30}>
                    <Button p={10} w={150} fontSize={18} bg={"blue"} color='white' borderRadius={5} border={"1px solid grey"} mt={15}>Start Free Trial</Button>
                    <Text>Explore All Integrations</Text>
                    </Flex>
                </Box>
                </Flex>

                <Box height={400} >
                <HStack spacing='24px' display={"flex"} justifyContent={"center"} pt={50}>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/cshbmvwf/logo-integration-gsuite.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/fnbggshs/logo-integration-msoffice.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/plvb1mg0/logo-integration-gkeep.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/smflyk5w/logo-integration-github.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/kbrcntmi/logo-integration-excel.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/4aeci1fh/logo-integration-asana.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/caxbzjss/logo-integration-jira.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/dw2nwjwv/logo-integration-gitlab.svg" alt="" />
                    </Box>
                    
                </HStack>

                <HStack spacing='24px' display={"flex"} justifyContent={"center"} pt={50}>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/me5ih5eu/logo-integration-gdocs.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/0bzmfrlf/logo-integration-trello.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/sdaj41fi/logo-integration-redmine.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/1xedbfav/logo-integration-zendesk.svg" alt="" />
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={90} w='100px' p={10}  bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image display={"inlineBlock"} src="https://tmetric.com/media/n3dmgi1p/logo-integration-wrike.svg" alt="" />
                    </Box>
                </HStack>
                </Box>
            </Box>

            <Box height={500} bg={"pink"}>

            </Box>

            <Box height={400} bg={"#fff2cc"} textAlign={"center"} mt={-36}>
                <Text pt={40} fontSize={36}><b>Read Hundreds of Reviews</b></Text>
                <Image src='https://tmetric.com/media/rt1k0zjc/img-rating-4-5.svg'></Image>
                <Text fontSize={36}><b>4.5 Customer Rating</b></Text>
                <Text color={"blue"} fontSize={36}><b>242 Reviews</b></Text>
            </Box>


            <Box height={250} bg={"#f6f7f8"} textAlign={"center"} mt={-36}>
                <Text pt={40}><b>Used and trusted by 3000+ businesses in the world</b></Text>
                <Flex alignItems={"center"} justifyContent={"center"} mt={50}>
                    <Image src='https://tmetric.com/media/wlmpffzm/logo_business_endygo.png'></Image>
                    <Image src='https://tmetric.com/media/0ddgehbk/logo_business_itsyndicate.png'></Image>
                    <Image src='https://tmetric.com/media/eozchehq/logo_business_pulso.png'></Image>
                    <Image src='https://tmetric.com/media/rmvok0xh/logo_business_050media.png'></Image>
                    <Image src='https://tmetric.com/media/ccpn231z/logo-business-jot-digi-tal.svg'></Image>
                    <Image src='https://tmetric.com/media/z0fhmi1j/logo-business-freshlab.svg'></Image>
                    <Image src='https://tmetric.com/media/xjogm2h2/logo-business-mvad.svg'></Image>
                    <Image src='https://tmetric.com/media/nvalaok1/logo_business_swaven.png'></Image>
                </Flex>
            </Box>


            <Box height={550}  mt={-47}>
                <Text fontSize={48} textAlign={"center"} p={50}><b>Why choose TMetric?</b></Text>
                <HStack spacing='24px' display={"flex"} justifyContent={"center"}>
                    <Box height={220} w='180px' p={15} bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image  src="https://tmetric.com/media/zrvmvbl3/icon-straightforward.svg" alt="" />
                        <Box height={150} w={150}>
                            <Text fontSize={20}><b>The most straightforward time tracking app</b></Text>
                        </Box>
                    </Box>

                    <Box height={220} w='180px' p={15} bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image  src="https://tmetric.com/media/opdfdo3l/icon-platforms.svg" alt="" />
                        <Box height={150} w={180}>
                            <Text fontSize={20}><b>Available on all platforms: macOS, Windows, Linux, iOS, and Android</b></Text>
                        </Box>
                    </Box>

                    <Box height={220} w='180px' p={15} bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image  src="https://tmetric.com/media/igkmpmix/icon-freetrial.svg" alt="" />
                        <Box height={150} w={150}>
                            <Text fontSize={20}><b>Free plan with basic time tracking for a team up to 5</b></Text>
                        </Box>
                    </Box>

                    <Box height={220} w='180px' p={15} bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image  src="https://tmetric.com/media/htxfmpoe/icon-reasonableprice.svg" alt="" />
                        <Box height={150} w={150}>
                            <Text fontSize={20}><b>Reasonable price makes it affordable for anyone</b></Text>
                        </Box>
                    </Box>

                    <Box height={220} w='180px' p={15} bg='white' border={"1px solid #e2e7eb"} borderRadius={12}  >
                        <Image  src="https://tmetric.com/media/0uyowzzu/icon-multilang.svg" alt="" />
                        <Box height={150} w={150}>
                            <Text fontSize={20}><b>Multilanguage solution</b></Text>
                        </Box>
                    </Box>
                    
                </HStack>

            </Box>


            <Box height={300} bg={"#41338f"} textAlign={"center"} mt={-48}>
                <Text pt={40} fontSize={48} color={"white"}><b>Make time work for you!</b></Text>
                <Button p={10} w={190} fontSize={18} bg={"white"} color='black' borderRadius={5} border={"1px solid grey"}>Start Free Trial</Button>
                <Text fontSize={20} color={"white"}>Powered by  A software vendor with 20 years of experience.</Text>
            </Box>

            
            
            
        
    </div>
  )
}

export default HomePage