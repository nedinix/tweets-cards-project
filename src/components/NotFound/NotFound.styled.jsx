import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Message = styled.div`
  flex-basis: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 2;

  strong {
    color: #5cd3a8;
    opacity: 0.5;
    font-size: 10rem;
  }

  p {
    font-weight: 500;
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #373737;
  margin-bottom: 2rem;
`;

export const MessageText = styled.p`
  max-width: 500px;
  margin-bottom: 4rem;
  color: #373737;
`;

export const ButtonBackHome = styled(Link)`
  background-color: #373737;
  border: 1px solid #373737;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  transition: all 100ms linear;

  &:hover {
    background-color: #5cd3a8;
    border-color: #5cd3a8;
    color: #fff;
  }
`;
