import {Box, Container} from '@chakra-ui/react';
import React from 'react';
import { TopBar } from '../../components/TopBar/TopBar';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Box width={'full'} bgColor={"gray.50"} minH={'100vh'}>
      <TopBar />
      <Container maxW={"container.xl"}>{children}</Container>
    </Box>
  );
};

export default MainLayout;
