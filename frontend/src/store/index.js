import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './slices/authSlice';
import { usersApi } from './apis/usersApi';
import { categoryApi } from './apis/categoryApi';
import { courseApi } from './apis/courseApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(categoryApi.middleware)
      .concat(courseApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useLoginUserMutation,
  useSignupUserMutation,
  useLogoutUserMutation,
  useEmailChangeMutation,
  usePasswordChangeMutation,
  useGetMyProfileQuery,
  useUpdateprofileMutation,
} from './apis/usersApi';

export { useFetchAllCategoriesQuery } from './apis/categoryApi';
