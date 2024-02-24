import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASE_URL, USERS_URL } from '../../constants';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      loginUser: builder.mutation({
        query: (user) => {
          return {
            url: `/api/users/signin`,
            method: 'POST',
            body: user,
          };
        },
      }),
      signupUser: builder.mutation({
        query: (user) => {
          return {
            url: `/api/users/signup`,
            method: 'POST',
            body: user,
          };
        },
      }),
      logoutUser: builder.mutation({
        query: () => {
          return { url: '/api/users/logout', method: 'POST' };
        },
      }),
      emailChange: builder.mutation({
        query: (data) => {
          return {
            url: '/api/users/email-edit',
            method: 'PUT',
            body: data,
          };
        },
      }),
    };
  },
});

export const {
  useLoginUserMutation,
  useSignupUserMutation,
  useLogoutUserMutation,
  useEmailChangeMutation,
} = usersApi;

export { usersApi };
