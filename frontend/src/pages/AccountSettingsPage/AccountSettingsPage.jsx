import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import ModalComponent from './Modal';

const AccountSettingsPage = () => {
  const [email, setEmail] = useState('');
  const [isChanging, setIschanging] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setEmail(userInfo.email);
  }, [userInfo.email]);

  const handleOnclick = (value) => {
    handleOpen();
    setIschanging(value);
  };

  return (
    <div className="px-10 py-20">
      <div>
        <h2 className="text-4xl text-slate-900 opacity-80">Account</h2>
      </div>
      <div>
        <div className="pb-3 pt-6 border-b">
          <ul className="flex gap-10">
            <li>Account security</li>
            <li>Notification settings</li>
            <li>Message settings</li>
            <li>Api client</li>
            <li>Close account</li>
          </ul>
        </div>
        <div className="py-3">
          <p className="mb-2 font-medium">Email:</p>
          <label className="flex items-center" htmlFor="email">
            <input
              value={email}
              disabled
              className="w-full  border md:w-1/2 p-3 outline-none"
              id="email"
              type="email"
            />
            <button
              onClick={() => handleOnclick('email')}
              className="py-3 px-3  border bg-black opacity-85"
            >
              <EditIcon sx={{ color: 'white' }} />
            </button>
          </label>
          <p className="my-2 font-medium">Password:</p>
          <label className="flex items-center" htmlFor="password">
            <input
              value="********"
              type="password"
              disabled
              className="w-full  border md:w-1/2 p-3 outline-none"
              id="password"
            />
            <button
              onClick={() => handleOnclick('pass')}
              className="py-3 px-3  border bg-black opacity-85"
            >
              <EditIcon sx={{ color: 'white' }} />
            </button>
          </label>{' '}
          <ModalComponent
            open={open}
            handleClose={handleClose}
            value={email}
            isChanging={isChanging}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
