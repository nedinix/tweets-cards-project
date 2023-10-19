import { fetchUsersList } from 'service/usersService';
import { useEffect, useState } from 'react';
import { PAGE_LIMIT } from 'service/params';

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

        data.length !== PAGE_LIMIT ? isLoadmore(false) : isLoadmore(true);

        setUsersList(usersList =>
          currentPage !== 1 ? [...usersList, ...data] : data
        );
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [currentPage, isLoadmore]);

  return { usersList, isLoading, error };
};
