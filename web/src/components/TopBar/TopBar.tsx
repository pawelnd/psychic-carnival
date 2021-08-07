import { Flex } from '@chakra-ui/react';
import { useAuth } from '../../lib/auth';

export const TopBar = () => {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <Flex as="nav" w="100%" align={'center'} justifyContent={'center'} p={3} backgroundColor={'blackAlpha.900'} position={'sticky'} top={0} color={'white'}>
      <Flex align="center" justify="space-between" wrap="wrap" w="container.xl">
        TOPB AR {isLoggedIn} <br /> {JSON.stringify(user)} adasdasdas
      </Flex>
    </Flex>
  );
};
