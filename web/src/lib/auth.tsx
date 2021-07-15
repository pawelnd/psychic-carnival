import React from 'react';
import { CircularProgress } from '@chakra-ui/react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';

const StyledFullPageSPinner = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
interface AuthState {
  loading: boolean;
  user: any;
  isLoggedIn: boolean;
  logout: () => void;
}
const AuthContext = React.createContext<any>(undefined);

type ProvideAuthProps = React.PropsWithChildren<{}>;

export function ProvideAuth({ children }: ProvideAuthProps) {
  const { data, isLoading } = useQuery<any>('me', () => axios.get(`/api/auth/me`));

  const state = {
    isLoading,
    user: data?.me,
    isLoggedIn: !!data?.me
  };

  return <AuthContext.Provider value={state}>{isLoading ? <StyledFullPageSPinner /> : children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const state = React.useContext(AuthContext) as unknown as AuthState;

  const logout = () => {
    window.location.href = '/api/auth/logout';
  };
  return { ...state, logout };
};