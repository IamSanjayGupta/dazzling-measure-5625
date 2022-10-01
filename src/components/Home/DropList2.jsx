import { Box,Flex,Img,Link,Text,VStack } from '@chakra-ui/react'
import React from 'react'

const Droplist2 = () => {
  return (
    <Flex width={'100%'}  paddingLeft='50px' columnGap='25px'>
            <VStack width='280px' padding='50px'>
                         <Box >
                           <Text fontSize='20px' fontWeight='bold' color='grey'>Apps</Text>
                           <br/>
                            <Link fontWeight='bold' >Browser Extensions</Link>
                            <Text>Simple time tracking extension which helps you be more productive</Text>
                          </Box>
                          <br/>
                          <Box >
                            <Link fontWeight='bold' > Mobile apps</Link>
                            <Text>Install TMetric app to your phone or a tablet device. Android and iOS platforms are supported.</Text>
                          </Box>
                          <br/>
                          <Box >
                            <Link fontWeight='bold' > Desktop apps</Link>
                            <Text>Download TMetric app for your desktop computer or a laptop.</Text>
                          </Box>
           </VStack>
 
           <VStack width='280px' padding='50px'>
                    <Box padding='15px'>
                           <Text fontSize='20px' fontWeight='bold' color='grey'>Integrations</Text>
                           <br/>
                            <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/rejbvkxk/icon-jira-small.svg" width='80px'/>
                                 </VStack>
                                <VStack >
                                    <Text fontWeight='bold' ml={"-80px"}  >Jira</Text>
                                    <Text>Time tracking on every task in one click</Text>
                                </VStack>
                            </Flex>
                     </Box>
                          <br/>
                    <Box >
                          <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/u4kphldq/icon-asana-small.svg" width='80px'/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold' ml={"-80px"}>Asana</Text>
                                    <Text>Start to accurately track time of tasks</Text>
                                </VStack>
                          </Flex>
                            
                    </Box>
                        
           </VStack>
           <VStack width='280px' padding='30px'>
                    <Box padding='15px'>
                           <Text fontSize='20px' fontWeight='bold' color='grey'> </Text>
                           <br/>
                            <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/jduhrdq5/icon-todoist-small.svg" width='50px'/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold' ml={"-80px"}>Todolist</Text>
                                    <Text>Track time of your lists and tasks</Text>
                                </VStack>
                            </Flex>
                     </Box>
                          <br/>
                    <Box >
                          <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/uq4dqcrf/icon-ms-office-small.svg" width='60px'/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold' ml={"-80px"}>MS Office</Text>
                                    <Text>Get plugin for tracking time in MS Office Online</Text>
                                </VStack>
                          </Flex>
                            
                    </Box>
                        
           </VStack>
           <VStack width='280px' padding='30px'>
                    <Box padding='15px'>
                           <Text fontSize='20px' fontWeight='bold' color='grey'> </Text>
                           <br/>
                            <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/nfqj22co/icon-github-small.svg" width='80px'/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold' ml={"-80px"}>GitHub</Text>
                                    <Text>Track time spent working on an issue with one mouse click</Text>
                                </VStack>
                            </Flex>
                     </Box>
                          <br/>
                    <Box >
                          <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/l1cply4y/icon-freshdesk-small.svg" width='60px'/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold' ml={"-80px"}>Freshdesk</Text>
                                    <Text>Track time spent on every support ticket</Text>
                                </VStack>
                          </Flex>
                            
                    </Box>
                        
           </VStack>
 

    </Flex>
  )
}

export default Droplist2



















 