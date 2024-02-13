import { useState } from 'react';
import ListItems from '../ListItems/ListItems';
import './Sidenav.css';
import ChildSidenav from './ChildSidenav';
import { Link } from 'react-router-dom';

const items = [
  { id: 0, icon: true, text: 'Development' },
  { id: 1, icon: true, text: 'Bussiness' },
  { id: 2, icon: true, text: 'Finance & Accounting' },
  { id: 3, icon: true, text: 'IT & Software' },
  { id: 4, icon: true, text: 'Office Productivity' },
  { id: 5, icon: true, text: 'Design' },
  { id: 6, icon: true, text: 'Marketing' },
  { id: 7, icon: true, text: 'Lifestyle' },
];

const Sidenav = ({
  open,
  nestedSidebarOpen,
  nestedSidebarHandle,
  nestedSidebarClose,
  onClose,
}) => {
  return (
    <>
      <ChildSidenav
        open={nestedSidebarOpen}
        onClose={onClose}
        nestedClose={nestedSidebarClose}
      />

      <div
        className={`transition-spacing duration-300 ease-in-out ${
          open ? 'w-72' : 'w-0'
        } h-full fixed z-10 top-0 left-0 bg-slate-100  overflow-x-hidden overflow-y-scroll`}
      >
        <div className="py-5">
          <ul>
            <li className="pl-5 py-2 pr-1 hover:bg-slate-200 cursor-pointer">
              <Link to="/login" className="font-medium " onClick={onClose}>
                Login
              </Link>
            </li>
            <li className="pl-5 py-2 pr-1 hover:bg-slate-200 cursor-pointer">
              <Link to="/signup" className="font-medium" onClick={onClose}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <h5 className="pl-5 py-2 text-lg font-medium text-slate-600">
          Categories
        </h5>
        <div className="">
          <ListItems items={items} onClick={nestedSidebarHandle} />
        </div>
        <hr />
        <div>
          <ul className="py-5">
            <li className="py-2 pl-5  hover:bg-slate-200">
              <a className="font-medium" href="#">
                Become a instructor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
