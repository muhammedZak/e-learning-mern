import React from 'react';

const Button = ({ margin, children }) => {
  return (
    <button
      className={`${
        margin && 'ml-2'
      } px-3 py-1 text-black text-sm font-medium border border-black hover:bg-slate-200`}
    >
      {children}
    </button>
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
