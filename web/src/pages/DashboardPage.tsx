import React from 'react';
import {Box, Container, Heading, HStack, VStack} from "@chakra-ui/react";

export const DashboardPage = () => {
  return <Container>
    <HStack >
      <Box>
        <Heading>Moje listy</Heading>

      </Box>
      <Box>
        <Heading>Listy wspólne</Heading>
      </Box>
    </HStack>
  </Container>;
};
