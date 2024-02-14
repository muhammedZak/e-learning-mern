import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="h-screen flex  justify-center">
      <div className="pt-16">
        <h4 className="font-semibold text-2xl">Login here</h4>
        <hr className="my-2 " />
        <form action="">
          <label className="mb-1 text-lg text-slate-900 font-medium block">
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            required
            className="mb-4 py-3 pl-3 w-full border border-black"
          />
          <label className="mb-1 text-lg text-slate-900 font-medium block">
            Password
          </label>
          <input
            type="password"
            required
            className="mb-4 py-3 pl-3 w-full border border-black"
          />

          <button className="mb-4 py-3 px-32 block w-full text-center text-white bg-blue-500 hover:bg-opacity-75">
            Sign up
          </button>
        </form>
        <p className="text-center">
          Or
          <span className="ml-1 underline font-medium text-blue-500">
            <Link to="/signup">forgot password?</Link>
          </span>
        </p>
        <hr className="my-6 " />
        <p className="text-center text-sm">
          Do not have an account?
          <span className="underline font-medium text-blue-500">
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
