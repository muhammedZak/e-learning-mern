import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { useSignupUserMutation } from '../../store';
import { setCredentials } from '../../store/slices/authSlice';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupUser] = useSignupUserMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signupUser(data).unwrap();
    dispatch(setCredentials(res));
    navigate(redirect);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="">
        <h4 className="font-semibold text-2xl">Sign up here</h4>
        <hr className="my-2 " />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="name"
            className="mb-1 text-lg text-slate-900 font-medium block"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            {...register('name', { required: true, minLength: 4 })}
            className="mb-4 py-3 pl-3 w-full border border-black"
          />
          {errors.name?.type === 'required' && (
            <p className="text-red-500" role="alert">
              * Name is required
            </p>
          )}
          <label
            htmlFor="email"
            className="mb-1 text-lg text-slate-900 font-medium block"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="mb-4 py-3 pl-3 w-full border border-black"
          />
          {errors.email?.type === 'required' && (
            <p className="text-red-500" role="alert">
              * Email is required
            </p>
          )}
          <label
            htmlFor="password"
            className="mb-1 text-lg text-slate-900 font-medium block"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
            className="mb-4 py-3 pl-3 w-full border border-black"
          />
          {errors.password?.type === 'required' ? (
            <p className="text-red-500" role="alert">
              * Password is required
            </p>
          ) : errors.password?.type === 'minLength' ? (
            <p className="text-red-500" role="alert">
              * Minimum 6 charectors is required
            </p>
          ) : (
            ''
          )}
          <label htmlFor="terms" className="block mb-4 w-full text-sm">
            <input id="terms" type="checkbox" className="mr-1" />
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </label>
          <button
            type="submit"
            className="py-3 px-32 block w-full text-center text-white bg-blue-500 hover:bg-opacity-75"
          >
            Sign up
          </button>
        </form>
        <hr className="my-6 " />
        <p className="text-center text-sm">
          Already have an account?
          <span className="underline font-medium text-blue-500">
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
