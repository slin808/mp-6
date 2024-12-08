"use client";

import { SessionProvider } from 'next-auth/react';
import { useSession, signOut } from 'next-auth/react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const StyledHeader = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const StyledLinkButton = styled.a`
  background-color: #4299e1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
`;

const StyledP = styled.p`
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const StyledSignin = styled.button`
  background-color: #f56565;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
`;

export default function Home() {
  return (
    <SessionProvider>
      <PageContent />
    </SessionProvider>
  );
}

function PageContent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <StyledDiv>Loading...</StyledDiv>;
  }

  if (!session) {
    return (
      <StyledDiv>
        <StyledHeader>Welcome to My OAuth App</StyledHeader>
        <StyledLinkButton href="/signin">Sign in with GitHub</StyledLinkButton>
      </StyledDiv>
    );
  }

  const user = session.user;

  return (
    <StyledDiv>
      <StyledHeader>Welcome to My OAuth App</StyledHeader>
      <StyledP>Email: {user?.email}</StyledP>
      <StyledP>Name: {user?.name}</StyledP>
      <StyledSignin onClick={() => signOut()}>Sign Out</StyledSignin>
    </StyledDiv>
  );
}
