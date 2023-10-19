import {
  Card,
  ContentWrapper,
  CounterWrapper,
  FollowButton,
  ImageBlock,
  ImageWrapper,
  Line,
  LogoWrapper,
} from './TweetCard.styled';
import image from '../../images/tweet-card-pic.png';
import GoitLogo from 'components/GoitLogo';

const TweetCard = ({ userData, handleClick, isFollow }) => {
  const { id, user, avatar, tweets, followers } = userData;

  const showFollowers = () =>
    isFollow
      ? (followers + 1).toLocaleString('en-US')
      : followers.toLocaleString('en-US');
  return (
    <Card>
      <ImageBlock>
        <LogoWrapper>
          <GoitLogo />
        </LogoWrapper>
        <img src={image} alt="preview" width={308} height={168} />
      </ImageBlock>
      <Line>
        <ImageWrapper>
          <img src={avatar} alt={user} width={62} height={62} />
        </ImageWrapper>
      </Line>
      <ContentWrapper>
        <CounterWrapper>
          <p>{tweets} tweets</p>
          <p>{showFollowers()} followers</p>
        </CounterWrapper>
        <FollowButton
          // style={{ backgroundColor: isFollow && '#5CD3A8' }}
          type="button"
          following={isFollow.toString()}
          onClick={() => handleClick(id)}
        >
          {!isFollow ? 'Follow' : 'Following'}
        </FollowButton>
      </ContentWrapper>
    </Card>
  );
};

export default TweetCard;
