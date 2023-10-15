import { useLocation } from 'react-router-dom';
import { LinkStyled, LinkWrapper } from './GoBackLink.styled';

const GoBackLink = () => {
  const location = useLocation();

  return (
    <LinkWrapper>
      <LinkStyled to={'/'} state={{ from: location }}>
        back to homepage
      </LinkStyled>
    </LinkWrapper>
  );
};
export default GoBackLink;
