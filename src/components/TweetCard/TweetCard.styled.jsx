import { styled } from 'styled-components';

export const Card = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  padding-top: 28px;
  padding-bottom: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
  color: #ebd8ff;

  border-radius: 20px;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -3px 7px 21px 0px #0000003b;
  box-sizing: border-box;

  img {
    display: block;
  }
`;

export const FollowButton = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 28px;
  padding-right: 28px;

  width: 196px;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;

  /* background-color: #ebd8ff; */
  background-color: ${({ following }) =>
    following === 'true' ? '#5CD3A8' : '#ebd8ff'};

  border-style: none;
  border-radius: 10px;
  cursor: pointer;

  box-shadow: 0px 3.4px 3.44px 0px #00000040;

  &:hover {
    background-color: #e6e6e6;
  }

  &:focus {
    outline: 2px solid #373737;
  }
`;

export const ImageBlock = styled.div`
  margin-bottom: 18px;
`;

export const Line = styled.div`
  display: block;
  width: 380px;
  height: 8px;

  position: relative;
  background-color: #ebd8ff;
  box-shadow: 0px -1.72px 3.44px 0px #ae7be3 inset,
    0px 3.44px 2.58px 0px #fbf8ff inset, 0px 3.44px 3.44px 0px #0000000f;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  border-radius: 50%;

  transform: translate(150px, -36px);
  background-color: #ebd8ff;

  box-shadow: 0px 4.5px 3.5px 0px #fbf8ff inset, 0px 4.5px 4.5px 0px #0000000f,
    0px -2.2px 4.5px 0px #ae7be3 inset;

  img {
    background-color: #5736a3;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const LogoWrapper = styled.div`
  display: block;
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const CounterWrapper = styled.div`
  padding-top: 62px;

  font-size: 20px;
  font-weight: 500;
  line-height: calc(24 / 22);
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;

  p {
    margin: 0;
    padding: 0;
  }

  p:not(:last-child) {
    margin-bottom: 16px;
  }

  p:last-child {
    margin-bottom: 26px;
  }
`;
