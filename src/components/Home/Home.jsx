import { LinkStyled } from './Home.styled';

const Home = () => (
  <div>
    <h1>HOME PAGE</h1>
    <p>
      This application about tweets user cards. You can get follow or unfollow
      to some users
    </p>
    <LinkStyled to={'/tweets'}>Go to tweets page</LinkStyled>
  </div>
);

export default Home;
