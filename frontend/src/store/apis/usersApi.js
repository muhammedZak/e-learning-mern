import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASE_URL, USERS_URL } from '../../constants';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
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
    };
  },
});

export const { useLoginUserMutation, useSignupUserMutation } = usersApi;

export { usersApi };
