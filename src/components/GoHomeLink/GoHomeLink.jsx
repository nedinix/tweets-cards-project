import { useLocation } from 'react-router-dom';
import { LinkStyled } from './GoHomeLink.styled';
import { VscArrowLeft } from 'react-icons/vsc';

const GoHomeLink = () => {
  const location = useLocation();

  return (
    <LinkStyled to={'/'} state={{ from: location }}>
      <VscArrowLeft width={18} />
      <span>go back home</span>
    </LinkStyled>
  );
};
export default GoHomeLink;
