"use client";

import { signIn, useSession } from 'next-auth/react';
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
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <StyledDiv>Loading...</StyledDiv>;
  }

  if (session) {
    const user = session.user;
    return (
      <StyledDiv>
        <StyledHeader>You are signed in {user?.name}. Go to home page to view entire profile information or to sign out!</StyledHeader>
      </StyledDiv>
    );
  }

  return (
    <StyledDiv>
      <StyledHeader>Sign In Page</StyledHeader>
      <StyledHeader>You are currently not signed in, click below to authorize sign in!</StyledHeader>
      <StyledButton onClick={() => signIn('github')}>Sign in using Github!</StyledButton>
    </StyledDiv>
  );
}
