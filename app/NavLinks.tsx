"use client";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Signin',
    href: '/signin',
  },
];

const StyledLink = styled(Link)`
  text-align: center;
  display: block;
  border-radius: 25%;
  width: 100%;
  background-color: ${(props) => (props.theme.isActive ? `blue` : `burlywood`)};
`;

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <StyledLink
          key={link.name}
          theme={{ isActive: pathname === link.href }}
          href={link.href}
        >
          {link.name}
        </StyledLink>
      ))}
    </>
  );
}
