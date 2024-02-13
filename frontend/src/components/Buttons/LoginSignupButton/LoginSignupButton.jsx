import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ margin, children }) => {
  return (
    <Link to={children === 'LOGIN' ? '/login' : '/signup'}>
      <button
        className={`${
          margin && 'ml-2'
        } px-3 py-1 text-black text-sm font-medium border border-black hover:bg-slate-200`}
      >
        {children}
      </button>
    </Link>
  );
};

const LoginSignupButton = () => {
  return (
    <div className="hidden ml-auto md:flex ">
      <Button>LOGIN</Button>
      <Button margin="true">SIGNUP</Button>
    </div>
  );
};

export default LoginSignupButton;
