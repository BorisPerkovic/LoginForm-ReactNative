import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';
import {
  AllRepositories,
  UsersRepositories,
  User,
} from '../models/githubApiModels';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: config.BASE_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', `token${config.GIT_ACCESS_TOKEN}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    allRepositories: builder.query<AllRepositories[], void>({
      query: () => '/repositories',
    }),
    usersRepositories: builder.query<UsersRepositories[], string>({
      query: param => `/users/${param}/repos`,
    }),
    searchUsers: builder.query<{ items: User[] }, string>({
      query: param => `/search/users?q=${param}`,
    }),
  }),
});

export const {
  useAllRepositoriesQuery,
  useUsersRepositoriesQuery,
  useSearchUsersQuery,
} = githubApi;
