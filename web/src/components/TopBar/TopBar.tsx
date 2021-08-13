import { Box, Button, Flex } from '@chakra-ui/react';
import { useAuth } from '../../lib/auth';
import React from 'react';
import { FaShopify } from 'react-icons/all';
import Logo from "../Logo/Logo";

export const TopBar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <Flex as="nav" w="100%" align={'center'} justifyContent={'center'} p={3} backgroundColor={'blackAlpha.900'} position={'sticky'} top={0} color={'white'}>
      <Flex align="center" justify="space-between" w="container.xl">
        <Logo />
        {isLoggedIn && <Box>Witaj {user?.name}</Box>}
        <Box>
          {isLoggedIn && (
            <Button  onClick={() => logout()}>
              Wyloguj
            </Button>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
