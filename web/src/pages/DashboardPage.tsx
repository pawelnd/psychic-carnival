import React from 'react';
import { Box, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { ListSummary } from '../components/ListSummary/ListSummary';
import NewListModal from '../components/NewListModal/NewListModal';

export const DashboardPage = () => {
  return (
    <Flex direction="column">
      <VStack spacing={3} mt={5} alignItems={'flex-start'}>
        <Box width={'full'} d={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
          <Heading pr={3}>Moje</Heading>
          <NewListModal />
        </Box>
        <hr />
        <SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
          <ListSummary />
          <ListSummary />
          <ListSummary />
          <ListSummary />
        </SimpleGrid>
        <hr />
        <Heading>Udostępnione</Heading>
        <hr />
        <SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
          <ListSummary />
          <ListSummary />
          <ListSummary />
          <ListSummary />
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};
