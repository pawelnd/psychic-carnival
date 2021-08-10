import {Box, Container} from '@chakra-ui/react';
import React from 'react';
import { TopBar } from '../../components/TopBar/TopBar';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Box width={'full'}>
      <TopBar />
      <Container>{children}</Container>
    </Box>
  );
};

export default MainLayout;
