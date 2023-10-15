import { useLocation } from 'react-router-dom';
import { LinkStyled } from './GoBackLink.styled';

const GoBackLink = () => {
  const location = useLocation();

  return (
    <LinkStyled to={'/'} state={{ from: location }}>
      go back home
    </LinkStyled>
  );
};
export default GoBackLink;
