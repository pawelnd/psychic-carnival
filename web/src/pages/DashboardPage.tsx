import React from 'react';
import { Box, Button, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { ListSummary } from '../components/ListSummary/ListSummary';

export const DashboardPage = () => {
  return (
    <Flex direction="column">
      <VStack spacing={3} mt={'5'} alignItems={'flex-start'}>
        <Box width={'full'} d={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
          <Heading>Moje</Heading>
          <Button>Nowa Lista</Button>
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
