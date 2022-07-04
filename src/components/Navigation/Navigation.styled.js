import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
export const StyledNav = styled.nav`
  padding: 10px;
  padding-left: 20px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid grey;
`;
