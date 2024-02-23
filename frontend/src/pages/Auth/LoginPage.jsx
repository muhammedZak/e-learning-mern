import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useLoginUserMutation } from '../../store';
import { setCredentials } from '../../store/slices/authSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginUserMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate(redirect);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex  justify-center">
      <div className="pt-16">
        <h4 className="font-semibold text-2xl">Login here</h4>
        <hr className="my-2 " />
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="mb-1 text-lg text-slate-900 font-medium block"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            required
            className="mb-4 py-3 pl-3 w-full border border-black"
          />
          <label
            htmlFor="password"
            className="mb-1 text-lg text-slate-900 font-medium block"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 py-3 pl-3 w-full border border-black"
          />

          <button
            type="submit"
            className="mb-4 py-3 px-32 block w-full text-center text-white bg-blue-500 hover:bg-opacity-75"
          >
            Sign in
          </button>
        </form>
        <p className="text-center">
          Or
          <span className="ml-1 underline font-medium text-blue-500">
            <Link to="/">forgot password?</Link>
          </span>
        </p>
        <hr className="my-6 " />
        <p className="text-center text-sm">
          Do not have an account?
          <span className="underline font-medium text-blue-500">
            <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}>
              Sign up
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
