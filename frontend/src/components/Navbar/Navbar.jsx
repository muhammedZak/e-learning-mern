import { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

import Sidenav from '../Sidenav/Sidenav';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import LoginSignupButton from '../Buttons/LoginSignupButton/LoginSignupButton';
import NavbarSearch from '../NavbarSearchBar/NavbarSearch';
import NavbarIconButtons from '../Buttons/NavbarIconButtons/NavbarIconButtons';
import useScreenSize from '../../customHooks/useScreenSize';
import ProfileIcon from '../avatarIcon/ProfileIcon';

const Navbar = () => {
  const { width: screenWidth } = useScreenSize();
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [showNestedSidebar, setShowNestedSidebar] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const onCategoryMouseEnter = () => {
    setShowCategoryDropdown(true);
  };

  const onCategoryMouseLeave = () => {
    setShowCategoryDropdown(false);
  };

  const handleNestedSidebar = () => {
    setShowNestedSidebar(!showNestedSidebar);
  };

  const handleNestedSidebarClose = () => {
    setShowNestedSidebar(false);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setShowNestedSidebar(false);
  };

  useEffect(() => {
    setIsMobile(screenWidth < 800);
  }, [screenWidth]);

  return (
    <>
      {(open || showNestedSidebar) && isMobile && (
        <>
          <div className="overlay" onClick={handleClose}></div>
          <button
            onClick={handleClose}
            className={`${
              open ? 'absolute' : 'hidden'
            } p-3 z-10 left-80 top-5   rounded-full bg-slate-300 transition-colors hover:bg-slate-200`}
          >
            <CloseIcon />
          </button>
        </>
      )}
      {isMobile && (
        <Sidenav
          open={open}
          onClose={handleClose}
          nestedSidebarOpen={showNestedSidebar}
          nestedSidebarHandle={handleNestedSidebar}
          nestedSidebarClose={handleNestedSidebarClose}
        />
      )}
      <nav className="px-6  md:py-2 h-16 flex items-center justify-between md:justify-normal bg-slate-100 border-b-2">
        <div className="md:hidden">
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon className="text-gray-900" />
          </IconButton>
        </div>
        <div className="flex-1 md:flex-none flex justify-center md:order-first">
          <Link to="/">
            <img
              className="w-16 object-cover"
              src="https://logowik.com/content/uploads/images/udemy-new-20212512.jpg"
              alt="logo"
            />
          </Link>
        </div>
        {!isMobile && (
          <>
            <div>
              <div
                onMouseEnter={onCategoryMouseEnter}
                onMouseLeave={onCategoryMouseLeave}
                className="relative"
              >
                <button className="hidden mx-4  md:block  cursor-auto  text-slate-900 text-sm font-medium">
                  Categories
                </button>
                <NavbarDropdown show={showCategoryDropdown} />
              </div>
            </div>
            <NavbarSearch />
          </>
        )}

        <div className="mr-10 hidden lg:block  text-slate-900 text-sm font-medium">
          Teach on Udemy
        </div>
        <NavbarIconButtons classes="md:hidden">
          <SearchOutlinedIcon className="text-gray-900" />
        </NavbarIconButtons>
        <NavbarIconButtons classes="mr-2">
          <ShoppingCartOutlinedIcon className="text-gray-900" />
        </NavbarIconButtons>
        {userInfo ? <ProfileIcon userInfo={userInfo} /> : <LoginSignupButton />}
      </nav>
    </>
  );
};

export default Navbar;
