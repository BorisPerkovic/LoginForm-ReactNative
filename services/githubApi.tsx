import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';
import {
  AllRepositories,
  UsersRepositories,
  User,
} from '../models/githubApiModels';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.BASE_URL }),
  endpoints: builder => ({
    allRepositories: builder.query<AllRepositories[], void>({
      query: () => ({
        url: '/repositories',
        headers: {
          Authorization: `token${config.GIT_ACCESS_TOKEN}`,
        },
      }),
    }),
    usersRepositories: builder.query<UsersRepositories[], string>({
      query: param => ({
        url: `/users/${param}/repos`,
        headers: {
          Authorization: `token${config.GIT_ACCESS_TOKEN}`,
        },
      }),
    }),
    searchUsers: builder.query<{ items: User[] }, string>({
      query: param => ({
        url: `/search/users?q=${param}`,
        headers: {
          Authorization: `token${config.GIT_ACCESS_TOKEN}`,
        },
      }),
    }),
  }),
});

export const {
  useAllRepositoriesQuery,
  useUsersRepositoriesQuery,
  useSearchUsersQuery,
} = githubApi;
