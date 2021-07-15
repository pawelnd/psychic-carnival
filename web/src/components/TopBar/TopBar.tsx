import React from 'react';
import { Flex } from '@chakra-ui/react';
import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import { useAuth } from '../../lib/auth';
import styled from 'styled-components';

const StyledLogo = styled.div`
  background-color: #0a66c2;
  background-blend-mode: soft-light;
  padding: 5px;
  border-radius: 5px;
  font-size: 1em;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  > * {
    margin-right: 5px;
  }
`;

const StyledNavigation = styled.nav`
  li {
    display: inline-block;
    margin-left: 1em;
    font-size: 0.9em;
  }
`;

const StyledCornentActions = styled.div`
  > * {
    display: inline-block;
  }
`;

export const TopBar = () => {
  const { isLoggedIn, user, logout } = useAuth();

  const naviagation = ['T-Shirts', 'Cups', 'Gadgets', 'FAQ', 'My account'];

  return (
    <Flex as="nav" w="100%" align={'center'} justifyContent={'center'} p={3} backgroundColor={'blackAlpha.900'} position={'sticky'} top={0} color={'white'}>
      <Flex align="center" justify="space-between" wrap="wrap" w="container.xl">
        <StyledNavigation>
          <ul>
            {naviagation.map((x) => (
              <li>
                <a>{x}</a>
              </li>
            ))}
          </ul>
        </StyledNavigation>

        <StyledCornentActions>
          <a href="#">
            <FaSearch />
          </a>
          <a href="#">
            <FaShoppingBasket />
          </a>
          {isLoggedIn && { user }}
        </StyledCornentActions>
      </Flex>
    </Flex>
  );
};
