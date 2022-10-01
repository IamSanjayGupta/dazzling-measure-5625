import { Box,Flex,Img,Link,Text,VStack } from '@chakra-ui/react'
import React from 'react'

const Droplist = () => {
  return (
    <Flex width={'100%'}  paddingLeft='50px' columnGap='25px'>
            <VStack width='280px' padding='50px'>
                         <Box >
                           <Text fontSize='20px' fontWeight='bold' color='grey'>Overview</Text>
                           <br/>
                            <Link fontWeight='bold' >Industry</Link>
                            <Text>Made for all industries. Check benefits of usage</Text>
                          </Box>
                          <br/>
                          <Box >
                            <Link fontWeight='bold' > Customers</Link>
                            <Text>See why business use TMetric for time tracking and workflow management</Text>
                          </Box>
           </VStack>
           <VStack width='280px' padding='50px'>
                    <Box padding='15px'>
                           <Text fontSize='20px' fontWeight='bold' color='grey'>Features</Text>
                           <br/>
                            <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg"/>
                                 </VStack>
                                <VStack >
                                    <Text fontWeight='bold'  >Time Tracking</Text>
                                    <Text>Capture and control every task you work on</Text>
                                </VStack>
                            </Flex>
                     </Box>
                          <br/>
                    <Box >
                          <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg"/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold'>Billing & Invoicing</Text>
                                    <Text>Set billable rates and easily create invoices</Text>
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
                                   <Img src="https://tmetric.com/media/1niddz51/icon-project-blue.svg"/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold'>Project Management</Text>
                                    <Text>Create projects, set rates and budgets</Text>
                                </VStack>
                            </Flex>
                     </Box>
                          <br/>
                    <Box >
                          <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/2gxihhdu/icon-team-blue.svg"/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold'>Team Management</Text>
                                    <Text>Monitor productivity and activity level of your team</Text>
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
                                   <Img src="https://tmetric.com/media/2gxihhdu/icon-team-blue.svg"/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold'>Task Management</Text>
                                    <Text>Manage tasks and set up an effective workflow</Text>
                                </VStack>
                            </Flex>
                     </Box>
                          <br/>
                    <Box >
                          <Flex >
                                <VStack>
                                   <Img src="https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg"/>
                                 </VStack>
                                <VStack>
                                    <Text fontWeight='bold'>Time Off</Text>
                                    <Text>Simply ask for days off and control teams attendance</Text>
                                </VStack>
                          </Flex>
                            
                    </Box>
                        
           </VStack>
 

    </Flex>
  )
}

export default Droplist









/* Project Management









 */