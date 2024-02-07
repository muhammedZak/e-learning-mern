import {
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ListItems from '../ListItems/ListItems';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer variant="persistent" anchor="left" open={open} onClose={onClose}>
      <div className="w-64 h-fit relative   " onClick={onClose}>
        <Toolbar>
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', right: 10, top: 12 }}
          >
            <CloseIcon className="text-gray-900" />
          </IconButton>
        </Toolbar>
        <Divider />

        <ListItems
          items={[
            { id: 0, text: 'Login' },
            { id: 1, text: 'Sign up' },
          ]}
        />

        <Divider />
        <Typography variant="h6" component="h5" fontSize={18} px={2} mt={2}>
          Categories
        </Typography>

        <ListItems items={items} />

        <Divider />

        <ListItems items={[{ text: 'Become Instructor' }]} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
