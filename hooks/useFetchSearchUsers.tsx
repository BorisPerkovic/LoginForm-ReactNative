import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

interface DataTypes {
  id: number;
  login: string;
  avatar_url: string;
}

export const useFetchSearchUsers = (param: string) => {
  const [requestState, setRequestState] = useState<{
    status: 'loading' | 'error' | 'resolved';
    data: DataTypes[];
  }>({ status: 'loading', data: [] });

  console.log('hook rendered');

  useEffect(() => {
    setRequestState({ status: 'loading', data: [] });
    axios
      .get<DataTypes[]>(`${config.BASE_URL}/search/users?q=${param}`, {
        headers: {
          Authorization: `token${config.GIT_ACCESS_TOKEN}`,
        },
      })
      .then(response => {
        setRequestState({
          status: 'resolved',
          data: response.data,
        });
      })
      .catch(err => {
        if (err.response) {
          setRequestState({ status: 'error', data: [] });
        }
      });

    return () => {};
  }, [param]);

  return requestState;
};
