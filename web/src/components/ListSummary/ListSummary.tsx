import { Box, Button, Image, List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { FaEdit, FaRegTrashAlt, MdCheckCircle } from 'react-icons/all';

export const ListSummary = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4
  };
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
      <Box d={'flex'} justifyContent={'space-between'}>
        <h1>Nazwa</h1>
        <Box ml="2" color="gray.600" d={'flex'} justifyContent={'flex-end'}>
          <Button ml={1}>
            <FaEdit />
          </Button>
          <Button ml={1}>
            <FaRegTrashAlt />
          </Button>
        </Box>
      </Box>
      <Image pt={3} src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={'primary'} />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
