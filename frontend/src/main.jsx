import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import { store } from './store/index.js';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/Auth/LoginPage.jsx';
import SignUp from './pages/Auth/SignUpPage.jsx';
import PrivateRoute from './components/PrivateRoutes.jsx';
import AccountSettingsPage from './pages/AccountSettingsPage/AccountSettingsPage.jsx';
import Dashboard from './pages/Account/Dashboard.jsx';
import ProfileEdit from './pages/Account/ProfileEdit.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      {/* private routes */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/account-settings" element={<AccountSettingsPage />} />
        <Route path="/account" element={<Dashboard />}>
          <Route path="/account" element={<ProfileEdit />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
