import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '..';
import {
  Candidates,
  CandidatesReports,
  Reports,
} from '../models/reportsAPI/reportsApiModels';
import {
  CandidatesDTO,
  CandidatesReportsDTO,
  ReportsDTO,
  CreateReportDTO,
} from '../models/reportsAPI/reportsApiModelsDTO';

type RootState = ReturnType<typeof store.getState>;

export const reportsApi = createApi({
  reducerPath: 'reportsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://10.0.2.2:3333',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.entities.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Reports'],
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
    candidateReports: builder.query<CandidatesReports[], number>({
      query: param => `/api/reports?candidateId=${param}`,
      providesTags: ['Reports'],
      transformResponse: (response: CandidatesReportsDTO[]) => {
        return response.map(data => ({
          id: data.id,
          companyId: data.companyId,
          companyName: data.companyName,
          interviewDate: data.interviewDate,
          phase: data.phase,
          status: data.status,
          note: data.note,
        }));
      },
    }),
    reports: builder.query<Reports[], void>({
      query: () => '/api/reports',
      providesTags: ['Reports'],
      transformResponse: (response: ReportsDTO[]) => {
        return response.map(data => ({
          id: data.id,
          companyId: data.companyId,
          companyName: data.companyName,
          companyImage: data.company_img,
          candidateName: data.candidateName,
          interviewDate: data.interviewDate,
          phase: data.phase,
          status: data.status,
          note: data.note,
        }));
      },
    }),
    createReport: builder.mutation<void, CreateReportDTO>({
      query: report => ({
        url: '/api/reports',
        method: 'POST',
        body: report,
      }),
      invalidatesTags: ['Reports'],
    }),
  }),
});

export const {
  useCandidatesQuery,
  useCandidateReportsQuery,
  useReportsQuery,
  useCreateReportMutation,
} = reportsApi;
