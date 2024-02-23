import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';

import { logout } from '../../store/slices/authSlice';
import { useLogoutUserMutation } from '../../store';
import { Link, useNavigate } from 'react-router-dom';

const ProfileIcon = ({ userInfo }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const onAvatarMouseEnter = () => setShowDropdown(true);

  const onAvatarMouseLeave = () => setShowDropdown(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutUserApi] = useLogoutUserMutation();

  const logoutHandler = async () => {
    await logoutUserApi().unwrap();
    dispatch(logout());
    navigate('/login');
  };

  let avatar;

  if (userInfo.avatar) {
    avatar = (
      <Avatar
        sx={{ cursor: 'pointer' }}
        alt="Travis Howard"
        src="/static/images/avatar/2.jpg"
      />
    );
  } else {
    avatar = <Avatar sx={{ cursor: 'pointer' }}>H</Avatar>;
  }

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={onAvatarMouseEnter}
        onMouseLeave={onAvatarMouseLeave}
      >
        {avatar}
        <div
          className={`${showDropdown ? 'absolute' : 'hidden'}  right-0 z-50`}
        >
          <div className="w-72 mt-8  bg-white shadow-2xl">
            <div className="flex items-center gap-6 p-6">
              <div className="">{avatar}</div>
              <div className="">
                <Link className="block font-medium text-lg hover:text-blue-600">
                  {userInfo.name.length > 10
                    ? userInfo.name.substring(0, 10) + '...'
                    : userInfo.name}
                </Link>
                <Link className="hover:text-blue-600">
                  {userInfo.email.length > 15
                    ? userInfo.email.substring(0, 18) + '...'
                    : userInfo.email}
                </Link>
              </div>
            </div>
            <hr className="w-full" />
            <div className="px-5 py-2">
              <div className="leading-loose">
                <Link to="#" className="hover:text-blue-600 text-sm">
                  My Learning
                </Link>
              </div>
              <div className="py-2 leading-loose">
                <Link to="#" className=" hover:text-blue-600 text-sm">
                  My Cart
                </Link>
              </div>
              <div className="pb-2 leading-loose">
                <Link to="#" className="hover:text-blue-600 text-sm">
                  Whishlist
                </Link>
              </div>
              <div className="leading-loose">
                <Link to="#" className="hover:text-blue-600 text-sm">
                  Instructor Dashboard
                </Link>
              </div>
            </div>
            <hr className="w-full" />
            <div className="px-5 py-2">
              <div className="leading-loose">
                <Link to="#" className="hover:text-blue-600 text-sm">
                  Account Settings
                </Link>
              </div>
              <div className="py-2 leading-loose">
                <Link to="#" className="hover:text-blue-600 text-sm">
                  Purchase History
                </Link>
              </div>
              <div className="leading-loose">
                <Link to="#" className="hover:text-blue-600 text-sm">
                  Payment Methods
                </Link>
              </div>
            </div>
            <hr className="w-full" />
            <div className="px-5 py-2">
              <div className="leading-loose">
                <Link to="#" className="hover:text-blue-600 text-sm">
                  Edit Profile
                </Link>
              </div>
            </div>
            <hr className="w-full" />
            <div className="px-5 py-2">
              <div className="pb-2">
                <Link className=" leading-loose text-sm hover:text-blue-600">
                  Help
                </Link>
              </div>
              <div className="leading-loose hover:text-blue-600">
                <button onClick={() => dispatch(logout())}>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
