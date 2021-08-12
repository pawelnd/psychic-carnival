import { Flex, Button, Box, HStack, Heading, VStack, Badge } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaLock } from 'react-icons/all';

export const LoginPage = () => {

  return (
    <Flex direction="column" alignItems={'center'} justifyContent={'center'} margin="20">
      <Box backgroundColor={'primary'} borderRadius={'90'} padding={'5'} color={'white'} margin={'-5'} zIndex={1}>
        <FaLock size={20} />
      </Box>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden"
           backgroundColor={'white'} padding={'10'} minH={'300px'} minW={'350px'}
           d={'flex'} alignItems={'center'} justifyContent={'center'}
      >
        <VStack justifyContent={'space-between'} height={'full'} spacing={'7'}>
          <Heading>Logowanie</Heading>
          <hr />
          <Button onClick={() => (window.location.href = '/api/auth/facebook')} size={'md'} variant={'solid'} colorScheme="facebook" leftIcon={<FaFacebook />}>
            Login with Facebook
          </Button>
          <hr />
        </VStack>
      </Box>
    </Flex>
  );
};
