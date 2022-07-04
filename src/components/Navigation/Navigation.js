import React from 'react';
import { StyledNavLink, StyledNav } from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink to="/" exact>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNav>
  );
}
