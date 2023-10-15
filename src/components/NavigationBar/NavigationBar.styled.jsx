import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const NavBar = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 3px 0px #00000040;

  nav {
    max-width: 1440px;
    padding-left: 30px;
    padding-right: 30px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-left: auto;
    margin-right: auto;

    box-sizing: border-box;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding-top: 16px;
  padding-bottom: 12px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
  text-transform: uppercase;
  text-decoration: none;

  border-bottom: 4px solid transparent;

  &.active {
    color: #5cd3a8;
    border-bottom: 4px solid #5cd3a8;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
