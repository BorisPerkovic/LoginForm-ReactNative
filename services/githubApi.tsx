import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';
import {
  AllRepositories,
  UsersRepositories,
  User,
} from '../models/githubApi/githubApiModels';
import {
  AllRepositoriesDTO,
  UsersRepositoriesDTO,
  UserDTO,
} from '../models/githubApi/githubApiModelsDTO';

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
      transformResponse: (response: AllRepositoriesDTO[]) => {
        return response.map(data => ({
          id: data.id,
          fullName: data.full_name,
          name: data.name,
          owner: { avatarUrl: data.owner.avatar_url, login: data.owner.login },
        }));
      },
    }),
    usersRepositories: builder.query<UsersRepositories[], string>({
      query: param => `/users/${param}/repos`,
      transformResponse: (response: UsersRepositoriesDTO[]) => {
        return response.map(data => ({
          id: data.id,
          name: data.name,
          htmlUrl: data.html_url,
          description: data.description,
          language: data.language,
        }));
      },
    }),
    searchUsers: builder.query<User[], string>({
      query: param => `/search/users?q=${param}`,
      transformResponse: (response: { items: UserDTO[] }) => {
        return response.items.map(data => ({
          id: data.id,
          login: data.login,
          avatarUrl: data.avatar_url,
        }));
      },
    }),
  }),
});

export const {
  useAllRepositoriesQuery,
  useUsersRepositoriesQuery,
  useSearchUsersQuery,
} = githubApi;
