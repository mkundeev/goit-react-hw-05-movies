import { StyledNavLink, StyledNav } from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink exact="true" to="/">
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </StyledNav>
  );
}
