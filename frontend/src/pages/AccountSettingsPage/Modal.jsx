import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

import { useEmailChangeMutation } from '../../store';

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

  const [emailEdit, results] = useEmailChangeMutation();

  const onSubmit = (e) => {
    e.preventDefault();
    emailEdit({ email, password });
    onClose();
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

const PasswordModal = () => {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
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
            <PasswordModal />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
