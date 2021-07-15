import { Flex } from '@chakra-ui/react';
import React from 'react';
import { TopBar } from '../../components/TopBar/TopBar';

const MainLayout = ({ children }: any) => {
  return (
    <Flex direction="column" align="center" m="0 auto">
      <TopBar />
      {children}
    </Flex>
  );
};

export default MainLayout;
