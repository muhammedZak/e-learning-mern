import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './slices/authSlice';
import { usersApi } from './apis/usersApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
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
