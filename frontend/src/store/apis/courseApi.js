import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const courseApi = createApi({
  reducerPath: 'courses',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    credentials: 'include',
  }),
  endpoints(builder) {
    return {
      popularTopics: builder.query({
        query: () => {
          return {
            url: '/api/course/popular-topics',
            method: 'GET',
          };
        },
      }),
      fetchCourses: builder.query({
        query: (query) => ({
          url: '/api/course',
          method: 'GET',
          params: query,
        }),
      }),
    };
  },
});

export const { usePopularTopicsQuery, useFetchCoursesQuery } = courseApi;

export { courseApi };
