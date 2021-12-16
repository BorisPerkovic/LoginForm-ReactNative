import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export const useFetchSearchUsers = (param: string) => {
  const [requestState, setRequestState] = useState<{
    status: 'loading' | 'error' | 'resolved';
    data: User[];
  }>({ status: 'loading', data: [] });

  console.log('hook rendered');

  useEffect(() => {
    let mounted = true;
    setRequestState({ status: 'loading', data: [] });
    axios
      .get<{ items: User[] }>(`${config.BASE_URL}/search/users?q=${param}`, {
        headers: {
          Authorization: `token${config.GIT_ACCESS_TOKEN}`,
        },
      })
      .then(response => {
        if (mounted) {
          setRequestState({
            status: 'resolved',
            data: response.data.items,
          });
        }
      })
      .catch(err => {
        if (err.response && mounted) {
          setRequestState({ status: 'error', data: [] });
        }
      });

    return () => {
      mounted = false;
    };
  }, [param]);

  return requestState;
};
