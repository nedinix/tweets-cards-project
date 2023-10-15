import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled.div`
  /* padding-top: 12px; */
  /* padding-bottom: 12px; */
`;

export const LinkStyled = styled(Link)`
  padding: 8px;
  /* max-width: 140px; */

  position: absolute;

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

  /* background-color: #e6e6e6; */
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
