import { Box, Button, Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router';
import { useAuth } from '../../lib/auth';
import routes from './../../routes';
import React from "react";

export const TopBar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const history = useHistory();

  return (
    <Flex as="nav" w="100%" align={'center'} justifyContent={'center'} p={3} backgroundColor={'blackAlpha.900'} position={'sticky'} top={0} color={'white'}>
      <Flex align="center" justify="space-between" w="container.xl">
        <Box margin={2}>Lista zakupów</Box>
        {isLoggedIn && (<Box>Witaj {user?.name}</Box>)}
        <Box>
          {isLoggedIn && (
            <Button variant="" onClick={() => logout()}>
              Logout
            </Button>
          ) }
        </Box>
      </Flex>
    </Flex>
  );
};
