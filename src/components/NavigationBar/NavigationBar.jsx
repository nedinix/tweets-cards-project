import { NavBar, NavLinkStyled } from './NavigationBar.styled';

const NavigationBar = () => (
  <NavBar>
    <nav>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/tweets">Tweets</NavLinkStyled>
    </nav>
  </NavBar>
);
export default NavigationBar;
