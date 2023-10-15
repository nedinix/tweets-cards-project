import { fetchUsersList } from 'service/usersService';
import { useEffect, useState } from 'react';
import { PAGE_LIMIT } from 'service/params';

/* eslint-disable */
export const useFetchUsersList = (currentPage, isLoadmore) => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await fetchUsersList(currentPage);

        if (!data.length) throw new Error('Sorry. There are no users ... ');
        if (data.length < PAGE_LIMIT) isLoadmore(false);

        usersList.length < 1
          ? setUsersList(data)
          : setUsersList(usersList => [...usersList, ...data]);

        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);
  return { usersList, isLoading, error };
};
/* eslint-enable */
