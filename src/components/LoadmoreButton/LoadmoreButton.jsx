import { Button } from './LoadmoreButton.styled';

const LoadmoreButton = ({ handleClick }) => (
  <Button type="button" onClick={handleClick}>
    loadmore
  </Button>
);

export default LoadmoreButton;
