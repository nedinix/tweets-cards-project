import { useEffect, useState } from 'react';
import { useFetchUsersList } from 'hooks/useFetchUsers';
import TweetCard from '../TweetCard';
import Filter from 'components/Filter';
import LoadmoreButton from 'components/LoadmoreButton';
import Loader from 'components/Loader';
import { ListWrapper } from './TweetCardsList.styled';
import { nanoid } from 'nanoid';

const FOLLOWING_TWEETS_LS_DATA = 'followingTweets';

const TweetCardsList = () => {
  const [followingTweets, setFollowingTweets] = useState(
    () => JSON.parse(localStorage.getItem(FOLLOWING_TWEETS_LS_DATA)) || []
  );
  const values = ['All', 'Follow', 'Following'];
  const [filterQuery, setFilterQuery] = useState(values[0]);

  const [isShowLoadmoreButton, setIsShowLoadmoreButton] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const { usersList, isLoading, error } = useFetchUsersList(
    currentPage,
    setIsShowLoadmoreButton
  );

  useEffect(
    () =>
      localStorage.setItem(
        FOLLOWING_TWEETS_LS_DATA,
        JSON.stringify(followingTweets)
      ),
    [followingTweets]
  );

  useEffect(() => {
    if (currentPage > 1)
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
  }, [usersList, currentPage]);

  const handleClickFollow = id => {
    const userExist = followingTweets.map(tweet => tweet.id).includes(id);

    if (userExist) {
      const arr = followingTweets.filter(tweet => tweet.id !== id);
      setFollowingTweets(arr);
    } else {
      setFollowingTweets([...followingTweets, { id }]);
    }
  };

  const isFollowUser = id => followingTweets.some(tweet => tweet.id === id);

  const getFilteredList = list => {
    if (filterQuery === values[0]) {
      return list;
    }

    if (filterQuery === values[1]) {
      const values = Object.values(followingTweets);
      return list.filter(
        item => values.every(value => item.id !== value.id) && item
      );
    }

    if (filterQuery === values[2]) {
      const values = Object.values(followingTweets);
      return list.filter(item => values.some(value => value.id === item.id));
    }
  };

  const handleClickBtnLoadmore = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  return (
    <>
      <Filter
        values={values}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
      />
      {usersList.length > 0 && (
        <ListWrapper>
          {getFilteredList(usersList).map(user => (
            <TweetCard
              key={nanoid()}
              userData={user}
              handleClick={handleClickFollow}
              isFollow={isFollowUser(user.id)}
            />
          ))}
        </ListWrapper>
      )}
      {isShowLoadmoreButton && (
        <LoadmoreButton handleClick={handleClickBtnLoadmore} />
      )}
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
    </>
  );
};

export default TweetCardsList;
