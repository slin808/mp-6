"use client";

import { signIn } from 'next-auth/react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const StyledButton = styled.button`
  background-color: orange;
  color: white;
  padding: 0.5rem 1rem;
`;

const StyledHeader = styled.h1`
  font-size: 2.25rem;
  color: white;
`;

export default function SignIn() {
  return (
    <StyledDiv>
      <StyledHeader>Sign In Page</StyledHeader>
      <StyledButton onClick={() => signIn('github')}>Sign in using Github!</StyledButton>
    </StyledDiv>
  );
}
