import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '..';
import {
  Candidates,
  UsersRepositories,
  User,
} from '../models/reportsAPI/reportsApiModels';
import {
  CandidatesDTO,
  UsersRepositoriesDTO,
  UserDTO,
} from '../models/reportsAPI/reportsApiModelsDTO';

type RootState = ReturnType<typeof store.getState>;

export const reportsApi = createApi({
  reducerPath: 'reportsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.0.2.2:3333',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.entities.accessToken;
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    candidates: builder.query<Candidates[], void>({
      query: () => '/api/candidates',
      transformResponse: (response: CandidatesDTO[]) => {
        return response.map(data => ({
          id: data.id,
          name: data.name,
          birthday: data.birthday,
          email: data.email,
          education: data.education,
          avatar: data.avatar,
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
  useCandidatesQuery,
  useUsersRepositoriesQuery,
  useSearchUsersQuery,
} = reportsApi;
