import IconButton from '@mui/material/IconButton';

const NavbarIconButtons = ({ classes, children }) => {
  return (
    <div className={`${classes}`}>
      <IconButton>{children}</IconButton>
    </div>
  );
};

export default NavbarIconButtons;
