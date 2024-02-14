import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="h-screen flex  justify-center">
      <div className="pt-16">
        <h4 className="font-semibold text-2xl">Sign up here</h4>
        <hr className="my-2 " />
        <form action="">
          <label className="mb-1 text-lg text-slate-900 font-medium block">
            Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            required
            className="mb-4 py-3 pl-3 w-full border border-black"
          />
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
          <label htmlFor="" className="block mb-4 w-full text-sm">
            <input type="checkbox" className="mr-1" />
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </label>
          <button className="py-3 px-32 block w-full text-center text-white bg-blue-500 hover:bg-opacity-75">
            Sign up
          </button>
        </form>
        <hr className="my-6 " />
        <p className="text-center text-sm">
          Already have an account?
          <span className="underline font-medium text-blue-500">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
