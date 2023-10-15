import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LinkStyled = styled(Link)`
  max-width: 180px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  text-decoration: none;
  text-transform: uppercase;
  color: #373737;

  background-color: #e6e6e6;
  opacity: 0.8;
  border: 1px solid transparent;
  border-radius: 8px;

  transition: background-color 100ms linear, color 100ms linear,
    opacity 100ms linear, border-color 100ms linear;

  &:hover {
    opacity: 1;
    color: #fff;
    background-color: #5cd3a8;
  }

  &:active {
    color: #fff;
    background-color: #646363;
    border-color: transparent;
  }
`;
