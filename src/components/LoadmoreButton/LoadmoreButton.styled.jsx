import { styled } from 'styled-components';

export const Button = styled.button`
  width: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: auto;
  margin-right: auto;

  display: block;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;

  background-color: #e6e6e6;

  border-style: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #5cd3a8;
  }
`;
