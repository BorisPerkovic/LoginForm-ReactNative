import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

interface DataTypes {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}

export const useFetchUsersRepositories = (name: string) => {
  const [requestState, setRequestState] = useState<{
    status: 'loading' | 'error' | 'initial' | 'resolved';
    data: DataTypes[];
  }>({ status: 'initial', data: [] });

  useEffect(() => {
    setRequestState({ status: 'loading', data: [] });
    axios
      .get<DataTypes[]>(`${config.BASE_URL}/users/${name}/repos`, {
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
  }, [name]);

  return requestState;
};
