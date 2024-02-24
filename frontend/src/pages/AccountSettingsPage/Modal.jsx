import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';

import { setCredentials } from '../../store/slices/authSlice';
import { useEmailChangeMutation, usePasswordChangeMutation } from '../../store';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EmailModal = ({ value, onClose }) => {
  const [email, setEmail] = useState(value);
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const [emailEdit, results] = useEmailChangeMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await emailEdit({ email, password });
      dispatch(setCredentials(res.data));
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Change your email
      </Typography>
      <form onSubmit={onSubmit}>
        <div id="modal-modal-description">
          <label htmlFor="email">
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              className="my-2 p-2 w-full border outline-none"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              value={password}
              placeholder="Enter your password"
              className="my-2 p-2 w-full border outline-none"
            />
          </label>
        </div>
        <div className="  text-end">
          <button className="mt-3 px-4 py-2 bg-black text-white" type="submit">
            {results.isLoading ? <CircularProgress color="inherit" /> : 'Save'}
          </button>
        </div>
      </form>
    </>
  );
};

const PasswordModal = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const [changePassword, results] = usePasswordChangeMutation();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await changePassword({
        currentPassword,
        newPassword,
        confirmPassword,
      });
      dispatch(setCredentials(res.data));
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Change your email
      </Typography>
      <form onSubmit={onSubmit}>
        <div id="modal-modal-description">
          <label htmlFor="current-password">
            <input
              type="password"
              onChange={(e) => setCurrentPassword(e.target.value)}
              id="current-password"
              value={currentPassword}
              placeholder="Enter your current password"
              className="my-2 p-2 w-full border outline-none"
            />
          </label>
          <label htmlFor="new-password">
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              id="new-password"
              value={newPassword}
              placeholder="Enter your password"
              className="my-2 p-2 w-full border outline-none"
            />
          </label>
          <label htmlFor="confirm-password">
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              id="confirm-password"
              value={confirmPassword}
              placeholder="Enter your password"
              className="my-2 p-2 w-full border outline-none"
            />
          </label>
        </div>
        <div className="  text-end">
          <button className="mt-3 px-4 py-2 bg-black text-white" type="submit">
            {results.isLoading ? <CircularProgress color="inherit" /> : 'Save'}
          </button>
        </div>
      </form>
    </>
  );
};

const ModalComponent = ({ open, handleClose, value, isChanging }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isChanging === 'email' ? (
            <EmailModal value={value} onClose={handleClose} />
          ) : (
            <PasswordModal onClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
