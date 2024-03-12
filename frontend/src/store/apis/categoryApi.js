import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const categoryApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      fetchAllCategories: builder.query({
        query: () => {
          return {
            url: '/api/categories',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchAllCategoriesQuery } = categoryApi;

export { categoryApi };
