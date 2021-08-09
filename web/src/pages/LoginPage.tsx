import { Flex, Button } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import {FaFacebook} from "react-icons/all";
import {useHistory} from "react-router";

export const LoginPage = () => {
  let history = useHistory();
  return (
    <Flex direction="column" margin="5">
      <Button onClick={()=> window.location.href = '/api/auth/facebook'} colorScheme="facebook" leftIcon={<FaFacebook />}>
        Login with Facebook
      </Button>
    </Flex>
  );
};
