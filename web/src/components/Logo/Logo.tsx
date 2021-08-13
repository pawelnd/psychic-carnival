import React from 'react';
import { Box } from '@chakra-ui/react';
import { FaShopify } from 'react-icons/all';

const Logo = () => (
  <Box d={'flex'} justifyContent={'center'}>
    <Box m={'1'}>
      <FaShopify />
    </Box>{' '}
    <Box m={'1'} fontSize={'md'}>
      Lista zakupów
    </Box>
  </Box>
);

export default Logo;
