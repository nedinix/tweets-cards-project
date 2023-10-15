import { ColorRingStyled } from './Loader.styled';

const LoaderWrapper = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  zIndex: '1000',
};

const Loader = () => (
  <div style={LoaderWrapper}>
    <ColorRingStyled
      visible={true}
      height="240"
      width="240"
      ariaLabel="blocks-loading"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  </div>
);

export default Loader;
