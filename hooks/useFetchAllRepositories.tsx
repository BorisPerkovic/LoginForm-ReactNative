import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataTypes {
  id: number;
  name: string;
  owner: { avatar_url: string };
  full_name: string;
}

export const useFetchAllRepositories = () => {
  const [requestState, setRequestState] = useState<{
    status: 'loading' | 'error' | 'initial' | 'resolved';
    data: DataTypes[];
  }>({ status: 'initial', data: [] });

  useEffect(() => {
    setRequestState({ status: 'loading', data: [] });
    axios
      .get<DataTypes[]>('https://api.github.com/repositories', {
        headers: {
          Authorization: 'token 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',
        },
      })
      .then(response => {
        setRequestState({
          status: 'resolved',
          data: response.data.slice(1, 25),
        });
      })
      .catch(err => {
        if (err.response) {
          setRequestState({ status: 'error', data: [] });
        }
      });

    return () => {};
  }, []);

  return requestState;
};
