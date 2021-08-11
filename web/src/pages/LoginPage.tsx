import { Flex, Button, Box, HStack, Heading, VStack, Badge } from '@chakra-ui/react';
import React from 'react';
import {FaFacebook, FaLock} from "react-icons/all";
import {useHistory} from "react-router";

export const LoginPage = () => {
  let history = useHistory();
  return (
    <Flex direction="column" alignItems={'center'} margin="5" >
        <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" backgroundColor={"white"} padding={'5'} minH={'300px'} minW={'350px'}>
           <VStack justifyContent={'space-between'} height={'full'}>
               <Badge variant={'primary'}>
                   <FaLock size={30} />
               </Badge>
               <Heading>Logowanie</Heading>

               <Button onClick={()=> window.location.href = '/api/auth/facebook'} size={'md'} colorScheme="facebook" leftIcon={<FaFacebook />}>
                   Login with Facebook
               </Button>
               <hr />

           </VStack>

        </Box>
    </Flex>
  );
};
