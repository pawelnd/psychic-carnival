import { Box, Button, Flex, Heading, VStack } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { FaFacebook, FaLock } from 'react-icons/all';
import { useAuth } from '../lib/auth';
import { useHistory } from 'react-router';

export const LoginPage = () => {
  let { user, isLoggedIn } = useAuth();
  let history = useHistory();
  const loggedUserComponentPart = useMemo(
    () => () => {
      const label = `Kontynuuj jako ${user.name}`;
      return (
        <>
          <Box>LUB</Box>
          <Box>
            <Button onClick={() => history.push('')}>{label}</Button>
          </Box>
        </>
      );
    },
    user
  );
  return (
    <Flex direction="column" alignItems={'center'} justifyContent={'center'} margin="20">
      <Box backgroundColor={'primary'} borderRadius={'90'} padding={'5'} color={'white'} margin={'-5'} zIndex={1}>
        <FaLock size={20} />
      </Box>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" backgroundColor={'white'} padding={'10'} minH={'300px'} minW={'350px'} d={'flex'} alignItems={'center'} justifyContent={'center'}>
        <VStack justifyContent={'space-between'} height={'full'} spacing={'7'}>
          <Heading>Logowanie</Heading>
          <hr />
          <Button onClick={() => (window.location.href = '/api/auth/facebook')} size={'md'} variant={'solid'} colorScheme="facebook" leftIcon={<FaFacebook />}>
            Zaloguj przez Facebook
          </Button>
          {isLoggedIn ? loggedUserComponentPart() : null}
        </VStack>
      </Box>
    </Flex>
  );
};
