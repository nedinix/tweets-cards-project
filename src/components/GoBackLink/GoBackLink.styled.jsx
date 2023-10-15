import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  padding: 8px;

  position: absolute;

  @media screen and (max-width: 900px) {
    position: static;
    margin-bottom: 12px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  text-decoration: none;
  text-transform: uppercase;
  color: #373737;

  opacity: 0.5;
  border: 1px solid transparent;
  border-radius: 8px;

  &:hover {
    opacity: 1;
    color: #646363;
    background-color: #e6e6e6;
  }

  &:active {
    color: #fff;
    background-color: #5cd3a8;
    border-color: transparent;
  }
`;
